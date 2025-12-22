/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Palette Automnale
                amber: {
                    DEFAULT: '#B78953',
                    light: '#C9A06E',
                    dark: '#9A7245',
                },
                crimson: {
                    DEFAULT: '#964734',
                    light: '#AD5A45',
                    dark: '#7A3A2A',
                },
                maple: {
                    DEFAULT: '#692721',
                    light: '#7E322B',
                    dark: '#541F1A',
                },
                moss: {
                    DEFAULT: '#4C563F',
                    light: '#5D6A4D',
                    dark: '#3C4432',
                },
                lagoon: {
                    DEFAULT: '#243533',
                    light: '#2F4442',
                    dark: '#1A2625',
                },
                // Couleurs complémentaires
                parchment: {
                    DEFAULT: '#F5EDE0',
                    light: '#FBF8F3',
                    dark: '#E8DCC8',
                },
                gold: {
                    DEFAULT: '#C9A86C',
                    light: '#D4B883',
                    dark: '#B08E4C',
                    bright: '#D4AF37',
                },
                // Fond sombre automnal
                autumn: {
                    bg: '#1F1E1B',
                    card: '#2A2823',
                    border: '#3D3A32',
                },
            },
            fontFamily: {
                // Police style Seigneur des Anneaux
                lotr: ['Aniron', 'Cinzel Decorative', 'serif'],
                ringbearer: ['Ringbearer', 'Aniron', 'Cinzel Decorative', 'serif'],
                cinzel: ['Cinzel', 'serif'],
                crimsonText: ['Crimson Text', 'serif'],
                body: ['Crimson Text', 'Georgia', 'serif'],
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'candle': 'candleFlicker 3s ease-in-out infinite',
                'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
                'leaf-fall': 'leafFall 8s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                candleFlicker: {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.9', filter: 'brightness(0.95)' },
                },
                gentlePulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
                leafFall: {
                    '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
                },
            },
            boxShadow: {
                'autumn': '0 10px 30px rgba(31, 30, 27, 0.6)',
                'amber-glow': '0 0 20px rgba(183, 137, 83, 0.3)',
                'candle': '0 0 30px rgba(183, 137, 83, 0.2)',
            },
        },
    },
    plugins: [],
}
