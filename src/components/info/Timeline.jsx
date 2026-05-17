import SectionTitle from '../common/SectionTitle'

function Timeline() {
    const events = [
        {
            time: '15h30',
            title: 'Arrivée au Château',
            description: '📍 Point de spawn - Tous les joueurs se rassemblent',
            icon: '🏰',
            xp: '+100 XP',
        },
        {
            time: '16h00',
            title: 'La Cérémonie',
            description: '💫 Cutscene principale - Union des deux héros',
            icon: '💒',
            xp: '+500 XP',
        },
        {
            time: '16h45',
            title: 'La Séance Photos',
            description: '📸 Capture d\'épopée - Les archives du royaume s\'enrichissent',
            icon: '📸',
            xp: '+150 XP',
        },
        {
            time: '17h30',
            title: 'Le Vin d\'Honneur',
            description: '🍷 Zone de repos - Buff social activé',
            icon: '🥂',
            xp: '+200 XP',
        },
        {
            time: '19h00',
            title: 'Photos de Couple',
            description: '🎞️ Mode cinématique - La légende immortalisée pour les âges',
            icon: '💑',
            xp: '+200 XP',
        },
        {
            time: '20h00',
            title: 'Le Grand Banquet',
            description: '🍖 Festin épique - Régénération complète',
            icon: '🍽️',
            xp: '+300 XP',
        },
        {
            time: '23h00',
            title: 'Le Bal',
            description: '🕹️ Phase endgame - DJ live et bornes d\'arcade déverrouillés',
            icon: '🎶',
            xp: '+400 XP',
        },
        {
            time: '10h00',
            title: 'Le Brunch',
            description: '☀️ Quête bonus du lendemain',
            icon: '🌅',
            xp: '+150 XP',
            isNextDay: true,
        },
    ]

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    icon="📜"
                    subtitle="Le déroulement de votre aventure"
                >
                    Journal de Quête
                </SectionTitle>

                {/* Timeline */}
                <div className="relative mt-12">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
                        style={{
                            background: 'linear-gradient(to bottom, transparent, #4C563F 10%, #4C563F 90%, transparent)'
                        }} />

                    {/* Events */}
                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Time badge (mobile) */}
                                <div className="md:hidden absolute left-0 top-0">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(145deg, #2a2823, #1F1E1B)',
                                            border: '2px solid #4C563F',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.5), 0 0 15px rgba(76, 86, 63, 0.2)'
                                        }}>
                                        <span className="text-2xl">{event.icon}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`ml-24 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="medieval-card group hover:scale-[1.02] transition-transform duration-300"
                                        style={{ position: 'relative' }}>
                                        {/* Next day badge */}
                                        {event.isNextDay && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                                <span className="text-parchment font-cinzel text-xs px-4 py-1 border"
                                                    style={{
                                                        background: 'linear-gradient(to bottom, #964734, #692721)',
                                                        borderColor: '#B78953',
                                                        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                                    }}>
                                                    JOUR 2
                                                </span>
                                            </div>
                                        )}

                                        {/* XP Badge */}
                                        <div className={`absolute top-2 ${index % 2 === 0 ? 'md:left-2' : 'md:right-2'} right-2`}>
                                            <span className="text-xs font-cinzel px-2 py-1 rounded"
                                                style={{
                                                    background: 'rgba(76, 86, 63, 0.5)',
                                                    color: '#B78953'
                                                }}>
                                                {event.xp}
                                            </span>
                                        </div>

                                        {/* Time */}
                                        <p className="font-lotr text-2xl mb-2 glow-amber"
                                            style={{ color: '#C9A86C' }}>
                                            {event.time}
                                        </p>

                                        {/* Title */}
                                        <h3 className="font-cinzel text-lg text-parchment mb-1 tracking-wide">
                                            {event.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-crimson text-parchment/70 italic text-sm">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center icon (desktop) */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full items-center justify-center transition-transform duration-300 hover:scale-110"
                                    style={{
                                        background: 'linear-gradient(145deg, #2a2823, #1F1E1B)',
                                        border: '3px solid #4C563F',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.5), 0 0 20px rgba(76, 86, 63, 0.3)'
                                    }}>
                                    <span className="text-2xl">{event.icon}</span>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* End decoration */}
                <div className="flex justify-center mt-16">
                    <div className="text-center">
                        <span className="text-4xl">🏆</span>
                        <p className="font-cinzel mt-3 tracking-widest text-sm uppercase"
                            style={{ color: 'rgba(183, 137, 83, 0.7)' }}>
                            Quête Accomplie !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
