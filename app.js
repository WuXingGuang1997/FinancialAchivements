// Gestione dello stato dell'applicazione
let completedAchievements = [];
let currentCategory = 'all';

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    // Attendi che il sistema utenti sia inizializzato
    setTimeout(() => {
        loadCurrentUserAchievements();
        renderAchievements();
        updateStats();
        setupCategoryFilters();
    }, 100);
});

// Carica achievement dell'utente corrente (solo utente autenticato)
function loadCurrentUserAchievements() {
    // Verifica autenticazione
    if (typeof isAuthenticated === 'function' && !isAuthenticated()) {
        completedAchievements = [];
        return;
    }
    
    // Verifica che l'utente corrente sia quello autenticato
    if (typeof getCurrentAuthUser === 'function') {
        const authUser = getCurrentAuthUser();
        if (authUser && typeof currentUserId !== 'undefined' && currentUserId !== authUser.id) {
            // Forza l'uso dell'utente autenticato
            if (typeof users !== 'undefined' && users[authUser.id]) {
                currentUserId = authUser.id;
                localStorage.setItem('currentAchievementUser', authUser.id);
            }
        }
    }
    
    if (typeof getCurrentUserAchievements === 'function') {
        completedAchievements = getCurrentUserAchievements();
    } else {
        // Fallback per compatibilità
        const oldData = localStorage.getItem('completedAchievements');
        completedAchievements = oldData ? JSON.parse(oldData) : [];
    }
}

// Renderizza gli achievement
function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';
    
    const filteredAchievements = currentCategory === 'all' 
        ? achievements 
        : achievements.filter(a => a.category === currentCategory);
    
    filteredAchievements.forEach(achievement => {
        const card = createAchievementCard(achievement);
        grid.appendChild(card);
    });
}

// Crea una card per un achievement
function createAchievementCard(achievement) {
    const card = document.createElement('div');
    const isCompletedAchievement = isCompleted(achievement.id);
    card.className = `achievement-card ${isCompletedAchievement ? 'completed' : ''}`;
    card.dataset.id = achievement.id;
    
    // Aggiungi event listener per il click sulla card
    card.addEventListener('click', (e) => {
        toggleAchievement(achievement.id, e);
    });
    
    const imgSrc = getAchievementImage(achievement);
    card.innerHTML = `
        <img src="${imgSrc}" alt="${achievement.name}" class="achievement-icon">
        <div class="achievement-info">
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-description">${achievement.description}</div>
            <span class="achievement-category">${getCategoryLabel(achievement.category)}</span>
        </div>
        ${isCompletedAchievement ? '<div class="completed-badge">✓</div>' : ''}
    `;
    
    return card;
}

// Toggle achievement completato
function toggleAchievement(id, event) {
    if (event) {
        event.stopPropagation();
    }
    
    const index = completedAchievements.indexOf(id);
    if (index > -1) {
        completedAchievements.splice(index, 1);
    } else {
        completedAchievements.push(id);
    }
    
    // Salva usando il sistema multi-utente
    if (typeof saveCurrentUserAchievements === 'function') {
        saveCurrentUserAchievements(completedAchievements);
    } else {
        // Fallback
        localStorage.setItem('completedAchievements', JSON.stringify(completedAchievements));
    }
    renderAchievements();
    updateStats();
    
    // Animazione di conferma
    const card = event ? event.currentTarget : document.querySelector(`[data-id="${id}"]`);
    if (card) {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }
}

// Verifica se un achievement è completato
function isCompleted(id) {
    return completedAchievements.includes(id);
}

// Aggiorna le statistiche
function updateStats() {
    const completed = completedAchievements.length;
    const total = achievements.length;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('completed').textContent = completed;
    document.getElementById('total').textContent = total;
    document.getElementById('percentage').textContent = percentage + '%';
    
    // Verifica achievement "Leggenda" (50)
    if (completed === total - 1 && !isCompleted(50)) {
        // Se tutti tranne "Leggenda" sono completati, completa automaticamente "Leggenda"
        if (!completedAchievements.includes(50)) {
            completedAchievements.push(50);
            // Salva usando il sistema multi-utente
            if (typeof saveCurrentUserAchievements === 'function') {
                saveCurrentUserAchievements(completedAchievements);
            } else {
                localStorage.setItem('completedAchievements', JSON.stringify(completedAchievements));
            }
            renderAchievements();
            updateStats();
        }
    }
}

// Setup filtri categoria
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderAchievements();
        });
    });
}

// Etichette categoria
function getCategoryLabel(category) {
    const labels = {
        'guadagni': '💰 Guadagni',
        'performance': '📈 Performance',
        'dividendi': '💳 Dividendi',
        'milestone': '🎯 Milestone',
        'strategia': '🎓 Strategia'
    };
    return labels[category] || category;
}

// Reset tutti gli achievement (utile per testing)
function resetAll() {
    if (confirm('Sei sicuro di voler resettare tutti gli achievement dell\'utente corrente?')) {
        completedAchievements = [];
        // Salva usando il sistema multi-utente
        if (typeof saveCurrentUserAchievements === 'function') {
            saveCurrentUserAchievements(completedAchievements);
        } else {
            localStorage.setItem('completedAchievements', JSON.stringify(completedAchievements));
        }
        renderAchievements();
        updateStats();
    }
}

// Aggiungi reset button nel console per debug (opzionale)
console.log('Per resettare tutti gli achievement, esegui: resetAll()');
