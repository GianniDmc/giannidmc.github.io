import { Link } from 'react-router-dom'
import Countdown from '../common/Countdown'
import Button from '../common/Button'

// Import image for Vite


function Hero() {
    const weddingDate = '2026-10-10T15:30:00'

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/chateau_mauriac.png"
                    alt="Château de Mauriac"
                    className="w-full h-full object-cover"
                />
                {/* Dark autumn overlay */}
                <div className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(31, 30, 27, 0.85) 0%, rgba(31, 30, 27, 0.65) 40%, rgba(31, 30, 27, 0.9) 100%)'
                    }} />

                {/* Vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(31,30,27,0.7)_100%)]" />

                {/* Floating autumn leaves */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="autumn-leaf" style={{ left: '10%', animationDelay: '0s' }}>🍂</div>
                    <div className="autumn-leaf" style={{ left: '25%', animationDelay: '2s' }}>🍁</div>
                    <div className="autumn-leaf" style={{ left: '50%', animationDelay: '4s' }}>🍂</div>
                    <div className="autumn-leaf" style={{ left: '75%', animationDelay: '1s' }}>🍁</div>
                    <div className="autumn-leaf" style={{ left: '90%', animationDelay: '3s' }}>🍂</div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 pt-56">


                {/* Names - LOTR Style with Ringbearer font */}
                <h1 className="font-ringbearer text-5xl md:text-7xl lg:text-8xl mb-6 glow-amber"
                    style={{ color: '#C9A86C' }}>
                    <span className="inline-block hover:scale-105 transition-transform duration-300">Anaëlle</span>
                    <span className="text-parchment mx-3 md:mx-4 text-3xl md:text-4xl">&</span>
                    <span className="inline-block hover:scale-105 transition-transform duration-300">Gianni</span>
                </h1>

                {/* Decorative divider with autumn leaves */}
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <div className="w-16 md:w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #B78953)' }} />
                    <span className="text-2xl md:text-3xl">🍁</span>
                    <div className="w-16 md:w-24 h-px" style={{ background: 'linear-gradient(to left, transparent, #B78953)' }} />
                </div>

                {/* Save the Date */}
                <div className="mb-10">
                    <p className="font-cinzel text-lg md:text-xl tracking-[0.3em] mb-3 uppercase"
                        style={{ color: '#B78953' }}>
                        Save the Date
                    </p>
                    <p className="font-medieval text-2xl md:text-3xl text-parchment">
                        10 Octobre 2026
                    </p>
                </div>

                {/* Quote - RPG style */}
                <div className="max-w-2xl mx-auto mb-12">
                    <p className="font-crimsonText text-xl md:text-2xl text-parchment/90 italic leading-relaxed">
                        "Deux aventuriers se sont trouvés.
                        <br />
                        Ensemble, ils écrivent leur légende."
                    </p>
                </div>

                {/* Countdown */}
                <div className="mb-14">
                    <Countdown targetDate={weddingDate} />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                    <Link to="/quest">
                        <Button variant="royal" size="lg">
                            📜 Guide de Quête
                        </Button>
                    </Link>
                    <Link to="/rsvp">
                        <Button variant="confirm" size="lg">
                            ⚔️ Rejoindre la Partie
                        </Button>
                    </Link>
                </div>

                {/* RSVP Deadline reminder */}
                <p className="font-cinzel text-xs tracking-wider mb-24"
                    style={{ color: 'rgba(183, 137, 83, 0.7)' }}>
                    ⏳ Inscriptions ouvertes jusqu'au 31 Mai 2026
                </p>
            </div>

            {/* Scroll indicator - subtle and elegant */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <span className="text-3xl" style={{ color: 'rgba(183, 137, 83, 0.6)' }}>⌄</span>
            </div>


        </section>
    )
}

export default Hero
