# Site de Mariage A & G - Version Statique

Ce site a été converti en version statique pour éviter d'avoir besoin d'un serveur VPS. Tous les fichiers sont maintenant des fichiers HTML/CSS/JavaScript purs.

## 📁 Structure des fichiers

```
site-mariage/
├── index.html                 # Page d'accueil
├── notre-histoire.html        # Page "Notre Histoire"
├── le-lieu.html              # Page "Le Lieu"
├── programme.html             # Page "Programme"
├── inscription.html           # Page d'inscription
├── static/
│   └── images/               # Images du site
│       ├── logo_ga.png
│       ├── rencontre.jpg
│       ├── fiancailles.JPG
│       ├── mairie.jpg
│       ├── celebration.jpg
│       └── aperitif-dans-cour-vu-par-drone_3_8375-169460685099848.webp
└── README-STATIC.md          # Ce fichier
```

## 🚀 Déploiement

### Option 1 : GitHub Pages (Gratuit)
1. Créez un repository GitHub
2. Uploadez tous les fichiers HTML et le dossier `static`
3. Allez dans Settings > Pages
4. Sélectionnez "Deploy from a branch" et choisissez `main`
5. Votre site sera accessible à `https://votre-username.github.io/votre-repo`

### Option 2 : Netlify (Gratuit)
1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez le dossier contenant vos fichiers HTML
3. Votre site sera automatiquement déployé avec une URL comme `https://votre-site.netlify.app`

### Option 3 : Vercel (Gratuit)
1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Vercel détectera automatiquement que c'est un site statique et le déploiera

### Option 4 : Hébergement classique
Vous pouvez simplement uploader les fichiers sur n'importe quel hébergeur web classique.

## 📧 Configuration du formulaire d'inscription

Le formulaire d'inscription utilise actuellement un exemple avec Formspree. Pour le faire fonctionner :

### Option 1 : Formspree (Recommandé)
1. Allez sur [Formspree](https://formspree.io)
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Remplacez dans `inscription.html` :
   ```javascript
   fetch('https://formspree.io/f/votre-form-id', {
   ```
   par votre vrai endpoint Formspree.

### Option 2 : Netlify Forms
Si vous utilisez Netlify, ajoutez `data-netlify="true"` à votre formulaire :
```html
<form id="inscriptionForm" data-netlify="true" class="needs-validation" novalidate>
```

### Option 3 : EmailJS
Vous pouvez aussi utiliser EmailJS pour envoyer directement par email.

## 🎨 Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans chaque fichier HTML :
```css
:root {
    --color-primary: #8B4513;    /* Couleur principale */
    --color-secondary: #D2691E;  /* Couleur secondaire */
    --color-accent: #CD853F;     /* Couleur d'accent */
    /* ... */
}
```

### Changer les images
Remplacez les images dans le dossier `static/images/` par vos propres images.

### Changer les textes
Modifiez directement le contenu HTML dans chaque fichier.

### Changer la date du mariage
Dans `index.html`, modifiez la ligne :
```javascript
const weddingDate = new Date('2024-06-15T00:00:00').getTime();
```

## 🔧 Fonctionnalités

- ✅ **Compteur à rebours** sur la page d'accueil
- ✅ **Navigation responsive** avec menu fixe
- ✅ **Animations CSS** pour une meilleure expérience utilisateur
- ✅ **Formulaire d'inscription** avec gestion des invités supplémentaires
- ✅ **Design responsive** qui s'adapte aux mobiles
- ✅ **Thème médiéval/romantique** avec des couleurs chaudes

## 📱 Test local

Pour tester le site localement :
1. Ouvrez simplement `index.html` dans votre navigateur
2. Ou utilisez un serveur local simple :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js
   npx serve .
   ```

## 🗑️ Fichiers à supprimer

Vous pouvez maintenant supprimer ces fichiers qui ne sont plus nécessaires :
- `app.py`
- `environment.yml`
- `poetry.lock`
- `instance/`
- `templates/`

## 💡 Conseils

1. **Testez sur mobile** : Le site est responsive mais vérifiez que tout fonctionne bien
2. **Optimisez les images** : Compressez les images pour un chargement plus rapide
3. **Sauvegardez** : Gardez une copie de sauvegarde de vos fichiers
4. **HTTPS** : Utilisez HTTPS en production pour la sécurité

## 🆘 Support

Si vous avez des questions ou besoin d'aide pour personnaliser le site, n'hésitez pas à demander !
