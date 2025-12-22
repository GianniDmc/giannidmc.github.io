import { useState, useEffect } from 'react'

const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
]

export function useKonamiCode() {
    const [activated, setActivated] = useState(false)
    const [inputSequence, setInputSequence] = useState([])

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Utiliser event.key pour les lettres (plus fiable sur tous les claviers)
            let key = event.key

            // Normaliser: pour les flèches on garde event.key, pour les lettres on met en minuscule
            if (key.length === 1) {
                key = key.toLowerCase()
            }

            console.log('Key pressed:', key) // Debug

            setInputSequence((prev) => {
                const newSequence = [...prev, key].slice(-KONAMI_CODE.length)

                // Check if the sequence matches
                if (newSequence.length === KONAMI_CODE.length) {
                    const isMatch = newSequence.every(
                        (code, index) => code === KONAMI_CODE[index]
                    )

                    if (isMatch && !activated) {
                        console.log('KONAMI CODE ACTIVATED!')
                        setActivated(true)
                    }
                }

                return newSequence
            })
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [activated])

    // Reset function if needed
    const reset = () => {
        setActivated(false)
        setInputSequence([])
    }

    return activated
}

export default useKonamiCode
