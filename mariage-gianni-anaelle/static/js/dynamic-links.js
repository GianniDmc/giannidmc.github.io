/**
 * Système de liens dynamiques pour le site de mariage
 * Adapte automatiquement les liens selon le domaine d'accès
 */

(function() {
    'use strict';

    // Configuration des domaines et chemins
    const DOMAIN_CONFIG = {
        'mariage-gianni-et-anaelle.giannidamico.com': {
            basePath: '',
            isCustomDomain: true
        },
        'giannidmc.github.io': {
            basePath: 'mariage-gianni-anaelle',
            isCustomDomain: false
        }
    };

    /**
     * Obtient la configuration du domaine actuel
     */
    function getCurrentDomainConfig() {
        const hostname = window.location.hostname;
        return DOMAIN_CONFIG[hostname] || DOMAIN_CONFIG['giannidmc.github.io']; // Fallback
    }

    /**
     * Génère une URL dynamique basée sur le domaine actuel
     * @param {string} page - Le nom de la page (ex: 'index.html', 'notre-histoire.html')
     * @param {boolean} isRootPage - Si true, considère que la page est à la racine du site
     */
    function generateDynamicUrl(page, isRootPage = false) {
        const config = getCurrentDomainConfig();
        const origin = window.location.origin;
        
        if (isRootPage) {
            // Page à la racine (comme index.html principal)
            return `${origin}/${page}`;
        }
        
        if (config.basePath) {
            return `${origin}/${config.basePath}/${page}`;
        }
        
        return `${origin}/${page}`;
    }

    /**
     * Met à jour tous les liens dans la navigation
     */
    function updateNavigationLinks() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-brand');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('#')) {
                return; // Ignorer les liens externes et les ancres
            }

            // Déterminer si c'est un lien vers la racine
            const isRootLink = href === 'index.html' || href === '../index.html';
            
            if (isRootLink) {
                // Lien vers la page principale - rediriger vers la racine
                link.href = generateDynamicUrl('', true);
            } else {
                // Lien vers une page du site
                const pageName = href.replace('./', '').replace('../', '');
                link.href = generateDynamicUrl(pageName);
            }
        });
    }

    /**
     * Met à jour tous les liens internes dans le contenu
     */
    function updateContentLinks() {
        const contentLinks = document.querySelectorAll('a[href]:not(.nav-link):not(.navbar-brand)');
        
        contentLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
                return; // Ignorer les liens externes, ancres et mailto
            }

            // Si c'est un lien vers une page HTML locale
            if (href.endsWith('.html') && !href.includes('://')) {
                const isRootLink = href === 'index.html' || href === '../index.html';
                
                if (isRootLink) {
                    link.href = generateDynamicUrl('', true);
                } else {
                    const pageName = href.replace('./', '').replace('../', '');
                    link.href = generateDynamicUrl(pageName);
                }
            }
        });
    }

    /**
     * Met à jour les chemins des ressources statiques (images, CSS, JS)
     */
    function updateResourcePaths() {
        const config = getCurrentDomainConfig();
        
        // Seulement nécessaire si on a un basePath
        if (!config.basePath) return;

        // Mettre à jour les images avec des chemins relatifs
        const images = document.querySelectorAll('img[src^="static/"]');
        images.forEach(img => {
            const src = img.getAttribute('src');
            img.src = `${config.basePath}/${src}`;
        });

        // Mettre à jour les liens CSS avec des chemins relatifs
        const cssLinks = document.querySelectorAll('link[href^="static/"]');
        cssLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.href = `${config.basePath}/${href}`;
        });

        // Mettre à jour les scripts avec des chemins relatifs
        const scripts = document.querySelectorAll('script[src^="static/"]');
        scripts.forEach(script => {
            const src = script.getAttribute('src');
            script.src = `${config.basePath}/${src}`;
        });
    }

    /**
     * Fonction utilitaire pour créer des liens dynamiques en JavaScript
     * @param {string} page - Le nom de la page
     * @param {boolean} isRootPage - Si la page est à la racine
     */
    window.createDynamicLink = function(page, isRootPage = false) {
        return generateDynamicUrl(page, isRootPage);
    };

    /**
     * Initialisation automatique au chargement de la page
     */
    function init() {
        updateNavigationLinks();
        updateContentLinks();
        updateResourcePaths();
        
        console.log('Liens dynamiques initialisés pour:', window.location.hostname);
    }

    // Initialiser quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
