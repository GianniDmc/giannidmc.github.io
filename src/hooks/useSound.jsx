import { useState, useEffect, useCallback, createContext, useContext } from 'react'

// Sound URLs (8-bit sounds)
const SOUNDS = {
    click: '/sounds/click.mp3',
    success: '/sounds/success.mp3',
    konamiCode: '/sounds/konami.mp3',
}

const SoundContext = createContext(null)

export function SoundProvider({ children }) {
    const [soundEnabled, setSoundEnabled] = useState(true)
    const [audioCache, setAudioCache] = useState({})

    // Preload sounds
    useEffect(() => {
        const cache = {}
        Object.entries(SOUNDS).forEach(([key, url]) => {
            const audio = new Audio(url)
            audio.preload = 'auto'
            audio.volume = 0.3
            cache[key] = audio
        })
        setAudioCache(cache)
    }, [])

    const playSound = useCallback((soundName) => {
        if (!soundEnabled) return

        const audio = audioCache[soundName]
        if (audio) {
            // Clone the audio to allow overlapping sounds
            const clone = audio.cloneNode()
            clone.volume = 0.3
            clone.play().catch(() => {
                // Ignore autoplay errors
            })
        }
    }, [soundEnabled, audioCache])

    const playClick = useCallback(() => playSound('click'), [playSound])
    const playSuccess = useCallback(() => playSound('success'), [playSound])
    const playKonami = useCallback(() => playSound('konamiCode'), [playSound])

    const toggleSound = useCallback(() => {
        setSoundEnabled(prev => !prev)
    }, [])

    return (
        <SoundContext.Provider value={{
            soundEnabled,
            toggleSound,
            playClick,
            playSuccess,
            playKonami,
        }}>
            {children}
        </SoundContext.Provider>
    )
}

export function useSound() {
    const context = useContext(SoundContext)
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider')
    }
    return context
}
