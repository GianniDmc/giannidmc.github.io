import SectionTitle from '../common/SectionTitle'

function SaveTheDate() {
    return (
        <section className="py-24 px-4"
            style={{
                background: 'linear-gradient(to bottom, rgba(26, 20, 16, 0.95), rgba(42, 31, 24, 0.9), rgba(26, 20, 16, 0.95))'
            }}>
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    icon="📜"
                    subtitle="Une invitation à célébrer notre amour"
                >
                    L'Invitation
                </SectionTitle>

                {/* Invitation Card */}
                <div className="relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(145deg, rgba(42, 31, 24, 0.95), rgba(26, 20, 16, 0.98))',
                        border: '3px solid #3d2914',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(0,0,0,0.3)'
                    }}>

                    {/* Decorative corners */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40" />

                    <div className="relative z-10 text-center py-12 px-8">
                        {/* Opening */}
                        <p className="font-medieval text-2xl mb-8 glow-gold"
                            style={{ color: '#E6B84D' }}>
                            Chers Proches & Amis
                        </p>

                        {/* Main Text */}
                        <div className="space-y-6 font-crimson text-parchment/90 text-lg leading-relaxed max-w-2xl mx-auto">
                            <p>
                                Nous avons l'immense joie de vous convier à célébrer notre union.
                            </p>

                            <p>
                                Après des années d'aventures partagées, de rires et de complicité,
                                nous avons décidé de nous dire <span className="italic" style={{ color: '#E6B84D' }}>"oui"</span> pour la vie.
                            </p>

                            <p>
                                Votre présence rendrait ce jour encore plus précieux à nos yeux.
                            </p>
                        </div>

                        {/* Decorative divider */}
                        <div className="flex items-center justify-center space-x-4 my-10">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
                            <span className="text-gold text-xl">💍</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
                        </div>

                        {/* Date & Location */}
                        <div className="inline-block p-8"
                            style={{
                                background: 'rgba(26, 20, 16, 0.6)',
                                border: '1px solid rgba(139, 69, 19, 0.3)'
                            }}>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                                <div className="text-center">
                                    <p className="font-cinzel text-xs mb-2 tracking-[0.2em] uppercase" style={{ color: 'rgba(230, 184, 77, 0.6)' }}>Date</p>
                                    <p className="font-medieval text-2xl" style={{ color: '#E6B84D' }}>10 Octobre 2026</p>
                                </div>
                                <div className="hidden md:block w-px h-16 bg-gold/20" />
                                <div className="text-center">
                                    <p className="font-cinzel text-xs mb-2 tracking-[0.2em] uppercase" style={{ color: 'rgba(230, 184, 77, 0.6)' }}>Lieu</p>
                                    <p className="font-medieval text-2xl" style={{ color: '#E6B84D' }}>Château de Mauriac</p>
                                </div>
                                <div className="hidden md:block w-px h-16 bg-gold/20" />
                                <div className="text-center">
                                    <p className="font-cinzel text-xs mb-2 tracking-[0.2em] uppercase" style={{ color: 'rgba(230, 184, 77, 0.6)' }}>Heure</p>
                                    <p className="font-medieval text-2xl" style={{ color: '#E6B84D' }}>15h30</p>
                                </div>
                            </div>
                        </div>

                        {/* Closing */}
                        <p className="mt-10 font-crimson text-parchment/60 italic">
                            Dans l'attente de partager ce moment avec vous...
                        </p>

                        {/* Signature */}
                        <p className="mt-6 font-medieval text-xl" style={{ color: '#E6B84D' }}>
                            Anaëlle & Gianni
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaveTheDate
