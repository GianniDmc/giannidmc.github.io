# 💍 Mariage Anaëlle & Gianni

Site de mariage au thème **Medieval Fantasy x RPG** pour la célébration au Château de Mauriac le **10 Octobre 2026**.

🌐 **Site en ligne** : [mariage-anaelle-et-gianni.giannidamico.com](https://mariage-anaelle-et-gianni.giannidamico.com)

---

## 🎮 Thème

- **Ambiance** : Automne médiéval, inspiré du Seigneur des Anneaux
- **Palette** : Amber Glow, Crimson Blaze, Maple Spice, Moss Mist, Lagoon
- **Polices** : Cinzel, Crimson Text, Aniron (LOTR)
- **Vocabulaire** : RPG/JDR (quête, aventuriers, XP, buff, etc.)

---

## 📁 Structure

```
src/
├── components/
│   ├── common/          # Button, Countdown, SectionTitle, KonamiOverlay
│   ├── landing/         # Hero, SaveTheDate
│   ├── layout/          # Navbar, Footer
│   ├── info/            # Timeline, Location, Accommodation, DressCode
│   └── rsvp/            # RSVPForm
├── hooks/               # useSound, useKonamiCode
├── pages/               # Home, Quest, RSVP
└── styles/              # index.css (Tailwind + custom)
```

---

## 🚀 Commandes

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run deploy` | Déploie sur GitHub Pages |
| `npm run save` | Commit + push du code source |
| `npm run publish` | **save + deploy en une commande** |

---

## 📝 RSVP - Google Sheets

Le formulaire envoie les réponses à un Google Sheet via Apps Script.

### Configuration Apps Script

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.attending,           // "Oui" ou "Non"
      data.guestCount,
      data.additionalGuests,
      data.dietaryRestrictions,
      data.attendBrunch,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

**Colonnes du Sheet** : Date | Prénom | Nom | Email | Présence | Nb Invités | Invités Supp. | Allergies | Brunch | Message

**Déployer en** : Application Web → Accès : Tout le monde

---

## 🎨 Assets à ajouter

| Fichier | Emplacement | Description |
|---------|-------------|-------------|
| `aniron.ttf` | `public/fonts/` | Police LOTR ([dafont](https://www.dafont.com/aniron.font)) |
| `click.mp3` | `public/sounds/` | Son 8-bit au clic |
| `success.mp3` | `public/sounds/` | Son succès RSVP |
| `sword-cursor.png` | `public/cursors/` | Curseur épée (optionnel) |

---

## � Easter Egg

**Konami Code** : ↑ ↑ ↓ ↓ ← → ← → B A

---

## � Git

- **Branche `source`** : Code source
- **Branche `main`** : Site compilé (GitHub Pages)

---

Fait avec ❤️ pour Anaëlle & Gianni
