import RSVPForm from '../components/rsvp/RSVPForm'

function RSVP() {
    return (
        <div className="pt-16 min-h-screen">
            {/* Page Header */}
            <div className="py-16 text-center"
                style={{
                    background: 'linear-gradient(to bottom, rgba(31, 30, 27, 1), transparent)'
                }}>
                <div className="text-5xl mb-6 animate-float">⚔️</div>
                <h1 className="font-lotr text-4xl md:text-5xl mb-4 glow-amber"
                    style={{ color: '#C9A86C' }}>
                    Rejoindre la Partie
                </h1>
                <p className="font-crimsonText text-lg italic"
                    style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                    Inscrivez-vous pour cette aventure épique
                </p>
            </div>

            {/* RSVP Form */}
            <div className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="medieval-card">
                        <RSVPForm />
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="fixed bottom-6 left-6 text-3xl opacity-30 hidden md:block animate-candle">🕯️</div>
            <div className="fixed bottom-6 right-6 text-3xl opacity-30 hidden md:block animate-candle" style={{ animationDelay: '1s' }}>🕯️</div>
        </div>
    )
}

export default RSVP
