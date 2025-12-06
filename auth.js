// Sistema di Autenticazione Sicuro
let currentSession = null;
let authenticatedUsers = {};

// Inizializza il sistema di autenticazione
function initAuth() {
    // Carica utenti autenticati
    const savedAuthUsers = localStorage.getItem('authUsers');
    if (savedAuthUsers) {
        authenticatedUsers = JSON.parse(savedAuthUsers);
    }
    
    // Verifica sessione attiva
    const session = localStorage.getItem('currentSession');
    if (session) {
        try {
            const sessionData = JSON.parse(session);
            // Verifica che la sessione non sia scaduta (24 ore)
            if (Date.now() - sessionData.timestamp < 24 * 60 * 60 * 1000) {
                if (authenticatedUsers[sessionData.userId]) {
                    currentSession = sessionData;
                    showMainApp();
                    return;
                }
            } else {
                // Sessione scaduta
                localStorage.removeItem('currentSession');
            }
        } catch (e) {
            localStorage.removeItem('currentSession');
        }
    }
    
    // Mostra schermata di login
    showLoginScreen();
}

// Hash password usando Web Crypto API
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Genera session token
function generateSessionToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Registra nuovo utente
async function registerUser(username, password) {
    if (!username || username.trim().length < 3) {
        return { success: false, error: 'Il nome utente deve essere di almeno 3 caratteri' };
    }
    
    if (!password || password.length < 6) {
        return { success: false, error: 'La password deve essere di almeno 6 caratteri' };
    }
    
    // Verifica se l'utente esiste già
    const existingUser = Object.values(authenticatedUsers).find(u => 
        u.username.toLowerCase() === username.trim().toLowerCase()
    );
    
    if (existingUser) {
        return { success: false, error: 'Nome utente già esistente' };
    }
    
    // Hash della password
    const passwordHash = await hashPassword(password);
    
    // Crea nuovo utente
    const userId = 'auth_user_' + Date.now();
    authenticatedUsers[userId] = {
        id: userId,
        username: username.trim(),
        passwordHash: passwordHash,
        createdAt: new Date().toISOString()
    };
    
    // Salva
    localStorage.setItem('authUsers', JSON.stringify(authenticatedUsers));
    
    // Crea sessione
    const sessionToken = generateSessionToken();
    const session = {
        userId: userId,
        token: sessionToken,
        timestamp: Date.now()
    };
    
    localStorage.setItem('currentSession', JSON.stringify(session));
    currentSession = session;
    
    // Inizializza dati utente nel sistema achievement
    initUserAchievements(userId, username.trim());
    
    return { success: true };
}

// Login utente
async function loginUser(username, password) {
    if (!username || !password) {
        return { success: false, error: 'Inserisci nome utente e password' };
    }
    
    // Trova utente
    const user = Object.values(authenticatedUsers).find(u => 
        u.username.toLowerCase() === username.trim().toLowerCase()
    );
    
    if (!user) {
        return { success: false, error: 'Nome utente o password errati' };
    }
    
    // Verifica password
    const passwordHash = await hashPassword(password);
    if (passwordHash !== user.passwordHash) {
        return { success: false, error: 'Nome utente o password errati' };
    }
    
    // Crea sessione
    const sessionToken = generateSessionToken();
    const session = {
        userId: user.id,
        token: sessionToken,
        timestamp: Date.now()
    };
    
    localStorage.setItem('currentSession', JSON.stringify(session));
    currentSession = session;
    
    return { success: true };
}

// Logout
function logout() {
    if (confirm('Sei sicuro di voler uscire?')) {
        currentSession = null;
        localStorage.removeItem('currentSession');
        showLoginScreen();
    }
}

// Mostra schermata di login
function showLoginScreen() {
    const loginScreen = document.getElementById('loginScreen');
    const mainContainer = document.getElementById('mainContainer');
    
    if (loginScreen) loginScreen.style.display = 'flex';
    if (mainContainer) mainContainer.style.display = 'none';
    
    // Reset form
    const forms = document.querySelectorAll('.login-form');
    forms.forEach(form => {
        if (form instanceof HTMLFormElement) {
            form.reset();
        }
    });
    
    const errors = document.querySelectorAll('.login-error');
    errors.forEach(error => error.textContent = '');
}

// Mostra app principale
function showMainApp() {
    const loginScreen = document.getElementById('loginScreen');
    const mainContainer = document.getElementById('mainContainer');
    
    if (loginScreen) loginScreen.style.display = 'none';
    if (mainContainer) mainContainer.style.display = 'block';
    
    // Inizializza sistema utenti con l'utente autenticato
    if (currentSession && authenticatedUsers[currentSession.userId]) {
        const user = authenticatedUsers[currentSession.userId];
        // Imposta l'utente corrente nel sistema achievement
        if (typeof initUsers === 'function') {
            initUsers();
        }
    }
}

// Inizializza achievement per nuovo utente
function initUserAchievements(userId, username) {
    // Crea entry nel sistema achievement
    if (typeof users !== 'undefined') {
        users[userId] = {
            id: userId,
            name: username,
            createdAt: new Date().toISOString()
        };
        if (typeof saveUsers === 'function') {
            saveUsers();
        }
    }
    
    // Imposta come utente corrente
    if (typeof currentUserId !== 'undefined') {
        currentUserId = userId;
        localStorage.setItem('currentAchievementUser', userId);
    }
}

// Ottieni utente corrente autenticato
function getCurrentAuthUser() {
    if (!currentSession) return null;
    return authenticatedUsers[currentSession.userId] || null;
}

// Verifica se l'utente è autenticato
function isAuthenticated() {
    return currentSession !== null && authenticatedUsers[currentSession.userId] !== undefined;
}

// Setup event listeners per autenticazione
function setupAuthListeners() {
    // Tab switching
    const tabs = document.querySelectorAll('.login-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Aggiorna tab attivi
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Mostra form corretto
            const forms = document.querySelectorAll('.login-form');
            forms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${targetTab}Form`) {
                    form.classList.add('active');
                }
            });
            
            // Reset errori
            document.querySelectorAll('.login-error').forEach(e => e.textContent = '');
        });
    });
    
    // Toggle password visibility
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                    btn.textContent = '🙈';
                } else {
                    input.type = 'password';
                    btn.textContent = '👁️';
                }
            }
        });
    });
    
    // Form Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');
            
            errorDiv.textContent = '';
            
            const result = await loginUser(username, password);
            if (result.success) {
                showMainApp();
                // Ricarica la pagina per inizializzare tutto
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            } else {
                errorDiv.textContent = result.error;
                errorDiv.style.display = 'block';
            }
        });
    }
    
    // Form Registrazione
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const errorDiv = document.getElementById('registerError');
            
            errorDiv.textContent = '';
            
            if (password !== confirmPassword) {
                errorDiv.textContent = 'Le password non corrispondono';
                errorDiv.style.display = 'block';
                return;
            }
            
            const result = await registerUser(username, password);
            if (result.success) {
                showMainApp();
                // Ricarica la pagina per inizializzare tutto
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            } else {
                errorDiv.textContent = result.error;
                errorDiv.style.display = 'block';
            }
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
}

// Inizializza quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    setupAuthListeners();
});

