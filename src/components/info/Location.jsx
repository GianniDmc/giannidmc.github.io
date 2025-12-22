import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

function Location() {
    const address = "Château de Mauriac, 81600 Senouillac"
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=43.9572669,1.93347399"
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d1.93347399!3d43.9572669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae7b0e9a3c1d7f%3A0x1234567890abcdef!2sCh%C3%A2teau%20de%20Mauriac!5e0!3m2!1sfr!2sfr!4v1703192400000"

    return (
        <section className="py-20 px-4"
            style={{
                background: 'linear-gradient(to bottom, rgba(42, 31, 24, 0.3), transparent, rgba(42, 31, 24, 0.3))'
            }}>
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    icon="🏰"
                    subtitle="Le lieu de notre union"
                >
                    Le Château
                </SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Info Card */}
                    <div className="medieval-card">
                        <div className="space-y-6">
                            {/* Castle name */}
                            <div>
                                <h3 className="font-medieval text-2xl text-gold mb-3 glow-gold">
                                    Château de Mauriac
                                </h3>
                                <p className="font-crimson text-parchment/80 leading-relaxed">
                                    Monument historique du XIIIe siècle niché au cœur du Tarn,
                                    ce château offre un cadre enchanteur pour célébrer notre amour.
                                </p>
                            </div>

                            {/* Address */}
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl mt-1">📍</span>
                                <div>
                                    <p className="font-cinzel text-xs text-gold/60 mb-1 tracking-[0.15em] uppercase">Adresse</p>
                                    <p className="font-crimson text-parchment">
                                        Château de Mauriac
                                        <br />
                                        81600 Senouillac
                                        <br />
                                        France
                                    </p>
                                </div>
                            </div>

                            {/* Travel tips */}
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl mt-1">🚗</span>
                                <div>
                                    <p className="font-cinzel text-xs text-gold/60 mb-1 tracking-[0.15em] uppercase">Accès</p>
                                    <div className="font-crimson text-parchment/80 text-sm space-y-1">
                                        <p>• À 45 minutes de Toulouse</p>
                                        <p>• À 30 minutes d'Albi</p>
                                        <p>• Parking disponible sur place</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Button */}
                            <div className="pt-4">
                                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="royal" size="md" className="w-full">
                                        Ouvrir dans Google Maps
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="relative">
                        {/* Map frame with medieval border */}
                        <div className="relative overflow-hidden"
                            style={{
                                border: '4px solid #3d2914',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}>

                            {/* Decorative corners */}
                            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-gold/60 z-10" />
                            <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-gold/60 z-10" />
                            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-gold/60 z-10" />
                            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-gold/60 z-10" />

                            {/* Google Maps Embed */}
                            <iframe
                                src={embedUrl}
                                width="100%"
                                height="400"
                                style={{ border: 0, filter: 'sepia(20%) contrast(1.05) brightness(0.95)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Château de Mauriac - Location"
                                className="w-full"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(26, 20, 16, 0.1) 0%, transparent 20%, transparent 80%, rgba(26, 20, 16, 0.2) 100%)'
                                }} />
                        </div>

                        {/* Location marker */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <div className="px-4 py-2"
                                style={{
                                    background: 'linear-gradient(to bottom, #2a1f18, #1a1410)',
                                    border: '2px solid #8B4513',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                                }}>
                                <span className="font-cinzel text-gold text-xs tracking-wider">
                                    📍 DESTINATION
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
