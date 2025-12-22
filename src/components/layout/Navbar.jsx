import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSound } from '../../hooks/useSound'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const { playClick, soundEnabled, toggleSound } = useSound()

    const navLinks = [
        { path: '/', label: 'Taverne', icon: '🏰' },
        { path: '/quest', label: 'Quête', icon: '📜' },
        { path: '/rsvp', label: 'Rejoindre', icon: '⚔️' },
    ]

    const handleClick = () => {
        playClick()
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
            style={{
                background: 'linear-gradient(to bottom, rgba(31, 30, 27, 0.98), rgba(31, 30, 27, 0.95))',
                borderBottom: '2px solid #3D3A32',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={handleClick}
                        className="flex items-center space-x-3 group"
                    >
                        <span className="text-2xl">🍁</span>
                        <span className="font-lotr text-xl group-hover:opacity-80 transition-opacity"
                            style={{ color: '#C9A86C' }}>
                            G & A
                        </span>
                        <span className="text-2xl">💍</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={handleClick}
                                className="font-cinzel text-sm tracking-wider transition-all duration-300 hover:-translate-y-0.5"
                                style={{
                                    color: location.pathname === link.path ? '#C9A86C' : 'rgba(245, 237, 224, 0.8)',
                                    textShadow: location.pathname === link.path ? '0 0 10px rgba(183, 137, 83, 0.5)' : 'none'
                                }}
                            >
                                <span className="mr-2">{link.icon}</span>
                                {link.label}
                            </Link>
                        ))}

                        {/* Sound Toggle */}
                        <button
                            onClick={() => { playClick(); toggleSound(); }}
                            className="p-2 text-xl hover:scale-110 transition-transform"
                            style={{ color: 'rgba(245, 237, 224, 0.7)' }}
                            title={soundEnabled ? 'Désactiver les sons' : 'Activer les sons'}
                        >
                            {soundEnabled ? '🔔' : '🔕'}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => { playClick(); setIsMenuOpen(!isMenuOpen); }}
                        className="md:hidden p-2 text-2xl transition-colors"
                        style={{ color: '#C9A86C' }}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={handleClick}
                                    className="font-cinzel text-sm py-3 px-4 transition-all"
                                    style={{
                                        color: location.pathname === link.path ? '#C9A86C' : 'rgba(245, 237, 224, 0.8)',
                                        background: location.pathname === link.path ? 'rgba(183, 137, 83, 0.1)' : 'transparent',
                                        borderLeft: location.pathname === link.path ? '2px solid #B78953' : '2px solid transparent'
                                    }}
                                >
                                    <span className="mr-3">{link.icon}</span>
                                    {link.label}
                                </Link>
                            ))}

                            <button
                                onClick={() => { playClick(); toggleSound(); }}
                                className="flex items-center space-x-3 py-3 px-4 transition-all"
                                style={{ color: 'rgba(245, 237, 224, 0.8)' }}
                            >
                                <span className="text-xl">{soundEnabled ? '🔔' : '🔕'}</span>
                                <span className="font-cinzel text-sm">
                                    {soundEnabled ? 'Sons activés' : 'Sons désactivés'}
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
