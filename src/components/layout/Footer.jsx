function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative py-16"
            style={{
                background: 'linear-gradient(to bottom, rgba(31, 30, 27, 0.9), rgba(31, 30, 27, 1))',
                borderTop: '2px solid #3D3A32'
            }}>
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(183, 137, 83, 0.5), transparent)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-8">
                    {/* Decorative leaf */}
                    <div style={{ color: '#B78953' }} className="text-3xl">🍁</div>

                    {/* Logo - LOTR Style */}
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">💍</span>
                        <span className="font-lotr text-3xl glow-amber" style={{ color: '#C9A86C' }}>
                            Gianni & Anaëlle
                        </span>
                        <span className="text-3xl">🍂</span>
                    </div>

                    {/* Quote */}
                    <p className="font-crimsonText text-xl text-center max-w-md italic"
                        style={{ color: 'rgba(245, 237, 224, 0.8)' }}>
                        "Une quête légendaire commence ici"
                    </p>

                    {/* Date */}
                    <div className="flex items-center space-x-3" style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                        <span className="text-xl">📅</span>
                        <span className="font-cinzel text-lg tracking-wider">10 Octobre 2026</span>
                    </div>

                    {/* Decorative Divider */}
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(183, 137, 83, 0.4))' }} />
                        <span style={{ color: 'rgba(183, 137, 83, 0.5)' }}>❧</span>
                        <div className="w-20 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(183, 137, 83, 0.4))' }} />
                    </div>

                    {/* Credits */}
                    <div className="text-center space-y-2">
                        <p className="text-sm font-crimsonText" style={{ color: 'rgba(245, 237, 224, 0.4)' }}>
                            Créé avec ❤️ pour notre union
                        </p>
                        <p className="font-cinzel text-xs tracking-wider" style={{ color: 'rgba(245, 237, 224, 0.3)' }}>
                            © {currentYear} - Château de Mauriac
                        </p>
                    </div>

                    {/* Easter Egg Hint */}
                    <div className="group relative">
                        <p className="font-crimsonText text-xs italic animate-gentle-pulse group-hover:animate-none transition-opacity duration-300 group-hover:opacity-20"
                            style={{ color: 'rgba(245, 237, 224, 0.4)' }}>
                            ✨ Un secret se cache dans les touches de votre clavier...
                        </p>
                        <p className="absolute inset-0 font-crimsonText text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ color: '#C9A86C' }}>
                            🎮 Konami Code
                        </p>
                    </div>
                </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute bottom-4 left-4 text-2xl opacity-30 hidden md:block">🍂</div>
            <div className="absolute bottom-4 right-4 text-2xl opacity-30 hidden md:block">🍁</div>
        </footer>
    )
}

export default Footer
