import { useLocation, useNavigate } from 'react-router-dom'

function HelpButton() {
    const location = useLocation()
    const navigate = useNavigate()
    const isOnHelpPage = location.pathname === '/aide'

    const handleClick = () => {
        if (isOnHelpPage) {
            navigate(-1) // Go back to previous page
        } else {
            navigate('/aide')
        }
    }

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-40 h-12 px-4 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-105"
            style={{
                background: 'linear-gradient(145deg, rgba(183, 137, 83, 0.9), rgba(150, 71, 52, 0.9))',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 20px rgba(183, 137, 83, 0.3)',
                border: '2px solid rgba(201, 168, 108, 0.5)'
            }}
            title={isOnHelpPage ? 'Retour' : 'Besoin d\'aide ?'}
        >
            <span className="text-xl group-hover:animate-pulse">
                {isOnHelpPage ? '←' : '💡'}
            </span>
            <span className="font-cinzel text-sm text-parchment">
                {isOnHelpPage ? 'Retour' : 'Aide'}
            </span>
        </button>
    )
}

export default HelpButton
