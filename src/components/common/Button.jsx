import { useSound } from '../../hooks/useSound'

function Button({
    children,
    onClick,
    variant = 'royal',
    size = 'md',
    className = '',
    disabled = false,
    type = 'button',
    ...props
}) {
    const { playClick } = useSound()

    const handleClick = (e) => {
        if (!disabled) {
            playClick()
            onClick?.(e)
        }
    }

    const baseStyles = `
    relative font-cinzel uppercase tracking-widest
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

    const variants = {
        royal: `
      text-parchment border-2
      hover:-translate-y-0.5
      active:translate-y-0
    `,
        confirm: `
      text-parchment border-2
      hover:-translate-y-0.5
      active:translate-y-0
    `,
        ghost: `
      bg-transparent border-2
      hover:bg-amber/10
      active:translate-y-0
    `,
    }

    const sizes = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-7 py-3.5 text-base',
        lg: 'px-9 py-4 text-lg',
        xl: 'px-12 py-5 text-xl',
    }

    const getVariantStyles = () => {
        switch (variant) {
            case 'royal':
                return {
                    background: 'linear-gradient(to bottom, #964734 0%, #692721 50%, #541F1A 100%)',
                    borderColor: '#B78953',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.5)',
                }
            case 'confirm':
                return {
                    background: 'linear-gradient(to bottom, #4C563F 0%, #3C4432 50%, #2D3326 100%)',
                    borderColor: '#B78953',
                    boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.5)',
                }
            case 'ghost':
                return {
                    background: 'transparent',
                    borderColor: '#B78953',
                    color: '#B78953',
                }
            default:
                return {}
        }
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            style={getVariantStyles()}
            onMouseOver={(e) => {
                if (variant === 'royal') {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #AD5A45 0%, #964734 50%, #7A3A2A 100%)'
                    e.currentTarget.style.borderColor = '#D4AF37'
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.2), 0 6px 20px rgba(150, 71, 52, 0.4), 0 0 30px rgba(183, 137, 83, 0.2)'
                } else if (variant === 'confirm') {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #5D6A4D 0%, #4C563F 50%, #3C4432 100%)'
                    e.currentTarget.style.borderColor = '#D4AF37'
                    e.currentTarget.style.boxShadow = 'inset 0 2px 0 rgba(255,255,255,0.2), 0 6px 25px rgba(76, 86, 63, 0.4), 0 0 40px rgba(183, 137, 83, 0.15)'
                }
            }}
            onMouseOut={(e) => {
                const styles = getVariantStyles()
                e.currentTarget.style.background = styles.background
                e.currentTarget.style.borderColor = styles.borderColor
                e.currentTarget.style.boxShadow = styles.boxShadow
            }}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
