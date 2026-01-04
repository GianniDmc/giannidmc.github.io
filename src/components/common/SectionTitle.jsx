function SectionTitle({ children, subtitle, icon, className = '', titleClassName = 'font-lotr' }) {
    return (
        <div className={`text-center mb-12 ${className}`}>
            {/* Top Decoration */}
            <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(183, 137, 83, 0.5))' }} />
                <span style={{ color: '#B78953' }} className="text-xl">❧</span>
                <div className="w-16 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(183, 137, 83, 0.5))' }} />
            </div>

            {/* Icon if provided */}
            {icon && (
                <div className="text-4xl mb-4 animate-float">
                    {icon}
                </div>
            )}

            {/* Main Title */}
            <h2 className={`${titleClassName} text-3xl md:text-4xl lg:text-5xl glow-amber`}
                style={{ color: '#C9A86C' }}>
                {children}
            </h2>

            {/* Subtitle if provided */}
            {subtitle && (
                <p className="font-crimsonText text-lg mt-4 max-w-2xl mx-auto italic"
                    style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                    {subtitle}
                </p>
            )}

            {/* Bottom Decoration */}
            <div className="flex items-center justify-center space-x-3 mt-6">
                <div className="w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(183, 137, 83, 0.3))' }} />
                <span style={{ color: 'rgba(183, 137, 83, 0.4)' }} className="text-sm">🍁</span>
                <div className="w-8 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(183, 137, 83, 0.3))' }} />
            </div>
        </div>
    )
}

export default SectionTitle
