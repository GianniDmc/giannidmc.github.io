import Timeline from '../components/info/Timeline'
import Location from '../components/info/Location'
import Accommodation from '../components/info/Accommodation'
import DressCode from '../components/info/DressCode'

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

            {/* Timeline - Masqué pour l'instant, à décommenter quand les horaires seront confirmés */}
            {/* <Timeline /> */}

            {/* Placeholder pour le déroulé */}
            <section id="programme" className="py-20 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="medieval-card">
                        <div className="text-5xl mb-6">⏳</div>
                        <h3 className="font-lotr text-2xl mb-4 glow-amber"
                            style={{ color: '#C9A86C' }}>
                            Déroulé de la Journée
                        </h3>
                        <p className="font-crimsonText text-lg italic"
                            style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                            Le programme détaillé sera dévoilé prochainement...
                        </p>
                        <p className="font-cinzel text-sm mt-4"
                            style={{ color: 'rgba(183, 137, 83, 0.6)' }}>
                            🔮 Patience, aventurier !
                        </p>
                    </div>
                </div>
            </section>

            <div id="localisation"><Location /></div>
            <div id="hebergements"><Accommodation /></div>
            <DressCode />
        </div>
    )
}

export default Quest
