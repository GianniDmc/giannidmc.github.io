import RSVPForm from '../components/rsvp/RSVPForm'

function RSVP() {
    return (
        <div className="pt-48 min-h-screen">
            {/* Page Header */}
            <div className="py-16 text-center">
                <div className="text-5xl mb-6 animate-float">⚔️</div>
                <h1 className="font-lotr text-4xl md:text-5xl mb-4 glow-amber"
                    style={{ color: '#C9A86C' }}>
                    Rejoindre la Partie
                </h1>
                <p className="font-crimsonText text-lg italic"
                    style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                    Inscrivez-vous pour cette aventure épique
                </p>

                {/* Deadline notice */}
                <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2"
                    style={{
                        background: 'rgba(150, 71, 52, 0.3)',
                        border: '1px solid rgba(150, 71, 52, 0.5)',
                    }}>
                    <span className="text-xl">⏳</span>
                    <span className="font-cinzel text-sm" style={{ color: '#F5EDE0' }}>
                        Date limite d'inscription : <span style={{ color: '#C9A86C' }}>31 Mai 2026</span>
                    </span>
                </div>
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
