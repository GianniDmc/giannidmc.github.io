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
                    <div className="inline-block px-8 py-5"
                        style={{
                            background: 'rgba(26, 20, 16, 0.6)',
                            border: '1px solid rgba(139, 69, 19, 0.3)'
                        }}>
                        <p className="font-cinzel text-sm text-gold/70 mb-3 tracking-wider uppercase">
                            💡 Besoin d'inspiration ?
                        </p>
                        <p className="font-crimson text-parchment/80 max-w-lg">
                            Nous mettrons à disposition un{' '}
                            <span className="text-gold">moodboard</span>{' '}
                            pour celles et ceux qui voudraient s'inspirer de l'ambiance de la journée.
                        </p>
                    </div>

                    {/* Suggestions */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5"
                            style={{
                                background: 'rgba(114, 47, 55, 0.15)',
                                border: '1px solid rgba(114, 47, 55, 0.3)'
                            }}>
                            <span className="text-3xl mb-3 block">🏰</span>
                            <p className="font-cinzel text-gold text-sm tracking-wide">Élégant</p>
                            <p className="font-crimson text-parchment/60 text-sm mt-2 italic">
                                Costume, robe de soirée...
                            </p>
                        </div>
                        <div className="p-5"
                            style={{
                                background: 'rgba(45, 90, 39, 0.15)',
                                border: '1px solid rgba(45, 90, 39, 0.3)'
                            }}>
                            <span className="text-3xl mb-3 block">🌿</span>
                            <p className="font-cinzel text-gold text-sm tracking-wide">Champêtre</p>
                            <p className="font-crimson text-parchment/60 text-sm mt-2 italic">
                                Tenue décontractée chic...
                            </p>
                        </div>
                        <div className="p-5"
                            style={{
                                background: 'rgba(139, 69, 19, 0.15)',
                                border: '1px solid rgba(139, 69, 19, 0.3)'
                            }}>
                            <span className="text-3xl mb-3 block">🎭</span>
                            <p className="font-cinzel text-gold text-sm tracking-wide">Fantaisie</p>
                            <p className="font-crimson text-parchment/60 text-sm mt-2 italic">
                                Touche médiévale bienvenue...
                            </p>
                        </div>
                    </div>

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
