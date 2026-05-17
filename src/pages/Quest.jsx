import Timeline from '../components/info/Timeline'
import Location from '../components/info/Location'
import Accommodation from '../components/info/Accommodation'
import DressCode from '../components/info/DressCode'
import SectionTitle from '../components/common/SectionTitle'

function Quest() {
    return (
        <div className="pt-48">
            {/* Page Header */}
            <div className="py-16 text-center">
                <div className="text-5xl mb-6 animate-float">📜</div>
                <h1 className="font-lotr text-4xl md:text-5xl mb-4 glow-amber"
                    style={{ color: '#C9A86C' }}>
                    Guide de Quête
                </h1>
                <p className="font-crimsonText text-lg italic"
                    style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                    Toutes les informations pour accomplir cette mission
                </p>

                {/* Quest difficulty badge */}
                <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2"
                    style={{
                        background: 'rgba(76, 86, 63, 0.3)',
                        border: '1px solid rgba(76, 86, 63, 0.5)'
                    }}>
                    <span className="font-cinzel text-sm" style={{ color: '#B78953' }}>
                        Niveau de difficulté :
                    </span>
                    <span className="text-lg">⭐⭐⭐⭐⭐</span>
                    <span className="font-cinzel text-sm" style={{ color: '#4C563F' }}>
                        LÉGENDAIRE
                    </span>
                </div>
            </div>

            {/* Sections */}

            <Timeline />

            <div id="localisation"><Location /></div>
            <div id="hebergements"><Accommodation /></div>
            <DressCode />

            <section className="py-20 px-4"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(42, 31, 24, 0.3), transparent)' }}>
                <div className="max-w-4xl mx-auto">
                    <SectionTitle icon="🤫" subtitle="Coordonnez vos surprises avec nous">
                        Préparer une surprise ?
                    </SectionTitle>
                    <div className="medieval-card text-center max-w-2xl mx-auto">
                        <p className="font-crimson text-parchment/80 text-lg leading-relaxed mb-4">
                            Si vous comptez préparer un discours, une animation ou toute autre surprise
                            pour le jour J et que vous ne voulez pas nous mettre dans la confidence,
                            le plus simple est d'écrire à <strong>Julie</strong>, notre wedding planneuse :
                            c'est elle qui coordonne la journée, elle saura caler votre surprise au bon moment.
                        </p>
                        <p className="font-cinzel text-base" style={{ color: '#C9A86C' }}>
                            contact@agence24events.fr
                        </p>
                        <p className="font-crimson text-parchment/60 text-sm mt-3">
                            Précisez qu'il s'agit du mariage d'Anaëlle et Gianni.
                            Vous pouvez aussi passer par l'un de nos témoins ou officiants — ils feront le lien.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Quest
