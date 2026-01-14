import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSound } from '../../hooks/useSound'
import oneRingImage from '/images/one_ring.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const { playClick, soundEnabled, toggleSound } = useSound()

    const navLinks = [
        { path: '/', label: 'Prologue', icon: '📖' },
        { path: '/quest', label: 'Quête', icon: '📜' },
        { path: '/rsvp', label: 'Rejoindre', icon: '⚔️' },
        { path: '/gallery', label: 'Galerie', icon: '📸' },
    ]

    const handleClick = () => {
        playClick()
        setIsMenuOpen(false)
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md overflow-visible"
                style={{
                    background: 'linear-gradient(to bottom, rgba(31, 30, 27, 0.98), rgba(31, 30, 27, 0.95))',
                    borderBottom: '2px solid #3D3A32',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}>

                {/* Fade gradient extending below navbar for emblem */}
                <div
                    className="absolute left-0 right-0 top-full pointer-events-none"
                    style={{
                        height: '120px',
                        background: 'linear-gradient(to bottom, rgba(21, 20, 19, 0.9) 0%, rgba(21, 20, 19, 0.5) 40%, transparent 100%)',
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
                    <div className="flex items-center justify-center h-16 overflow-visible relative">
                        {/* Left Navigation */}
                        <div className="hidden md:flex items-center space-x-6 absolute left-0">
                            {navLinks.slice(0, 2).map((link) => (
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
                        </div>

                        {/* Centered Logo - Oversized emblem */}
                        <Link
                            to="/"
                            onClick={handleClick}
                            className="absolute left-1/2 -translate-x-1/2 top-2 group"
                            style={{ zIndex: 60 }}
                        >
                            <img
                                src="/images/embleme_ag_rouge.png"
                                alt="A&G"
                                className="w-40 h-40 md:w-48 md:h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        {/* Right Navigation */}
                        <div className="hidden md:flex items-center space-x-6 absolute right-0">
                            {navLinks.slice(2).map((link) => (
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
                            className="md:hidden p-2 text-2xl transition-colors absolute right-0"
                            style={{ color: '#C9A86C' }}
                            aria-label="Menu"
                        >
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    {/* Mobile Navigation - positioned below emblem */}
                    {isMenuOpen && (
                        <div
                            className="md:hidden absolute left-0 right-0 pb-4 pt-36"
                            style={{
                                top: '64px',
                                background: 'linear-gradient(to bottom, rgba(21, 20, 19, 0.98), rgba(21, 20, 19, 0.95))',
                                zIndex: 55,
                            }}
                        >
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
        </>
    )
}

export default Navbar
