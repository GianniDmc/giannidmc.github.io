import SectionTitle from '../common/SectionTitle'

function DressCode() {
    return (
        <section className="py-20 px-4"
            style={{
                background: 'linear-gradient(to bottom, transparent, rgba(42, 31, 24, 0.3), transparent)'
            }}>
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    icon="👔"
                    subtitle="Comment vous habiller pour cette journée"
                >
                    Tenue
                </SectionTitle>

                {/* Main Card */}
                <div className="medieval-card text-center">
                    {/* No strict code message */}
                    <div className="mb-8">
                        <div className="inline-block mb-6">
                            <span className="text-6xl">✨</span>
                        </div>
                        <h3 className="font-medieval text-2xl text-gold mb-4 glow-gold">
                            Pas de Dress Code Imposé
                        </h3>
                        <p className="font-crimson text-parchment/85 text-lg max-w-2xl mx-auto leading-relaxed">
                            Venez comme vous êtes, l'essentiel est que vous soyez présents !
                            Nous souhaitons simplement que vous vous sentiez à l'aise
                            pour profiter pleinement de cette journée à nos côtés.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center space-x-4 my-10">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/30" />
                        <span className="text-gold/50">⚜</span>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/30" />
                    </div>

                    {/* Moodboard mention */}
                    <button
                        type="button"
                        onClick={() => {
                            const el = document.getElementById('moodboard')
                            if (el) {
                                const offset = 80
                                const top = el.getBoundingClientRect().top + window.scrollY - offset
                                window.scrollTo({ top, behavior: 'smooth' })
                            }
                        }}
                        className="inline-block px-8 py-5 transition-all hover:scale-[1.02] group cursor-pointer text-left"
                        style={{
                            background: 'rgba(26, 20, 16, 0.6)',
                            border: '1px solid rgba(139, 69, 19, 0.3)'
                        }}>
                        <p className="font-cinzel text-sm text-gold/70 mb-3 tracking-wider uppercase">
                            💡 Besoin d'inspiration ?
                        </p>
                        <p className="font-crimson text-parchment/80 max-w-lg">
                            Découvrez le{' '}
                            <span className="text-gold underline decoration-gold/40 underline-offset-4">moodboard</span>{' '}
                            pour vous inspirer de l'ambiance de la journée.
                        </p>
                        <p className="font-cinzel text-xs text-gold/60 mt-3 tracking-widest uppercase group-hover:text-gold transition-colors">
                            Voir le moodboard ↓
                        </p>
                    </button>



                    {/* Comfort note */}
                    <div className="mt-10">
                        <p className="font-crimson text-parchment/50 text-sm italic">
                            💃 Conseil : prévoyez des chaussures confortables pour danser !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DressCode
