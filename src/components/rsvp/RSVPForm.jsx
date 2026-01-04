import { useState, useEffect } from 'react'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'
import { useSound } from '../../hooks/useSound'

function RSVPForm() {
    const { playSuccess } = useSound()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        attending: 'yes', // 'yes' ou 'no'
        guestCount: 1,
        additionalGuests: [], // Noms des invités supplémentaires
        dietaryRestrictions: '',
        attendBrunch: false,
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    // Mettre à jour les champs d'invités quand le nombre change
    useEffect(() => {
        const count = parseInt(formData.guestCount) || 1
        const additionalCount = Math.max(0, count - 1)

        setFormData(prev => {
            const currentGuests = prev.additionalGuests || []
            const newGuests = []

            for (let i = 0; i < additionalCount; i++) {
                newGuests.push(currentGuests[i] || { firstName: '', lastName: '' })
            }

            return { ...prev, additionalGuests: newGuests }
        })
    }, [formData.guestCount])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleGuestChange = (index, field, value) => {
        setFormData(prev => {
            const newGuests = [...prev.additionalGuests]
            newGuests[index] = { ...newGuests[index], [field]: value }
            return { ...prev, additionalGuests: newGuests }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwgk9C-HijCSPpJfh7naWES2CTwjwTjDsL9ULLsfW1PiMjdFFLSqAQDc02XYjoPTFHroA/exec'

            // Formater les noms des invités supplémentaires
            const guestNames = formData.additionalGuests
                .map(g => `${g.firstName} ${g.lastName}`.trim())
                .filter(name => name.length > 0)
                .join(', ')

            // Préparer les données pour Google Sheets
            const submitData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                attending: formData.attending === 'yes' ? 'Oui' : 'Non',
                guestCount: formData.attending === 'yes' ? formData.guestCount : 0,
                additionalGuests: formData.attending === 'yes' ? guestNames : '',
                dietaryRestrictions: formData.attending === 'yes' ? formData.dietaryRestrictions : '',
                attendBrunch: formData.attending === 'yes' && formData.attendBrunch ? 'Oui' : 'Non',
                message: formData.message,
                timestamp: new Date().toISOString(),
            }

            // Envoyer à Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData),
            })

            setWasAttending(formData.attending === 'yes')
            setSubmitStatus('success')
            playSuccess()

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                attending: 'yes',
                guestCount: 1,
                additionalGuests: [],
                dietaryRestrictions: '',
                attendBrunch: false,
                message: '',
            })
        } catch (error) {
            console.error('Submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const [wasAttending, setWasAttending] = useState(true)

    if (submitStatus === 'success') {
        return (
            <div className="text-center py-12">
                <div className="animate-float mb-8">
                    <span className="text-7xl">{wasAttending ? '🏆' : '💌'}</span>
                </div>
                <h3 className="font-lotr text-3xl mb-4 glow-amber"
                    style={{ color: '#C9A86C' }}>
                    {wasAttending ? 'Inscription Validée !' : 'Réponse Enregistrée'}
                </h3>
                {wasAttending ? (
                    <>
                        <div className="inline-block px-6 py-3 mb-6"
                            style={{
                                background: 'rgba(76, 86, 63, 0.3)',
                                border: '1px solid rgba(76, 86, 63, 0.5)'
                            }}>
                            <p className="font-cinzel text-sm" style={{ color: '#B78953' }}>
                                🎮 ACHIEVEMENT UNLOCKED: Membre de la Communauté
                            </p>
                        </div>
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(183, 137, 83, 0.5))' }} />
                            <span style={{ color: '#B78953' }}>⚔️</span>
                            <div className="w-12 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(183, 137, 83, 0.5))' }} />
                        </div>
                        <p className="font-crimsonText text-xl max-w-md mx-auto mb-8 italic"
                            style={{ color: 'rgba(245, 237, 224, 0.8)' }}>
                            Vous avez rejoint le groupe ! Rendez-vous au Château de Mauriac
                            le 10 Octobre 2026 pour l'aventure.
                        </p>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(183, 137, 83, 0.5))' }} />
                            <span style={{ color: '#B78953' }}>💔</span>
                            <div className="w-12 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(183, 137, 83, 0.5))' }} />
                        </div>
                        <p className="font-crimsonText text-xl max-w-md mx-auto mb-8 italic"
                            style={{ color: 'rgba(245, 237, 224, 0.8)' }}>
                            Nous sommes désolés que vous ne puissiez pas être présent.
                            Vous resterez dans nos pensées ce jour-là !
                        </p>
                    </>
                )}
                <Button
                    variant="ghost"
                    onClick={() => setSubmitStatus(null)}
                >
                    Nouvelle réponse
                </Button>
            </div>
        )
    }

    return (
        <div>
            <SectionTitle
                icon="⚔️"
                subtitle="Créez votre personnage pour cette quête"
                titleClassName="font-medieval"
            >
                Fiche de Personnage
            </SectionTitle>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                {/* Name Fields - Chef de groupe */}
                <div>
                    <p className="font-cinzel text-sm mb-3 tracking-wider"
                        style={{ color: '#B78953' }}>
                        👤 Chef de groupe (vous)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-cinzel text-sm mb-2 tracking-wider uppercase"
                                style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                                Prénom *
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="medieval-input"
                                placeholder="Votre prénom"
                            />
                        </div>
                        <div>
                            <label className="block font-cinzel text-sm mb-2 tracking-wider uppercase"
                                style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                                Nom *
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="medieval-input"
                                placeholder="Votre nom"
                            />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block font-cinzel text-sm mb-2 tracking-wider uppercase"
                        style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                        Parchemin magique (email) *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="medieval-input"
                        placeholder="votre@email.com"
                    />
                </div>

                {/* Attendance Choice */}
                <div className="medieval-card">
                    <p className="font-cinzel text-sm mb-4 tracking-wider"
                        style={{ color: '#B78953' }}>
                        🎯 Votre réponse *
                    </p>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="attending"
                                value="yes"
                                checked={formData.attending === 'yes'}
                                onChange={handleChange}
                                className="w-5 h-5 accent-amber-600"
                            />
                            <span className="font-crimsonText text-lg group-hover:opacity-80 transition-opacity"
                                style={{ color: formData.attending === 'yes' ? '#C9A86C' : 'rgba(245, 237, 224, 0.7)' }}>
                                ❧ Oui, je serai de l'aventure
                            </span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="attending"
                                value="no"
                                checked={formData.attending === 'no'}
                                onChange={handleChange}
                                className="w-5 h-5 accent-amber-600"
                            />
                            <span className="font-crimsonText text-lg group-hover:opacity-80 transition-opacity"
                                style={{ color: formData.attending === 'no' ? '#C9A86C' : 'rgba(245, 237, 224, 0.7)' }}>
                                — Hélas, je ne pourrai être présent
                            </span>
                        </label>
                    </div>
                </div>

                {/* Show rest of form only if attending */}
                {formData.attending === 'yes' && (
                    <>
                        {/* Guest Count */}
                        <div>
                            <label className="block font-cinzel text-sm mb-2 tracking-wider uppercase"
                                style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                                Taille du groupe (vous inclus) *
                            </label>
                            <select
                                name="guestCount"
                                value={formData.guestCount}
                                onChange={handleChange}
                                className="medieval-input appearance-none cursor-pointer"
                            >
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <option key={num} value={num}>
                                        {num} {num === 1 ? 'aventurier' : 'aventuriers'}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Additional Guests Names */}
                        {formData.additionalGuests.length > 0 && (
                            <div className="space-y-4">
                                <p className="font-cinzel text-sm tracking-wider"
                                    style={{ color: '#B78953' }}>
                                    👥 Membres du groupe
                                </p>
                                {formData.additionalGuests.map((guest, index) => (
                                    <div key={index} className="medieval-card">
                                        <p className="font-cinzel text-xs mb-3 tracking-wider"
                                            style={{ color: 'rgba(183, 137, 83, 0.6)' }}>
                                            Aventurier #{index + 2}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                value={guest.firstName}
                                                onChange={(e) => handleGuestChange(index, 'firstName', e.target.value)}
                                                className="medieval-input"
                                                placeholder="Prénom"
                                                required
                                            />
                                            <input
                                                type="text"
                                                value={guest.lastName}
                                                onChange={(e) => handleGuestChange(index, 'lastName', e.target.value)}
                                                className="medieval-input"
                                                placeholder="Nom"
                                                required
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Dietary Restrictions */}
                        <div>
                            <label className="block font-cinzel text-sm mb-2 tracking-wider uppercase"
                                style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                                Allergies / Buffs alimentaires
                            </label>
                            <textarea
                                name="dietaryRestrictions"
                                value={formData.dietaryRestrictions}
                                onChange={handleChange}
                                rows={3}
                                className="medieval-input resize-none"
                                placeholder="Végétarien, sans gluten, allergie aux noix..."
                            />
                            <p className="text-sm mt-2 font-crimsonText italic"
                                style={{ color: 'rgba(245, 237, 224, 0.5)' }}>
                                ℹ️ Indiquez les restrictions pour chaque membre du groupe
                            </p>
                        </div>

                        {/* Brunch Checkbox */}
                        <div className="medieval-card">
                            <label className="flex items-start space-x-4 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="attendBrunch"
                                    checked={formData.attendBrunch}
                                    onChange={handleChange}
                                    className="medieval-checkbox mt-1"
                                />
                                <div>
                                    <p className="font-cinzel text-lg group-hover:opacity-80 transition-opacity"
                                        style={{ color: '#C9A86C' }}>
                                        🌅 Quête Bonus : Brunch du Lendemain
                                    </p>
                                    <p className="font-crimsonText text-sm mt-1 italic"
                                        style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                                        Dimanche 11 Octobre à 10h00 — +150 XP et régénération complète
                                    </p>
                                </div>
                            </label>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block font-cinzel text-sm mb-2 tracking-wider uppercase"
                                style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                                Message aux organisateurs (optionnel)
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="medieval-input resize-none"
                                placeholder="Un mot, une question, un sort de bénédiction..."
                            />
                        </div>
                    </>
                )}

                {/* Message - always show for decline too */}
                {formData.attending === 'no' && (
                    <div>
                        <label className="block font-cinzel text-sm mb-2 tracking-wider uppercase"
                            style={{ color: 'rgba(183, 137, 83, 0.8)' }}>
                            Un petit mot ? (optionnel)
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="medieval-input resize-none"
                            placeholder="Nous aurions adoré être là mais..."
                        />
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="p-4 text-center"
                        style={{
                            background: 'rgba(150, 71, 52, 0.2)',
                            border: '1px solid rgba(150, 71, 52, 0.5)'
                        }}>
                        <p className="font-cinzel text-sm" style={{ color: '#AD5A45' }}>
                            ⚠️ Échec de la connexion au serveur
                        </p>
                        <p className="font-crimsonText text-sm mt-1"
                            style={{ color: 'rgba(245, 237, 224, 0.7)' }}>
                            Le parchemin n'a pas pu être envoyé. Réessayez ou contactez-nous directement.
                        </p>
                    </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-6">
                    <Button
                        type="submit"
                        variant={formData.attending === 'yes' ? 'confirm' : 'royal'}
                        size="xl"
                        disabled={isSubmitting}
                        className={isSubmitting ? 'animate-gentle-pulse' : ''}
                    >
                        {isSubmitting ? (
                            <>⏳ Envoi du parchemin...</>
                        ) : formData.attending === 'yes' ? (
                            <>✅ Confirmer ma participation</>
                        ) : (
                            <>📨 Envoyer ma réponse</>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default RSVPForm
