import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Quest from './pages/Quest'
import RSVP from './pages/RSVP'
import Gallery from './pages/Gallery'
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
                        background: 'linear-gradient(to bottom, #1F1E1B 0%, #2A2823 30%, #252420 70%, #1F1E1B 100%)'
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
                    </Routes>
                </main>
                <Footer />

                {showKonamiOverlay && (
                    <KonamiOverlay onClose={() => setShowKonamiOverlay(false)} />
                )}
            </div>
        </SoundProvider>
    )
}

export default App
