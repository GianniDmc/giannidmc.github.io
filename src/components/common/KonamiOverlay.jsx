import { useEffect } from 'react'
import { useSound } from '../../hooks/useSound'

function KonamiOverlay({ onClose }) {
    const { playKonami } = useSound()

    useEffect(() => {
        playKonami()

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [onClose, playKonami])

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md"
            style={{
                background: 'rgba(26, 20, 16, 0.95)'
            }}
            onClick={onClose}
        >
            {/* Content */}
            <div
                className="relative max-w-lg mx-4 p-10 text-center"
                style={{
                    background: 'linear-gradient(145deg, rgba(42, 31, 24, 0.98), rgba(26, 20, 16, 0.99))',
                    border: '3px solid #8B4513',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 50px rgba(139, 69, 19, 0.3)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Corner ornaments */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />

                {/* Crown */}
                <div className="mb-6 animate-float">
                    <span className="text-6xl">👑</span>
                </div>

                {/* Title */}
                <h3 className="font-medieval text-3xl text-gold mb-4 glow-gold">
                    Secret Découvert !
                </h3>

                {/* Divider */}
                <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
                    <span className="text-gold">⚜</span>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
                </div>

                <p className="font-cinzel text-sm text-parchment/60 mb-6 tracking-widest">
                    ↑ ↑ ↓ ↓ ← → ← → B A
                </p>

                {/* Message */}
                <div className="space-y-4 font-crimson text-parchment/90">
                    <p className="text-lg italic">
                        "Tu as découvert le code secret des anciens !"
                    </p>
                    <p className="text-parchment/70">
                        Félicitations, noble aventurier.
                        Ta perspicacité sera récompensée lors du Grand Banquet !
                    </p>
                    <p className="text-parchment/60 text-sm mt-4">
                        📸 Envoie-nous une capture d'écran pour prouver ta découverte !
                    </p>
                </div>

                {/* Achievement badge */}
                <div className="mt-8 inline-block px-6 py-3"
                    style={{
                        background: 'rgba(114, 47, 55, 0.3)',
                        border: '1px solid rgba(212, 165, 116, 0.3)'
                    }}>
                    <p className="font-cinzel text-gold text-sm tracking-wider">
                        ✨ MAÎTRE DES ARCANES ✨
                    </p>
                </div>

                {/* Close instruction */}
                <button
                    onClick={onClose}
                    className="mt-8 block w-full font-cinzel text-sm text-gold/60 hover:text-gold transition-colors tracking-wider"
                >
                    [ Cliquez pour fermer ]
                </button>
            </div>

            {/* Corner candles */}
            <div className="absolute top-8 left-8 text-4xl opacity-50 animate-candle">🕯️</div>
            <div className="absolute top-8 right-8 text-4xl opacity-50 animate-candle" style={{ animationDelay: '1s' }}>🕯️</div>
            <div className="absolute bottom-8 left-8 text-4xl opacity-50 animate-candle" style={{ animationDelay: '0.5s' }}>🕯️</div>
            <div className="absolute bottom-8 right-8 text-4xl opacity-50 animate-candle" style={{ animationDelay: '1.5s' }}>🕯️</div>
        </div>
    )
}

export default KonamiOverlay
