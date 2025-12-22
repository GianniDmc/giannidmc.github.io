import { useState, useEffect } from 'react'

function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        const difference = new Date(targetDate) - new Date()

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            expired: false,
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    const timeBlocks = [
        { value: timeLeft.days, label: 'Jours', icon: '🍂' },
        { value: timeLeft.hours, label: 'Heures', icon: '🕐' },
        { value: timeLeft.minutes, label: 'Minutes', icon: '⏳' },
        { value: timeLeft.seconds, label: 'Secondes', icon: '🍁' },
    ]

    if (timeLeft.expired) {
        return (
            <div className="text-center py-8">
                <p className="font-lotr text-3xl animate-gentle-pulse glow-amber"
                    style={{ color: '#C9A86C' }}>
                    ✨ Le Grand Jour est Arrivé ! ✨
                </p>
            </div>
        )
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Frame Top */}
            <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, #B78953)' }} />
                    <span style={{ color: '#B78953' }} className="text-lg">❧</span>
                    <span className="font-cinzel text-sm tracking-[0.2em] uppercase" style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                        Compte à Rebours
                    </span>
                    <span style={{ color: '#B78953' }} className="text-lg">❧</span>
                    <div className="w-12 h-px" style={{ background: 'linear-gradient(to left, transparent, #B78953)' }} />
                </div>
            </div>

            {/* Time Blocks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {timeBlocks.map((block, index) => (
                    <div key={block.label} className="relative group">
                        <div className="relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                            style={{
                                background: 'linear-gradient(145deg, rgba(42, 40, 35, 0.95), rgba(31, 30, 27, 0.98))',
                                border: '2px solid #3D3A32',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.3)',
                                padding: '1.5rem 1rem'
                            }}>

                            {/* Corner ornaments */}
                            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: 'rgba(183, 137, 83, 0.4)' }} />
                            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: 'rgba(183, 137, 83, 0.4)' }} />
                            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: 'rgba(183, 137, 83, 0.4)' }} />
                            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: 'rgba(183, 137, 83, 0.4)' }} />

                            {/* Icon */}
                            <div className="text-center text-2xl mb-3 animate-float opacity-80" style={{ animationDelay: `${index * 0.5}s` }}>
                                {block.icon}
                            </div>

                            {/* Number Display */}
                            <div className="relative">
                                <p className="font-lotr text-4xl md:text-5xl lg:text-6xl text-center tabular-nums glow-amber"
                                    style={{ color: '#C9A86C' }}>
                                    {String(block.value).padStart(2, '0')}
                                </p>
                            </div>

                            {/* Label */}
                            <p className="font-cinzel text-xs md:text-sm text-center mt-3 tracking-widest uppercase"
                                style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                                {block.label}
                            </p>

                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style={{ background: 'rgba(183, 137, 83, 0.05)' }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Frame Bottom */}
            <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(183, 137, 83, 0.5))' }} />
                    <span style={{ color: 'rgba(183, 137, 83, 0.5)' }} className="text-sm">🍂</span>
                    <div className="w-8 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(183, 137, 83, 0.5))' }} />
                </div>
            </div>
        </div>
    )
}

export default Countdown
