import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
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
            <div className="min-h-screen text-parchment"
                style={{
                    background: 'linear-gradient(to bottom, #1F1E1B 0%, #2A2823 50%, #1F1E1B 100%)'
                }}>
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
