import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { Link } from 'react-router-dom'

function Help() {
    const steps = [
        {
            number: 1,
            title: 'Découvrir l\'invitation',
            description: 'Lisez la page d\'accueil pour découvrir la date, le lieu et l\'ambiance de notre mariage.',
            link: '/#invitation',
            linkText: 'Voir l\'invitation',
            icon: '📜'
        },
        {
            number: 2,
            title: 'Consulter les détails',
            description: 'Visitez la page Quête pour connaître le programme de la journée et toutes les informations pratiques.',
            link: '/quest#programme',
            linkText: 'Voir le programme',
            icon: '🗺️'
        },
        {
            number: 3,
            title: 'Confirmer votre présence',
            description: 'Remplissez le formulaire RSVP pour nous indiquer si vous serez présent. Attention, la quête ferme ses inscriptions le 31 Mai 2026 !',
            link: '/rsvp',
            linkText: 'Répondre au RSVP',
            icon: '✉️',
            important: true
        },
        {
            number: 4,
            title: 'Réserver un hébergement (si besoin)',
            description: 'Si vous venez et avez besoin d\'un logement, consultez la liste des hébergements disponibles près du château.',
            link: '/quest#hebergements',
            linkText: 'Voir les hébergements',
            icon: '🏠'
        },
        {
            number: 5,
            title: 'Le jour J',
            description: 'Retrouvez-nous au Château de Mauriac le 10 Octobre 2026 pour vivre cette aventure ensemble !',
            link: '/quest#localisation',
            linkText: 'Voir la localisation',
            icon: '🏰'
        },
        {
            number: 6,
            title: 'Après l\'aventure',
            description: 'Après le mariage, retrouvez les photos de cette journée sur la Galerie. Vous pourrez aussi nous envoyer vos propres clichés pour enrichir nos souvenirs !',
            link: '/gallery',
            linkText: 'Accéder à la galerie',
            icon: '📸',
            future: true
        }
    ]

    return (
        <div className="min-h-screen pt-48 pb-16">
            {/* Header */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionTitle
                        icon="💡"
                        subtitle="Tout ce qu'il faut savoir pour bien utiliser ce site"
                    >
                        Guide des Aventuriers
                    </SectionTitle>
                </div>
            </section>

            {/* Steps */}
            <section className="py-8 px-4">
                <div className="max-w-3xl mx-auto space-y-6">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className={`medieval-card relative ${step.important ? 'ring-2 ring-amber-600/50' : ''}`}
                        >
                            {step.important && (
                                <div className="absolute -top-3 left-4">
                                    <span className="text-xs font-cinzel px-3 py-1 uppercase tracking-wider"
                                        style={{ background: '#964734', color: '#F5EDE0' }}>
                                        Important
                                    </span>
                                </div>
                            )}

                            <div className="flex items-start space-x-4">
                                {/* Number */}
                                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-lotr text-xl"
                                    style={{
                                        background: 'rgba(183, 137, 83, 0.2)',
                                        border: '2px solid rgba(183, 137, 83, 0.5)',
                                        color: '#C9A86C'
                                    }}>
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-2xl">{step.icon}</span>
                                        <h3 className="font-cinzel text-lg" style={{ color: '#C9A86C' }}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="font-crimson text-parchment/80 mb-4">
                                        {step.description}
                                    </p>
                                    {step.link && (
                                        <Link to={step.link}>
                                            <Button variant="ghost" size="sm">
                                                {step.linkText} →
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ rapide */}
            <section className="py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-lotr text-2xl text-center mb-8 glow-amber" style={{ color: '#C9A86C' }}>
                        Questions Fréquentes
                    </h2>

                    <div className="space-y-4">
                        <div className="medieval-card">
                            <h4 className="font-cinzel text-base mb-2" style={{ color: '#B78953' }}>
                                ❓ Puis-je venir accompagné(e) ?
                            </h4>
                            <p className="font-crimson text-parchment/80">
                                Seules les personnes nommées sur votre invitation sont attendues. Si vous souhaitez venir avec quelqu'un d'autre, merci de nous contacter au préalable.
                            </p>
                        </div>

                        <div className="medieval-card">
                            <h4 className="font-cinzel text-base mb-2" style={{ color: '#B78953' }}>
                                ❓ Comment trouver le château ?
                            </h4>
                            <p className="font-crimson text-parchment/80">
                                L'adresse et la carte sont disponibles sur la page Quête, section "Localisation".
                            </p>
                        </div>

                        <div className="medieval-card">
                            <h4 className="font-cinzel text-base mb-2" style={{ color: '#B78953' }}>
                                ❓ Des questions ?
                            </h4>
                            <p className="font-crimson text-parchment/80">
                                Contactez-nous à <span style={{ color: '#C9A86C' }}>damico.gianni@yahoo.fr</span>
                            </p>
                        </div>

                        <div className="medieval-card">
                            <h4 className="font-cinzel text-base mb-2" style={{ color: '#B78953' }}>
                                🤫 Une surprise à préparer ?
                            </h4>
                            <p className="font-crimson text-parchment/80">
                                Si vous comptez préparer un discours, une animation ou toute autre surprise pour le jour J et que vous ne voulez pas nous mettre dans la confidence, le plus simple est d'écrire à Julie, notre wedding planneuse, à <span style={{ color: '#C9A86C' }}>contact@agence24events.fr</span> en précisant qu'il s'agit du mariage d'Anaëlle et Gianni : c'est elle qui coordonne la journée, elle saura caler votre surprise au bon moment et vous rediriger si besoin. Vous pouvez aussi passer par l'un de nos témoins ou officiants si vous en connaissez un — ils feront le lien avec elle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Easter egg hint */}
            <section className="py-8 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="font-crimson text-sm italic" style={{ color: 'rgba(245, 237, 224, 0.4)' }}>
                        🎮 Psst... Les gamers trouveront peut-être un secret caché sur ce site...
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Help
