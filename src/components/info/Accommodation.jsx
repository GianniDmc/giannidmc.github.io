import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

function Accommodation() {
    const [showMore, setShowMore] = useState(false)

    // Tous les hébergements triés par distance
    const allAccommodations = [
        // 0-100m
        { name: 'Dias Adelio', distance: 0.05, distanceLabel: '50m', type: 'Chambre d\'hôtes', icon: '🏠', capacity: '4 pers.', phone: '06 81 03 19 23' },
        { name: 'Reimbold Max', distance: 0.08, distanceLabel: '80m', type: 'Chambre d\'hôtes', icon: '🏠', capacity: '2 pers.', phone: '05 63 41 73 32' },
        { name: 'Bugarel', distance: 0.1, distanceLabel: '100m', type: 'Chambre d\'hôtes', icon: '🏠', capacity: '15 pers.', phone: '06 89 41 59 99' },
        // 500m
        { name: 'Puech Dominique', distance: 0.5, distanceLabel: '500m', type: 'Chambre d\'hôtes', icon: '🏠', capacity: '8 pers.', phone: '05 63 41 77 65' },
        { name: 'Val de Garenne', distance: 0.5, distanceLabel: '500m', type: 'Chambre d\'hôtes', icon: '🏠', capacity: '8 pers.', phone: '06 31 96 33 18' },
        // 800m - 1km
        { name: 'Souquié Alain', distance: 0.8, distanceLabel: '800m', type: 'Chambre d\'hôtes', icon: '🏡', capacity: '4 pers.', phone: '05 63 41 71 27' },
        { name: 'Château de Salettes', distance: 0.8, distanceLabel: '800m', type: 'Hôtel ★★★★', icon: '🏰', capacity: '34 pers.', phone: '05 63 33 60 60', special: true },
        // 2km
        { name: 'Nicolas Rech', distance: 2, distanceLabel: '2 km', type: 'Gîte de Lagarrigue', icon: '🏡', capacity: '14 pers.', phone: '06 86 40 57 75' },
        { name: 'La Reverdie', distance: 2, distanceLabel: '2 km', type: 'Chambre d\'hôtes', icon: '🏡', capacity: '4 pers.', phone: '07 67 96 95 07' },
        // 3km
        { name: 'Denoyelle Patricia', distance: 3, distanceLabel: '3 km', type: 'Chambre d\'hôtes', icon: '🏡', capacity: '4 pers.', phone: '05 81 02 40 26' },
        { name: 'Saget Jennifer', distance: 3, distanceLabel: '3 km', type: 'Chambre d\'hôtes', icon: '🏡', capacity: '2 pers.', phone: '06 12 01 65 12' },
        { name: 'Véronique SIE', distance: 3, distanceLabel: '3 km', type: 'Les Hauts de Broze', icon: '🏡', capacity: '3 pers.', phone: '06 86 22 29 68' },
        { name: 'Derrieux Patricia', distance: 3, distanceLabel: '3 km', type: 'Mas de Causse', icon: '🏡', capacity: '3 pers.', phone: '05 63 56 86 92' },
        // 4km
        { name: 'Guyomarch', distance: 4, distanceLabel: '4 km', type: 'Domaine de Perches', icon: '🏡', capacity: '4 pers.', phone: '05 63 56 58 24' },
        { name: 'Annie Delpech', distance: 4, distanceLabel: '4 km', type: 'Place de l\'église Cahuzac', icon: '🏘️', capacity: '3 pers.', phone: '05 63 33 90 25' },
        { name: 'Mr Miraille', distance: 4, distanceLabel: '4 km', type: 'Place de l\'église Cahuzac', icon: '🏘️', capacity: '3 pers.', phone: '05 63 33 91 53' },
        { name: 'Mme Barrat', distance: 4, distanceLabel: '4 km', type: 'Rue de la Brèche Cahuzac', icon: '🏘️', capacity: '2 pers.', phone: '05 63 34 94 01' },
        { name: 'Aurel', distance: 4, distanceLabel: '4 km', type: 'Pech del Cel Cahuzac', icon: '🏘️', capacity: '1 pers.', phone: '05 63 56 08 06' },
        { name: 'Guimbal Aurore', distance: 4, distanceLabel: '4 km', type: 'La Ventresque Cahuzac', icon: '🏡', capacity: '4 pers.', phone: '05 63 33 29 94' },
        { name: 'Michel Chaumont', distance: 4, distanceLabel: '4 km', type: 'Arzac (PMR)', icon: '♿', capacity: '4 pers.', phone: '09 62 20 76 57' },
        { name: 'Le Soleil Desbastides', distance: 4, distanceLabel: '4 km', type: 'Camping', icon: '⛺', capacity: '50 empl.', phone: '05 63 33 91 94' },
        { name: 'Delpech Nicole', distance: 4, distanceLabel: '4 km', type: 'Cestayrols', icon: '🏡', capacity: '2 pers.', phone: '05 63 56 86 40' },
        { name: 'Andrea Sutherland', distance: 4, distanceLabel: '4 km', type: 'Terses Fayssac', icon: '🏡', capacity: '4 pers.', phone: '05 63 57 54 14' },
        { name: 'Au Clos Tersois', distance: 4, distanceLabel: '4 km', type: 'Fayssac', icon: '🏡', capacity: '12 pers.', phone: '06 71 26 89 86' },
        { name: 'Gîtes de Franck', distance: 4, distanceLabel: '4 km', type: 'Cestayrols', icon: '🏡', capacity: '12 pers.', phone: '05 63 81 50 38' },
        { name: 'Pascale et Lionel', distance: 4, distanceLabel: '4 km', type: 'Route d\'Alos Vieux', icon: '🏡', capacity: '3 pers.', phone: '05 63 81 75 64' },
        { name: 'Jacques Guilhen', distance: 4, distanceLabel: '4 km', type: 'Le Bourg', icon: '🏡', capacity: '5 pers.', phone: '05 63 56 81 52' },
        { name: 'La Couliche', distance: 4, distanceLabel: '4 km', type: 'Mas de la Muse', icon: '🏡', capacity: '2 pers.', phone: '05 63 53 83 50' },
        { name: 'Lorraine Pinkerton', distance: 4, distanceLabel: '4 km', type: 'Bicary Broze', icon: '🏡', capacity: '2 pers.', phone: '05 63 40 88 97' },
        // 5km
        { name: 'Virginie', distance: 5, distanceLabel: '5 km', type: 'Le Pigeonnier Verdier', icon: '🏡', capacity: '2 pers.', phone: '06 62 12 11 38' },
        // 6km
        { name: 'Bénard Sylvie', distance: 6, distanceLabel: '6 km', type: 'Domaine 3 Soleils', icon: '🏡', capacity: '6 pers.', phone: '05 63 55 13 39' },
        { name: 'Aliaga Rémy', distance: 6, distanceLabel: '6 km', type: 'La Soucarié', icon: '🏡', capacity: '11 pers.', phone: '06 87 56 63 86' },
    ]

    // Séparer proches (< 1km) et autres
    const accommodationsClose = allAccommodations.filter(a => a.distance < 1)
    const accommodationsMore = allAccommodations.filter(a => a.distance >= 1)

    const hotelsNearby = [
        { name: 'Hôtel Occitan', distance: 8, distanceLabel: '8 km', location: 'Gaillac', type: 'Hôtel ★★', capacity: '12 ch.', phone: '05 63 57 11 52' },
        { name: 'La Verrerie', distance: 8, distanceLabel: '8 km', location: 'Gaillac', type: 'Hôtel ★★★', capacity: '14 ch.', phone: '05 63 57 32 77' },
        { name: 'Domaine de Green', distance: 8, distanceLabel: '8 km', location: 'Rivières', type: 'Domaine', capacity: '10 ch.', phone: '05 63 33 03 73' },
        { name: 'AKENA', distance: 10, distanceLabel: '10 km', location: 'Brens', type: 'Hôtel ★★', capacity: '49 ch.', phone: '05 63 34 14 64' },
        { name: 'Mme Pinon', distance: 11, distanceLabel: '11 km', location: 'Gaillac', type: 'Place St Michel', capacity: '6 pers.', phone: '05 63 57 61 48' },
        { name: 'Hôtel des Consuls', distance: 14, distanceLabel: '14 km', location: 'Castelnau', type: 'Hôtel ★★★', capacity: '14 ch.', phone: '05 63 33 17 44' },
        { name: 'Robert Charles', distance: 15, distanceLabel: '15 km', location: 'Luman', type: 'Chambre', capacity: '4 pers.', phone: '05 63 33 10 20' },
        { name: 'Cordes sur Ciel', distance: 20, distanceLabel: '20 km', location: 'Cordes', type: 'Le Chevalier Noir', capacity: '4 pers.', phone: '05 63 53 34 68' },
        { name: 'L\'Ancienne Auberge', distance: 20, distanceLabel: '20 km', location: 'Puycelsi', type: 'Hôtel de charme', capacity: 'Charme', phone: '05 63 33 65 90' },
    ].sort((a, b) => a.distance - b.distance)

    const AccommodationCard = ({ acc, compact = false }) => (
        <div
            className={`medieval-card group hover:scale-[1.02] transition-all duration-300 relative ${acc.distance < 0.2 ? 'ring-2 ring-moss/50' : ''}`}
            style={acc.special ? {
                background: 'linear-gradient(145deg, rgba(150, 71, 52, 0.2), rgba(42, 40, 35, 0.95))',
                borderColor: '#964734'
            } : {}}
        >
            {acc.distance < 0.2 && (
                <div className="absolute -top-2 -right-2 z-10">
                    <span className="text-xs font-cinzel px-2 py-1"
                        style={{ background: '#4C563F', color: '#F5EDE0' }}>
                        À PIED
                    </span>
                </div>
            )}
            {acc.special && (
                <div className="absolute -top-2 -right-2 z-10">
                    <span className="text-xs font-cinzel px-2 py-1"
                        style={{ background: '#964734', color: '#F5EDE0' }}>
                        ★ PREMIUM
                    </span>
                </div>
            )}

            <div className="flex items-start space-x-3">
                <span className={`${compact ? 'text-2xl' : 'text-3xl'} shrink-0`}>{acc.icon}</span>
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                        <h4 className={`font-cinzel ${compact ? 'text-sm' : 'text-base'} truncate`}
                            style={{ color: '#C9A86C' }}>
                            {acc.name}
                        </h4>
                        <span className="text-xs font-cinzel ml-2 shrink-0 px-2 py-0.5 rounded"
                            style={{ background: 'rgba(76, 86, 63, 0.4)', color: '#B78953' }}>
                            {acc.distanceLabel}
                        </span>
                    </div>
                    <p className="font-crimsonText text-xs italic"
                        style={{ color: 'rgba(245, 237, 224, 0.6)' }}>
                        {acc.type}
                    </p>
                    <div className={`mt-2 space-y-1 ${compact ? 'text-xs' : 'text-sm'}`}>
                        <p style={{ color: 'rgba(245, 237, 224, 0.8)' }}>
                            👥 {acc.capacity}
                        </p>
                        <p style={{ color: '#B78953' }}>
                            📞 {acc.phone}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    icon="🛏️"
                    subtitle="Où poser vos sacs de voyage"
                >
                    Campements Alliés
                </SectionTitle>

                {/* Info banner */}
                <div className="mb-8 text-center">
                    <div className="inline-block px-6 py-3"
                        style={{
                            background: 'rgba(76, 86, 63, 0.2)',
                            border: '1px solid rgba(76, 86, 63, 0.4)'
                        }}>
                        <p className="font-crimsonText italic"
                            style={{ color: 'rgba(245, 237, 224, 0.8)' }}>
                            💡 Les hébergements sont triés par distance du château. Réservez tôt !
                        </p>
                    </div>
                </div>

                {/* Section: Très proches (< 1km) */}
                <div className="mb-12">
                    <h3 className="font-cinzel text-xl text-center mb-6 tracking-wider"
                        style={{ color: '#B78953' }}>
                        🏠 À Proximité Immédiate (moins de 1 km)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {accommodationsClose.map((acc, index) => (
                            <AccommodationCard key={index} acc={acc} />
                        ))}
                    </div>
                </div>

                {/* Toggle button */}
                <div className="text-center mb-8">
                    <Button
                        variant="ghost"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? '🔼 Masquer' : `🔽 Voir ${accommodationsMore.length} hébergements de 2 à 6 km`}
                    </Button>
                </div>

                {/* Section: More accommodations (collapsible) */}
                {showMore && (
                    <div className="mb-12">
                        <h3 className="font-cinzel text-xl text-center mb-6 tracking-wider"
                            style={{ color: '#B78953' }}>
                            🏡 Hébergements de 2 à 6 km
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {accommodationsMore.map((acc, index) => (
                                <AccommodationCard key={index} acc={acc} compact />
                            ))}
                        </div>
                    </div>
                )}

                {/* Section: Hôtels */}
                <div>
                    <h3 className="font-cinzel text-xl text-center mb-6 tracking-wider"
                        style={{ color: '#B78953' }}>
                        🏨 Hôtels (8 à 20 km)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {hotelsNearby.map((hotel, index) => (
                            <div
                                key={index}
                                className="medieval-card group hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl">🏨</span>
                                        <h4 className="font-cinzel text-base"
                                            style={{ color: '#C9A86C' }}>
                                            {hotel.name}
                                        </h4>
                                    </div>
                                    <span className="text-xs font-cinzel px-2 py-0.5 rounded"
                                        style={{ background: 'rgba(76, 86, 63, 0.4)', color: '#B78953' }}>
                                        {hotel.distanceLabel}
                                    </span>
                                </div>
                                <p className="font-crimsonText text-sm italic"
                                    style={{ color: 'rgba(245, 237, 224, 0.6)' }}>
                                    {hotel.type} • {hotel.location}
                                </p>
                                <div className="mt-2 text-sm space-y-1">
                                    <p style={{ color: 'rgba(245, 237, 224, 0.8)' }}>
                                        🛏️ {hotel.capacity}
                                    </p>
                                    <p style={{ color: '#B78953' }}>
                                        📞 {hotel.phone}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <div className="mt-12 text-center">
                    <p className="font-crimsonText text-sm max-w-2xl mx-auto italic"
                        style={{ color: 'rgba(245, 237, 224, 0.5)' }}>
                        📜 Contactez-nous si vous avez besoin d'aide pour trouver un point de sauvegarde !
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Accommodation
