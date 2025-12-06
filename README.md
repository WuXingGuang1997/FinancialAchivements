# 🏆 Financial Achievements - Sistema di Achievement per Investitori Retail

Un'applicazione web moderna e sicura per tracciare i tuoi successi come investitore retail, con 50 achievement personalizzati e sistema di autenticazione sicuro.

![Design Futuristico](https://img.shields.io/badge/Design-Futuristic-blue)
![Sicurezza](https://img.shields.io/badge/Security-SHA256-green)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%26%20Desktop-orange)

## ✨ Caratteristiche Principali

- 🔐 **Autenticazione Sicura**: Sistema di login/registrazione con password hashate (SHA-256)
- 👤 **Multi-Utente**: Ogni utente vede solo i propri achievement
- 🎯 **50 Achievement Unici**: Organizzati in 5 categorie
- 🎨 **Design Futuristico**: Interfaccia cyberpunk con effetti neon
- 📱 **Responsive**: Ottimizzato per tutti gli schermi
- 💾 **Salvataggio Locale**: Dati salvati nel browser (localStorage)
- ⚡ **Performance Ottimizzate**: Animazioni fluide e veloci

## 🚀 Demo Live

Il sito può essere hostato gratuitamente su:
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Vedi [DEPLOY.md](DEPLOY.md) per istruzioni dettagliate.

## 📋 Categorie Achievement

### 💰 Guadagni (6 achievement)
- Primi Passi: Guadagna i tuoi primi 100€
- Mille Euro: Guadagna 1.000€ da un singolo titolo
- **$10k Master**: Ottieni un guadagno cumulativo di €10.000
- Centomila: Guadagna 100.000€ da un singolo titolo
- Portfolio d'Oro: Raggiungi un guadagno totale di 50.000€
- Milionario: Raggiungi un guadagno totale di 1.000.000€

### 📈 Performance (8 achievement)
- **Primo 100%**: Il tuo primo titolo raggiunge un +100%
- Triplo: Primo stock che fa +200%
- Decuplicato: Primo stock che fa +900% (10x)
- Mese Perfetto: Guadagna almeno il 20% in un mese
- **The Double-Up**: Raggiungi un +100% sul portfolio totale
- Portfolio Plus: Tutti i titoli in portafoglio in positivo
- Recovery Master: Recupera una posizione da -50% a positivo
- Timing Perfetto: Vendi al massimo e ricompri al minimo

### 💳 Dividendi (6 achievement)
- Primo Dividendo: Ricevi il tuo primo dividendo
- **Dividendo d'Oro**: Ricevi €1.000 in dividendi in un anno
- Diecimila Euro di Dividendi: Guadagna 10.000€ di dividendi in un anno
- Dividend Aristocrat: Possiedi 10 titoli che pagano dividendi
- Rendimento Passivo: Ricevi dividendi da almeno 5 titoli diversi
- Cash Flow King: Ricevi dividendi mensili per 12 mesi consecutivi

### 🎯 Milestone (11 achievement)
- Primo Acquisto: Acquista il tuo primo titolo
- Portfolio Builder: Possiedi almeno 10 titoli diversi
- Diversificatore: Possiedi titoli in almeno 5 settori diversi
- Investitore Globale: Possiedi titoli di almeno 3 continenti diversi
- Anno di Trading: Investi attivamente per 1 anno
- Veterano: Investi attivamente per 5 anni
- Maestro: Investi attivamente per 10 anni
- Cento Operazioni: Esegui 100 operazioni di trading
- Mille Operazioni: Esegui 1.000 operazioni di trading
- **La Cifra Tonda**: Raggiungi un patrimonio di €100.000
- Portfolio Millionaire: Raggiungi un valore di portafoglio di 1.000.000€

### 🎓 Strategia (19 achievement)
- Buy and Hold: Mantieni un titolo per almeno 2 anni
- Long Term Investor: Mantieni un titolo per almeno 5 anni
- Day Trader: Esegui almeno 10 operazioni in un giorno
- Swing Trader: Guadagna da almeno 5 operazioni swing
- Value Investor: Acquista un titolo con P/E ratio < 15
- Growth Investor: Acquista un titolo con crescita ricavi >30%
- Dollar Cost Averaging: Investi lo stesso importo mensile per 12 mesi
- Stop Loss Master: Usa stop loss su almeno 10 operazioni
- Take Profit Pro: Vendi al target su almeno 10 operazioni
- Rebalancing: Ribilanci il portafoglio almeno 4 volte in un anno
- Settore Expert: Diventa esperto investendo in un settore specifico
- IPO Hunter: Partecipa ad almeno 3 IPO
- Short Seller: Guadagna da almeno una posizione short
- Options Trader: Esegui almeno 5 operazioni con opzioni
- Crypto Investor: Investi in criptovalute
- ETF Master: Possiedi almeno 5 ETF diversi
- Risk Manager: Mantieni un portafoglio con rischio controllato per 1 anno
- Tax Optimizer: Ottimizza le tasse usando loss harvesting
- Leggenda: Completa tutti gli altri 49 achievement

## 🔒 Sicurezza

- **Password Hashate**: Tutte le password sono hashate con SHA-256
- **Session Management**: Token di sessione sicuri con scadenza 24h
- **Isolamento Dati**: Ogni utente vede solo i propri achievement
- **Validazione Input**: Controlli lato client per sicurezza

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica
- **CSS3**: Design moderno con animazioni
- **JavaScript Vanilla**: Nessuna dipendenza esterna
- **Web Crypto API**: Hash sicuro delle password
- **LocalStorage**: Salvataggio dati lato client

## 📁 Struttura Progetto

```
FinancialAchivements/
├── index.html          # Pagina principale
├── styles.css          # Stili futuristici
├── achievements.js     # Lista dei 50 achievement
├── app.js             # Logica applicazione
├── auth.js            # Sistema di autenticazione
├── users.js           # Gestione utenti
├── DEPLOY.md          # Guida al deploy
└── README.md          # Questo file
```

## 🚀 Installazione Locale

1. **Clona il repository**
   ```bash
   git clone https://github.com/WuXingGuang1997/FinancialAchivements.git
   cd FinancialAchivements
   ```

2. **Apri il file**
   ```bash
   open index.html
   ```
   Oppure apri `index.html` direttamente nel browser

3. **Inizia a usare**
   - Registra un nuovo account
   - Inizia a completare i tuoi achievement!

## 📱 Compatibilità

- ✅ Chrome/Edge (ultime versioni)
- ✅ Firefox (ultime versioni)
- ✅ Safari (ultime versioni)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablet (iPad, Android)

## 🎨 Personalizzazione

Puoi personalizzare gli achievement modificando `achievements.js`:
- Aggiungi nuovi achievement
- Modifica descrizioni esistenti
- Cambia categorie

## 📝 Note

- I dati sono salvati localmente nel browser
- Per resettare tutti gli achievement, apri la console e esegui: `resetAll()`
- Le password non possono essere recuperate (non sono salvate in chiaro)

## 🤝 Contribuire

Contributi sono benvenuti! Sentiti libero di:
- Segnalare bug
- Suggerire nuovi achievement
- Migliorare il design
- Ottimizzare le performance

## 📄 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 👤 Autore

**WuXingGuang1997**

## 🌟 Star History

Se ti piace questo progetto, lascia una ⭐ su GitHub!

---

**Buon investimento! 📈💰**
