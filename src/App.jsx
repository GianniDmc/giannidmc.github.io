import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import HelpButton from './components/common/HelpButton'
import Home from './pages/Home'
import Quest from './pages/Quest'
import RSVP from './pages/RSVP'
import Gallery from './pages/Gallery'
import Help from './pages/Help'
import KonamiOverlay from './components/common/KonamiOverlay'
import { useKonamiCode } from './hooks/useKonamiCode'
import { SoundProvider } from './hooks/useSound'

function App() {
    const konamiActivated = useKonamiCode()
    const [showKonamiOverlay, setShowKonamiOverlay] = useState(false)

    useEffect(() => {
        if (konamiActivated) {
            setShowKonamiOverlay(true)
        }
    }, [konamiActivated])

    return (
        <SoundProvider>
            <div className="min-h-screen text-parchment relative">
                {/* Base gradient */}
                <div className="fixed inset-0 -z-30"
                    style={{
                        background: 'linear-gradient(to bottom, #151413 0%, #1A1917 30%, #181716 70%, #151413 100%)'
                    }} />

                {/* Subtle noise texture overlay */}
                <div className="fixed inset-0 -z-20 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }} />

                {/* Subtle radial gradient for warmth */}
                <div className="fixed inset-0 -z-15 opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(183, 137, 83, 0.08) 0%, transparent 50%)'
                    }} />

                {/* Vignette effect */}
                <div className="fixed inset-0 -z-10 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(31, 30, 27, 0.4) 100%)'
                    }} />

                {/* Subtle watermark emblem - positioned lower to avoid navbar overlap */}
                <div className="fixed inset-0 -z-8 pointer-events-none flex items-center justify-center"
                    style={{ paddingTop: '200px' }}>
                    <img
                        src="/images/embleme_ga_rouge.png"
                        alt=""
                        className="w-[500px] md:w-[600px] lg:w-[700px] h-auto opacity-[0.035]"
                        style={{
                            filter: 'grayscale(30%)',
                        }}
                    />
                </div>
                {/* Decorative corner elements - subtle */}
                <div className="fixed top-20 left-4 w-24 h-24 -z-5 opacity-[0.04] pointer-events-none hidden lg:block"
                    style={{
                        borderLeft: '2px solid #B78953',
                        borderTop: '2px solid #B78953',
                    }} />
                <div className="fixed top-20 right-4 w-24 h-24 -z-5 opacity-[0.04] pointer-events-none hidden lg:block"
                    style={{
                        borderRight: '2px solid #B78953',
                        borderTop: '2px solid #B78953',
                    }} />
                <div className="fixed bottom-4 left-4 w-24 h-24 -z-5 opacity-[0.04] pointer-events-none hidden lg:block"
                    style={{
                        borderLeft: '2px solid #B78953',
                        borderBottom: '2px solid #B78953',
                    }} />
                <div className="fixed bottom-4 right-4 w-24 h-24 -z-5 opacity-[0.04] pointer-events-none hidden lg:block"
                    style={{
                        borderRight: '2px solid #B78953',
                        borderBottom: '2px solid #B78953',
                    }} />
                <ScrollToTop />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quest" element={<Quest />} />
                        <Route path="/rsvp" element={<RSVP />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/aide" element={<Help />} />
                    </Routes>
                </main>
                <Footer />

                {/* Floating Help Button */}
                <HelpButton />

                {showKonamiOverlay && (
                    <KonamiOverlay onClose={() => setShowKonamiOverlay(false)} />
                )}
            </div>
        </SoundProvider>
    )
}

export default App
