// Gestione Multi-Utente
let currentUserId = null;
let users = {};

// Inizializza il sistema utenti
function initUsers() {
    // Verifica autenticazione
    if (typeof isAuthenticated === 'function' && !isAuthenticated()) {
        return;
    }
    
    // Carica utenti dal localStorage
    const savedUsers = localStorage.getItem('achievementUsers');
    const savedCurrentUser = localStorage.getItem('currentAchievementUser');
    
    if (savedUsers) {
        users = JSON.parse(savedUsers);
    }
    
    // Se c'è un utente autenticato, usa quello
    if (typeof getCurrentAuthUser === 'function') {
        const authUser = getCurrentAuthUser();
        if (authUser) {
            const userId = authUser.id;
            if (!users[userId]) {
                users[userId] = {
                    id: userId,
                    name: authUser.username,
                    createdAt: authUser.createdAt
                };
                saveUsers();
            }
            currentUserId = userId;
            localStorage.setItem('currentAchievementUser', userId);
            updateUserSelector();
            renderUsersList();
            return;
        }
    }
    
    // Migrazione dati vecchi (se esistono)
    const oldData = localStorage.getItem('completedAchievements');
    if (oldData && Object.keys(users).length === 0) {
        // Crea un utente di default con i dati esistenti
        const defaultUserId = 'user_' + Date.now();
        users[defaultUserId] = {
            id: defaultUserId,
            name: 'Utente Principale',
            createdAt: new Date().toISOString()
        };
        const oldAchievements = JSON.parse(oldData);
        localStorage.setItem(`achievements_${defaultUserId}`, JSON.stringify(oldAchievements));
        localStorage.setItem('achievementUsers', JSON.stringify(users));
        localStorage.setItem('currentAchievementUser', defaultUserId);
        currentUserId = defaultUserId;
        // Rimuovi i vecchi dati
        localStorage.removeItem('completedAchievements');
    } else if (savedCurrentUser && users[savedCurrentUser]) {
        currentUserId = savedCurrentUser;
    } else if (Object.keys(users).length > 0) {
        // Usa il primo utente disponibile
        currentUserId = Object.keys(users)[0];
        localStorage.setItem('currentAchievementUser', currentUserId);
    } else {
        // Crea un utente di default
        createDefaultUser();
    }
    
    updateUserSelector();
    renderUsersList();
}

// Crea un utente di default
function createDefaultUser() {
    const defaultUserId = 'user_' + Date.now();
    users[defaultUserId] = {
        id: defaultUserId,
        name: 'Utente Principale',
        createdAt: new Date().toISOString()
    };
    currentUserId = defaultUserId;
    saveUsers();
    localStorage.setItem('currentAchievementUser', defaultUserId);
}

// Salva utenti nel localStorage
function saveUsers() {
    localStorage.setItem('achievementUsers', JSON.stringify(users));
}

// Ottieni achievement completati per l'utente corrente
function getCurrentUserAchievements() {
    if (!currentUserId) return [];
    const key = `achievements_${currentUserId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// Salva achievement completati per l'utente corrente
function saveCurrentUserAchievements(achievements) {
    if (!currentUserId) return;
    const key = `achievements_${currentUserId}`;
    localStorage.setItem(key, JSON.stringify(achievements));
}

// Cambia utente corrente (DISABILITATO - ogni utente vede solo i propri dati)
window.switchUser = function(userId) {
    // Verifica che l'utente sia quello autenticato
    if (typeof getCurrentAuthUser === 'function') {
        const authUser = getCurrentAuthUser();
        if (authUser && authUser.id === userId) {
            // Permetti solo se è l'utente autenticato
            currentUserId = userId;
            localStorage.setItem('currentAchievementUser', userId);
            updateUserSelector();
            if (typeof loadCurrentUserAchievements === 'function') {
                loadCurrentUserAchievements();
            }
            if (typeof renderAchievements === 'function') {
                renderAchievements();
            }
            if (typeof updateStats === 'function') {
                updateStats();
            }
        } else {
            console.warn('Accesso negato: puoi vedere solo i tuoi dati');
        }
    }
};

// Crea nuovo utente (disabilitato con sistema di autenticazione)
function createUser(userName) {
    alert('Per creare un nuovo account, usa la funzione di registrazione nella schermata di login. Ogni utente può vedere solo i propri achievement.');
    closeUserModal();
};

// Elimina utente (disabilitato con sistema di autenticazione)
window.deleteUser = function(userId) {
    alert('Non puoi eliminare account autenticati. Per eliminare il tuo account, contatta il supporto.');
};

// Aggiorna il selettore utente nell'header
function updateUserSelector() {
    const btn = document.getElementById('currentUserName');
    if (btn && currentUserId && users[currentUserId]) {
        btn.textContent = users[currentUserId].name;
    }
}

// Renderizza la lista utenti nel modal (solo utente corrente)
function renderUsersList() {
    const list = document.getElementById('usersList');
    if (!list) return;
    
    list.innerHTML = '';
    
    // Mostra solo l'utente corrente autenticato
    if (currentUserId && users[currentUserId]) {
        const user = users[currentUserId];
        const userItem = document.createElement('div');
        userItem.className = 'user-item active';
        userItem.innerHTML = `
            <div class="user-info">
                <span class="user-name">${user.name}</span>
                <span class="user-badge">${getUserAchievementCount(user.id)} achievement completati</span>
            </div>
        `;
        list.appendChild(userItem);
    } else {
        list.innerHTML = '<p class="no-users">Nessun utente trovato.</p>';
    }
}

// Ottieni il numero di achievement completati per un utente
function getUserAchievementCount(userId) {
    const key = `achievements_${userId}`;
    const data = localStorage.getItem(key);
    if (!data) return 0;
    const achievements = JSON.parse(data);
    return achievements.length;
}

// Apri modal utenti
function openUserModal() {
    const modal = document.getElementById('userModal');
    if (modal) {
        // Aggiorna la lista prima di aprire
        renderUsersList();
        modal.classList.add('active');
    }
}

// Chiudi modal utenti
function closeUserModal() {
    const modal = document.getElementById('userModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Setup event listeners per il modal
function setupUserModal() {
    const btn = document.getElementById('userSelectorBtn');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('userModal');
    
    if (btn) {
        btn.addEventListener('click', openUserModal);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeUserModal);
    }
    
    // Chiudi modal cliccando fuori
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeUserModal();
            }
        });
    }
}

// Inizializza tutto quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    initUsers();
    setupUserModal();
});

