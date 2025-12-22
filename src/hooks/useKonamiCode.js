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
    'KeyB',
    'KeyA',
]

export function useKonamiCode() {
    const [activated, setActivated] = useState(false)
    const [inputSequence, setInputSequence] = useState([])

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.code

            setInputSequence((prev) => {
                const newSequence = [...prev, key].slice(-KONAMI_CODE.length)

                // Check if the sequence matches
                if (newSequence.length === KONAMI_CODE.length) {
                    const isMatch = newSequence.every(
                        (code, index) => code === KONAMI_CODE[index]
                    )

                    if (isMatch && !activated) {
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
