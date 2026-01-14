import { useState } from 'react'

function Gallery() {
    // État pour savoir si le mariage a eu lieu et si les photos sont disponibles
    const [photosAvailable] = useState(false)

    // Placeholder pour les futures photos
    // const [photos, setPhotos] = useState([])
    // const [selectedPhoto, setSelectedPhoto] = useState(null)

    return (
        <div className="min-h-screen pt-48 pb-16">
            {/* Header */}
            <div className="py-16 text-center">
                <div className="text-5xl mb-6 animate-float">📸</div>
                <h1 className="font-lotr text-4xl md:text-5xl mb-4 glow-amber"
                    style={{ color: '#C9A86C' }}>
                    Chroniques Visuelles
                </h1>
                <p className="font-crimsonText text-lg italic"
                    style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                    Les souvenirs de notre quête légendaire
                </p>
            </div>

            {/* Contenu principal */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {photosAvailable ? (
                        /* Galerie de photos - À activer après le mariage */
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {/* Les photos seront ajoutées ici */}
                            <p className="col-span-full text-center text-parchment/60">
                                Les photos arrivent bientôt...
                            </p>
                        </div>
                    ) : (
                        /* Message d'attente - Avant le mariage */
                        <div className="medieval-card max-w-2xl mx-auto text-center py-16 px-8">
                            <div className="mb-8">
                                <span className="text-6xl">🔮</span>
                            </div>

                            <h2 className="font-lotr text-2xl mb-6 glow-amber" style={{ color: '#C9A86C' }}>
                                La quête n'a pas encore eu lieu...
                            </h2>

                            <p className="font-crimson text-lg text-parchment/80 mb-8 leading-relaxed">
                                Les chroniques visuelles de notre aventure seront dévoilées
                                après le <span style={{ color: '#B78953' }}>10 Octobre 2026</span>.
                                <br /><br />
                                Revenez explorer cette page après notre grande célébration
                                pour revivre les moments magiques de cette journée légendaire !
                            </p>

                            <div className="flex justify-center items-center space-x-4 text-3xl opacity-60">
                                <span>🍂</span>
                                <span>🏰</span>
                                <span>💍</span>
                                <span>🏰</span>
                                <span>🍂</span>
                            </div>

                            {/* Ornement décoratif */}
                            <div className="mt-12 pt-8 border-t border-parchment/10">
                                <p className="font-cinzel text-sm text-parchment/50 uppercase tracking-widest">
                                    ⚔️ En attente de l'aventure ⚔️
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Section instruction pour les invités (visible même avant le mariage) */}
            <section className="py-12 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="medieval-card py-8 px-6">
                        <h3 className="font-lotr text-xl mb-4 glow-amber" style={{ color: '#C9A86C' }}>
                            📷 Appel aux Aventuriers
                        </h3>
                        <p className="font-crimson text-parchment/80 leading-relaxed">
                            Vous avez capturé des moments de notre quête ?
                            <br />
                            Partagez vos trésors visuels avec nous !
                        </p>
                        <p className="font-cinzel text-sm mt-4" style={{ color: '#B78953' }}>
                            Contact : damico.gianni@yahoo.fr
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery

