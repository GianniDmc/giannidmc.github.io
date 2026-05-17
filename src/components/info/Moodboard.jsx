import { useState, useEffect, useCallback } from 'react'
import SectionTitle from '../common/SectionTitle'

const palette = [
    { name: 'Amber Glow',    hex: '#B78953', text: '#1F1E1B' },
    { name: 'Crimson Blaze', hex: '#964734', text: '#F5EDE0' },
    { name: 'Maple Spice',   hex: '#692721', text: '#F5EDE0' },
    { name: 'Moss Mist',     hex: '#4C563F', text: '#F5EDE0' },
    { name: 'Lagoon',        hex: '#243533', text: '#F5EDE0' },
]

// ratio = height / width (used to balance masonry columns)
const moodboardImages = [
    { src: '/images/moodboard/board-mariage-automnal.jpg', alt: 'Inspiration mariage tons bordeaux & orange',  ratio: 1.57 },
    { src: '/images/moodboard/board-medieval.jpg',         alt: 'Inspiration robes médiévales & ambiance fantasy', ratio: 2.17 },
    { src: '/images/moodboard/board-fleurs-bougies.jpg',   alt: 'Compositions fleurs séchées & bougies',       ratio: 0.63 },
    { src: '/images/moodboard/board-fleurs-palette.jpg',   alt: 'Bouquet automnal & palette',                  ratio: 1.00 },
    { src: '/images/moodboard/chateau-cour.jpg',           alt: 'Le château et sa cour',                       ratio: 0.75 },
    { src: '/images/moodboard/chateau-salle.jpg',          alt: 'Salle de réception du château',               ratio: 0.67 },
    { src: '/images/moodboard/split-fiction.jpg',          alt: 'Split Fiction — clin d\'œil',                 ratio: 0.56 },
    { src: '/images/moodboard/inspiration-1.jpg',          alt: 'Inspiration complémentaire',                  ratio: 1.33 },
]

// LPT (Longest Processing Time) : trie par ratio décroissant puis place
// chaque image dans la colonne actuellement la plus courte. Donne le meilleur
// compromis hauteur/compte par colonne pour un masonry statique.
function distributeIntoColumns(items, nCols) {
    const columns = Array.from({ length: nCols }, () => ({ height: 0, items: [] }))
    const sorted = items
        .map((item, originalIndex) => ({ ...item, originalIndex }))
        .sort((a, b) => b.ratio - a.ratio)
    sorted.forEach((item) => {
        let shortest = 0
        for (let i = 1; i < nCols; i++) {
            if (columns[i].height < columns[shortest].height) shortest = i
        }
        columns[shortest].items.push(item)
        columns[shortest].height += item.ratio
    })
    columns.forEach((col) => col.items.sort((a, b) => a.originalIndex - b.originalIndex))
    return columns
}

function Moodboard() {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [copied, setCopied] = useState(null)
    const [nCols, setNCols] = useState(() => (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 2))

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)')
        const handler = (e) => setNCols(e.matches ? 3 : 2)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    const columns = distributeIntoColumns(moodboardImages, nCols)

    const isOpen = selectedIndex !== null

    const close = useCallback(() => setSelectedIndex(null), [])
    const next = useCallback(() => {
        setSelectedIndex((i) => (i === null ? null : (i + 1) % moodboardImages.length))
    }, [])
    const prev = useCallback(() => {
        setSelectedIndex((i) => (i === null ? null : (i - 1 + moodboardImages.length) % moodboardImages.length))
    }, [])

    useEffect(() => {
        if (!isOpen) return
        const onKey = (e) => {
            if (e.key === 'Escape') close()
            else if (e.key === 'ArrowRight') next()
            else if (e.key === 'ArrowLeft') prev()
        }
        window.addEventListener('keydown', onKey)
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = prevOverflow
        }
    }, [isOpen, close, next, prev])

    const copyHex = (hex) => {
        if (!navigator.clipboard) return
        navigator.clipboard.writeText(hex).then(() => {
            setCopied(hex)
            setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1500)
        }).catch(() => {})
    }

    return (
        <section className="py-20 px-4"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(42, 31, 24, 0.3), transparent)' }}>
            <div className="max-w-5xl mx-auto">
                <SectionTitle icon="🍂" subtitle="L'ambiance de notre journée, pour celles et ceux qui veulent s'en inspirer">
                    Moodboard
                </SectionTitle>

                {/* Palette HTML native */}
                <div className="medieval-card mb-12">
                    <h3 className="font-medieval text-xl text-gold mb-2 text-center glow-gold">
                        Palette de la Quête
                    </h3>
                    <p className="font-crimson text-parchment/60 text-sm text-center mb-6 italic">
                        Cliquez sur une couleur pour copier son code
                    </p>
                    <div className="grid grid-cols-5 gap-2 sm:gap-3">
                        {palette.map(({ name, hex, text }) => (
                            <button
                                key={hex}
                                type="button"
                                onClick={() => copyHex(hex)}
                                className="group relative aspect-[2/3] sm:aspect-[3/4] flex flex-col justify-end p-1.5 sm:p-3 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-gold/60"
                                style={{ background: hex, color: text, border: '1px solid rgba(201, 168, 108, 0.25)' }}
                                aria-label={`Copier ${hex}`}
                            >
                                <span className="font-cinzel text-[0.55rem] sm:text-xs uppercase tracking-wider opacity-90 leading-tight">
                                    {name}
                                </span>
                                <span className="font-crimson text-[0.65rem] sm:text-sm opacity-80">
                                    {hex}
                                </span>
                                <span
                                    className={`absolute inset-0 flex items-center justify-center font-cinzel text-xs uppercase tracking-widest transition-opacity ${copied === hex ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ background: 'rgba(31, 30, 27, 0.85)', color: '#C9A86C' }}
                                >
                                    Copié ✓
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grille masonry — distribution équilibrée par hauteur cumulée */}
                <div className="flex gap-2 sm:gap-4">
                    {columns.map((col, ci) => (
                        <div key={ci} className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-4">
                            {col.items.map((img) => (
                                <button
                                    key={img.src}
                                    type="button"
                                    onClick={() => setSelectedIndex(img.originalIndex)}
                                    className="block w-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold/60"
                                    style={{ border: '1px solid rgba(201, 168, 108, 0.2)' }}
                                    aria-label={`Agrandir : ${img.alt}`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        loading="lazy"
                                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                                        style={{ filter: 'sepia(0.05) saturate(1.05)' }}
                                    />
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Note de bas de section */}
                <p className="font-crimson text-parchment/50 text-sm text-center italic mt-10">
                    ✨ Ces images sont de simples inspirations, libre à vous de les suivre ou non.
                </p>
            </div>

            {/* Lightbox */}
            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visionneuse d'images"
                    onClick={close}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: 'rgba(15, 14, 12, 0.95)', backdropFilter: 'blur(6px)' }}
                >
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); close() }}
                        aria-label="Fermer"
                        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center font-cinzel text-2xl text-gold hover:text-parchment transition-colors"
                        style={{ background: 'rgba(31, 30, 27, 0.7)', border: '1px solid rgba(201, 168, 108, 0.4)' }}
                    >
                        ✕
                    </button>

                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); prev() }}
                        aria-label="Image précédente"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl text-gold hover:text-parchment transition-colors"
                        style={{ background: 'rgba(31, 30, 27, 0.7)', border: '1px solid rgba(201, 168, 108, 0.4)' }}
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); next() }}
                        aria-label="Image suivante"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl text-gold hover:text-parchment transition-colors"
                        style={{ background: 'rgba(31, 30, 27, 0.7)', border: '1px solid rgba(201, 168, 108, 0.4)' }}
                    >
                        ›
                    </button>

                    <figure
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[90vw] max-h-[90vh] flex flex-col items-center"
                    >
                        <img
                            src={moodboardImages[selectedIndex].src}
                            alt={moodboardImages[selectedIndex].alt}
                            className="max-w-[90vw] max-h-[80vh] object-contain"
                            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}
                        />
                        <figcaption className="font-crimson text-parchment/80 text-sm italic mt-4 text-center px-4">
                            {moodboardImages[selectedIndex].alt}
                            <span className="block font-cinzel text-gold/60 text-xs mt-1 uppercase tracking-widest">
                                {selectedIndex + 1} / {moodboardImages.length}
                            </span>
                        </figcaption>
                    </figure>
                </div>
            )}
        </section>
    )
}

export default Moodboard
