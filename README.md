# 🏰 Site de Mariage - Médiéval Fantasy x Arcade 🎮

Un site web de mariage unique combinant l'atmosphère épique du Médiéval Fantasy avec des touches rétro-gaming arcade.

> "Nous sommes deux aventuriers qui ont trouvé leur Player 2. Le mariage est notre prochaine quête."

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5173
```

### Build & Déploiement

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

## 🗂️ Structure du Projet

```
site-mariage/
├── public/
│   ├── images/
│   │   └── chateau_mauriac.png   # Photo du château
│   ├── sounds/                    # Sons 8-bit
│   ├── cursors/                   # Curseur épée
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/               # Composants réutilisables
│   │   ├── landing/              # Composants de la page d'accueil
│   │   ├── info/                 # Composants d'informations
│   │   ├── layout/               # Navbar, Footer
│   │   └── rsvp/                 # Formulaire RSVP
│   ├── hooks/                    # Hooks personnalisés
│   ├── pages/                    # Pages principales
│   └── styles/                   # CSS global
└── ...
```

## 🎮 Fonctionnalités

- ✅ Landing page avec compte à rebours
- ✅ Programme de la journée (Timeline gaming)
- ✅ Carte Google Maps stylisée
- ✅ Formulaire RSVP avec envoi vers Google Sheets
- ✅ Konami Code easter egg (↑↑↓↓←→←→BA)
- ✅ Sons 8-bit sur les boutons
- ✅ Design responsive (mobile-first)
- ✅ Curseur personnalisé (épée)

## 📋 Configuration du RSVP (Google Sheets)

### Étape 1 : Créer le Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille de calcul
3. Nommez-la "RSVP Mariage"
4. Ajoutez ces en-têtes en première ligne :
   - A1: `Timestamp`
   - B1: `Prénom`
   - C1: `Nom`
   - D1: `Email`
   - E1: `Nombre de personnes`
   - F1: `Restrictions alimentaires`
   - G1: `Brunch`
   - H1: `Message`

### Étape 2 : Créer le Google Apps Script

1. Dans votre Google Sheet, allez dans **Extensions > Apps Script**
2. Supprimez le code par défaut
3. Collez ce code :

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.firstName,
      data.lastName,
      data.email,
      data.guestCount,
      data.dietaryRestrictions || '',
      data.attendBrunch ? 'Oui' : 'Non',
      data.message || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Le script RSVP fonctionne !')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Sauvegardez (Ctrl+S ou Cmd+S)

### Étape 3 : Déployer le Script

1. Cliquez sur **Déployer > Nouveau déploiement**
2. Cliquez sur l'icône ⚙️ et sélectionnez **Application Web**
3. Configurez :
   - Description : "RSVP Mariage"
   - Exécuter en tant que : **Moi**
   - Qui peut accéder : **Tout le monde**
4. Cliquez sur **Déployer**
5. **Copiez l'URL du déploiement** (elle ressemble à `https://script.google.com/macros/s/ABC.../exec`)

### Étape 4 : Configurer le Site

1. Ouvrez `src/components/rsvp/RSVPForm.jsx`
2. Remplacez `YOUR_GOOGLE_APPS_SCRIPT_URL` par l'URL copiée
3. Décommentez le bloc `fetch` et commentez/supprimez la simulation

```javascript
// Remplacer cette ligne :
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'

// Par :
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/VOTRE_ID/exec'
```

## 🎨 Personnalisation

### Changer les couleurs

Modifiez `tailwind.config.js` :

```javascript
colors: {
  bordeaux: '#722F37',    // Couleur principale
  forest: '#228B22',       // Couleur secondaire
  gold: '#FFD700',         // Accents
  neonCyan: '#00FFFF',     // Arcade accent
  neonPink: '#FF10F0',     // Arcade accent
}
```

### Changer la date du mariage

Modifiez `src/components/landing/Hero.jsx` :

```javascript
const weddingDate = '2026-10-10T15:30:00'
```

### Ajouter des sons 8-bit

Placez vos fichiers `.mp3` dans `public/sounds/` :
- `click.mp3` - Son de clic
- `success.mp3` - Son de succès
- `konami.mp3` - Son du Konami code

## 🖼️ Assets à Ajouter

### Images requises :
- `public/images/chateau_mauriac.png` - Photo du château (fournie)

### Sons (optionnels) :
- Téléchargez des sons 8-bit gratuits sur [Freesound](https://freesound.org) ou [OpenGameArt](https://opengameart.org)
- Ou générez-les avec [BFXR](https://www.bfxr.net/)

### Curseur (optionnel) :
- Créez une image d'épée 32x32 pixels
- Placez-la dans `public/cursors/sword-cursor.png`

## 📱 Responsivité

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🚀 Déploiement sur GitHub Pages

1. **Créez un repository GitHub** nommé `site-mariage`

2. **Initialisez Git et poussez le code** :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/site-mariage.git
git push -u origin main
```

3. **Déployez** :
```bash
npm run deploy
```

4. **Activez GitHub Pages** :
   - Allez dans Settings > Pages
   - Source : `gh-pages` branch
   - Sauvegardez

5. Votre site sera disponible sur `https://VOTRE_USERNAME.github.io/site-mariage/`

## 🎮 Easter Egg : Konami Code

Tapez la séquence suivante sur votre clavier :
```
↑ ↑ ↓ ↓ ← → ← → B A
```

## 📄 Licence

Ce projet est créé avec ❤️ pour le mariage de Gianni & Anaëlle.

---

*Quest Mode: ON* 🎮⚔️
