// Lista completa dei 50 achievement - ORDINATI DAL PIÙ FACILE AL PIÙ DIFFICILE
const achievements = [
    // ========== COMMON (Più Facili) ==========
    {
        id: 21,
        name: "Primo Acquisto",
        description: "Acquista il tuo primo titolo",
        category: "milestone",
        icon: "🎯",
        rarity: "common"
    },
    {
        id: 1,
        name: "Primi Passi",
        description: "Guadagna i tuoi primi 100€ da un singolo titolo",
        category: "guadagni",
        icon: "💰",
        rarity: "common"
    },
    {
        id: 15,
        name: "Primo Dividendo",
        description: "Ricevi il tuo primo dividendo",
        category: "dividendi",
        icon: "💳",
        rarity: "common"
    },
    {
        id: 22,
        name: "Portfolio Builder",
        description: "Possiedi almeno 10 titoli diversi",
        category: "milestone",
        icon: "📦",
        rarity: "common"
    },
    {
        id: 32,
        name: "Buy and Hold",
        description: "Mantieni un titolo per almeno 2 anni",
        category: "strategia",
        icon: "🤲",
        rarity: "common"
    },
    {
        id: 36,
        name: "Value Investor",
        description: "Acquista un titolo con P/E ratio inferiore a 15",
        category: "strategia",
        icon: "🔍",
        rarity: "common"
    },
    {
        id: 39,
        name: "Stop Loss Master",
        description: "Usa stop loss su almeno 10 operazioni",
        category: "strategia",
        icon: "🛡️",
        rarity: "common"
    },
    {
        id: 40,
        name: "Take Profit Pro",
        description: "Vendi al target di profitto su almeno 10 operazioni",
        category: "strategia",
        icon: "🎯",
        rarity: "common"
    },
    {
        id: 35,
        name: "Swing Trader",
        description: "Guadagna da almeno 5 operazioni swing",
        category: "strategia",
        icon: "🎢",
        rarity: "common"
    },
    {
        id: 46,
        name: "Crypto Investor",
        description: "Investi in criptovalute",
        category: "strategia",
        icon: "₿",
        rarity: "common"
    },
    {
        id: 47,
        name: "ETF Master",
        description: "Possiedi almeno 5 ETF diversi",
        category: "strategia",
        icon: "📦",
        rarity: "common"
    },
    {
        id: 25,
        name: "Anno di Trading",
        description: "Investi attivamente per 1 anno",
        category: "milestone",
        icon: "📅",
        rarity: "common"
    },
    {
        id: 2,
        name: "Mille Euro",
        description: "Guadagna 1.000€ da un singolo titolo",
        category: "guadagni",
        icon: "💵",
        rarity: "common"
    },
    
    // ========== RARE (Medi) ==========
    {
        id: 23,
        name: "Diversificatore",
        description: "Possiedi titoli in almeno 5 settori diversi",
        category: "milestone",
        icon: "🌍",
        rarity: "rare"
    },
    {
        id: 24,
        name: "Investitore Globale",
        description: "Possiedi titoli di almeno 3 continenti diversi",
        category: "milestone",
        icon: "🌎",
        rarity: "rare"
    },
    {
        id: 3,
        name: "$10k Master",
        description: "Ottieni un guadagno cumulativo di €10.000 da un singolo titolo",
        category: "guadagni",
        icon: "💶",
        rarity: "rare"
    },
    {
        id: 5,
        name: "Portafoglio d'Oro",
        description: "Raggiungi un guadagno totale di 50.000€",
        category: "guadagni",
        icon: "🏆",
        rarity: "rare"
    },
    {
        id: 7,
        name: "Primo 100%",
        description: "Il tuo primo titolo raggiunge un +100% di rendimento dall'acquisto",
        category: "performance",
        icon: "📈",
        rarity: "rare"
    },
    {
        id: 10,
        name: "Mese Perfetto",
        description: "Guadagna almeno il 20% in un mese",
        category: "performance",
        icon: "📊",
        rarity: "rare"
    },
    {
        id: 12,
        name: "Portfolio Plus",
        description: "Tutti i titoli in portafoglio in positivo",
        category: "performance",
        icon: "✅",
        rarity: "rare"
    },
    {
        id: 18,
        name: "Dividend Aristocrat",
        description: "Possiedi 10 titoli che pagano dividendi",
        category: "dividendi",
        icon: "👔",
        rarity: "rare"
    },
    {
        id: 19,
        name: "Rendimento Passivo",
        description: "Ricevi dividendi da almeno 5 titoli diversi in un trimestre",
        category: "dividendi",
        icon: "💼",
        rarity: "rare"
    },
    {
        id: 16,
        name: "Dividendo d'Oro",
        description: "Ricevi €1.000 in dividendi totali in un singolo anno solare",
        category: "dividendi",
        icon: "💴",
        rarity: "rare"
    },
    {
        id: 33,
        name: "Long Term Investor",
        description: "Mantieni un titolo per almeno 5 anni",
        category: "strategia",
        icon: "⏳",
        rarity: "rare"
    },
    {
        id: 34,
        name: "Day Trader",
        description: "Esegui almeno 10 operazioni in un giorno",
        category: "strategia",
        icon: "⚡",
        rarity: "rare"
    },
    {
        id: 37,
        name: "Growth Investor",
        description: "Acquista un titolo con crescita ricavi >30% annua",
        category: "strategia",
        icon: "🌱",
        rarity: "rare"
    },
    {
        id: 38,
        name: "Dollar Cost Averaging",
        description: "Investi lo stesso importo mensile per 12 mesi",
        category: "strategia",
        icon: "📊",
        rarity: "rare"
    },
    {
        id: 41,
        name: "Rebalancing",
        description: "Ribilanci il portafoglio almeno 4 volte in un anno",
        category: "strategia",
        icon: "⚖️",
        rarity: "rare"
    },
    {
        id: 44,
        name: "Short Seller",
        description: "Guadagna da almeno una posizione short",
        category: "strategia",
        icon: "📉",
        rarity: "rare"
    },
    {
        id: 49,
        name: "Tax Optimizer",
        description: "Ottimizza le tasse usando loss harvesting",
        category: "strategia",
        icon: "📑",
        rarity: "rare"
    },
    {
        id: 28,
        name: "Cento Operazioni",
        description: "Esegui 100 operazioni di trading",
        category: "milestone",
        icon: "📝",
        rarity: "rare"
    },
    {
        id: 30,
        name: "La Cifra Tonda",
        description: "Raggiungi un patrimonio investito totale (capitale proprio + profitti) di €100.000",
        category: "milestone",
        icon: "💎",
        rarity: "rare"
    },
    
    // ========== EPIC (Difficili) ==========
    {
        id: 4,
        name: "Centomila",
        description: "Guadagna 100.000€ da un singolo titolo",
        category: "guadagni",
        icon: "💸",
        rarity: "epic"
    },
    {
        id: 8,
        name: "Triplo",
        description: "Primo stock che fa +200% (triplica)",
        category: "performance",
        icon: "🚀",
        rarity: "epic"
    },
    {
        id: 11,
        name: "The Double-Up",
        description: "Raggiungi un +100% sul tuo portfolio totale, raddoppiando il capitale iniziale",
        category: "performance",
        icon: "🎯",
        rarity: "epic"
    },
    {
        id: 13,
        name: "Recovery Master",
        description: "Recupera una posizione da -50% a positivo",
        category: "performance",
        icon: "🔄",
        rarity: "epic"
    },
    {
        id: 17,
        name: "Diecimila Euro di Dividendi",
        description: "Guadagna 10.000€ di dividendi in un anno",
        category: "dividendi",
        icon: "💷",
        rarity: "epic"
    },
    {
        id: 20,
        name: "Cash Flow King",
        description: "Ricevi dividendi mensili per 12 mesi consecutivi",
        category: "dividendi",
        icon: "👑",
        rarity: "epic"
    },
    {
        id: 26,
        name: "Veterano",
        description: "Investi attivamente per 5 anni",
        category: "milestone",
        icon: "🎖️",
        rarity: "epic"
    },
    {
        id: 29,
        name: "Mille Operazioni",
        description: "Esegui 1.000 operazioni di trading",
        category: "milestone",
        icon: "📋",
        rarity: "epic"
    },
    {
        id: 42,
        name: "Settore Expert",
        description: "Diventa esperto investendo in un settore specifico",
        category: "strategia",
        icon: "🎓",
        rarity: "epic"
    },
    {
        id: 43,
        name: "IPO Hunter",
        description: "Partecipa ad almeno 3 IPO",
        category: "strategia",
        icon: "🔬",
        rarity: "epic"
    },
    {
        id: 45,
        name: "Options Trader",
        description: "Esegui almeno 5 operazioni con opzioni",
        category: "strategia",
        icon: "📜",
        rarity: "epic"
    },
    {
        id: 48,
        name: "Risk Manager",
        description: "Mantieni un portafoglio con rischio controllato per 1 anno",
        category: "strategia",
        icon: "🎲",
        rarity: "epic"
    },
    
    // ========== LEGENDARY (Molto Difficili) ==========
    {
        id: 6,
        name: "Milionario",
        description: "Raggiungi un guadagno totale di 1.000.000€",
        category: "guadagni",
        icon: "👑",
        rarity: "legendary"
    },
    {
        id: 9,
        name: "Decuplicato",
        description: "Primo stock che fa +900% (10x)",
        category: "performance",
        icon: "🌟",
        rarity: "legendary"
    },
    {
        id: 14,
        name: "Timing Perfetto",
        description: "Vendi al massimo e ricompri al minimo dello stesso titolo",
        category: "performance",
        icon: "⏰",
        rarity: "legendary"
    },
    {
        id: 27,
        name: "Maestro",
        description: "Investi attivamente per 10 anni",
        category: "milestone",
        icon: "🏅",
        rarity: "legendary"
    },
    {
        id: 31,
        name: "Portfolio Millionaire",
        description: "Raggiungi un valore di portafoglio di 1.000.000€",
        category: "milestone",
        icon: "💍",
        rarity: "legendary"
    },
    {
        id: 50,
        name: "Leggenda",
        description: "Completa tutti gli altri 49 achievement",
        category: "milestone",
        icon: "🌟",
        rarity: "legendary"
    }
];

// Funzione per generare SVG immagine basato su icona e rarità con stile futuristico
function getAchievementImage(achievement) {
    const rarityColors = {
        common: "#00f3ff",      // Neon Cyan
        rare: "#9d00ff",         // Neon Purple
        epic: "#ff00ff",        // Neon Pink/Magenta
        legendary: "#ff6600"    // Neon Orange
    };
    
    const rarityGradients = {
        common: ["#00f3ff", "#0066ff"],
        rare: ["#9d00ff", "#6600ff"],
        epic: ["#ff00ff", "#ff0066"],
        legendary: ["#ff6600", "#ff0066", "#9d00ff"]
    };
    
    const gradient = rarityGradients[achievement.rarity] || ["#00f3ff", "#0066ff"];
    const icon = achievement.icon;
    const isLegendary = achievement.rarity === 'legendary';
    
    // Genera SVG con gradiente neon e effetti futuristici
    const gradientStops = gradient.map((color, index) => 
        `<stop offset="${(index / (gradient.length - 1)) * 100}%" style="stop-color:${color};stop-opacity:1" />`
    ).join('');
    
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
            <defs>
                <linearGradient id="grad-${achievement.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                    ${gradientStops}
                </linearGradient>
            </defs>
            <!-- Background con gradiente neon -->
            <rect width="150" height="150" rx="15" fill="url(#grad-${achievement.id})" opacity="0.3"/>
            <!-- Overlay scuro -->
            <rect width="150" height="150" rx="15" fill="#0a0a0f" opacity="0.8"/>
            <!-- Bordo neon -->
            <rect width="150" height="150" rx="15" fill="none" stroke="url(#grad-${achievement.id})" stroke-width="2" opacity="0.6"/>
            <!-- Icona senza glow per performance -->
            <text x="75" y="75" font-size="60" text-anchor="middle" dominant-baseline="middle" 
                  fill="url(#grad-${achievement.id})">${icon}</text>
            ${isLegendary ? `
                <circle cx="75" cy="75" r="70" fill="none" stroke="url(#grad-${achievement.id})" 
                        stroke-width="2" stroke-dasharray="5,5" opacity="0.4"/>
            ` : ''}
        </svg>
    `.trim();
    
    // Usa encodeURIComponent invece di btoa per supportare caratteri Unicode (emoji)
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
