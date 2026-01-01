import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            // Wait for page to render, then scroll to element
            setTimeout(() => {
                const element = document.getElementById(hash.slice(1))
                if (element) {
                    const offset = 80 // Account for fixed navbar
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({
                        top: elementPosition - offset,
                        behavior: 'smooth'
                    })
                }
            }, 100)
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

export default ScrollToTop
