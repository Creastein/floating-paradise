'use client'

import { useState, FormEvent } from 'react'
import { FadeIn } from '@/components/ui/fade-in'

// ── Types ──────────────────────────────────────────────────────────

type Direction = 'jepara-karimunjawa' | 'karimunjawa-jepara'
type Nationality = 'indonesian' | 'international'

interface FormData {
  fullName: string
  travelDate: string
  direction: Direction
  tickets: number
  contact: string
  nationality: Nationality
  passportNumber: string
}

const INITIAL_FORM: FormData = {
  fullName: '',
  travelDate: '',
  direction: 'jepara-karimunjawa',
  tickets: 1,
  contact: '',
  nationality: 'indonesian',
  passportNumber: '',
}

const DIRECTION_LABELS: Record<Direction, string> = {
  'jepara-karimunjawa': 'Jepara → Karimunjawa',
  'karimunjawa-jepara': 'Karimunjawa → Jepara',
}

const WHATSAPP_NUMBER = '6282226945510'

// ── Component ──────────────────────────────────────────────────────

export default function BoatTicketForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const lines = [
      `🚢 *Boat Ticket Request*`,
      ``,
      `Name: ${form.fullName}`,
      `Date: ${form.travelDate}`,
      `Direction: ${DIRECTION_LABELS[form.direction]}`,
      `Tickets: ${form.tickets}`,
      `Contact: ${form.contact}`,
      `Nationality: ${form.nationality === 'indonesian' ? 'Indonesian' : 'International'}`,
    ]

    if (form.nationality === 'international' && form.passportNumber) {
      lines.push(`Passport: ${form.passportNumber}`)
    }

    lines.push(``, `Total: Rp ${(300000 * form.tickets).toLocaleString('id-ID')}`)

    const message = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    setSubmitted(true)
  }

  // Minimum date = tomorrow
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const isValid =
    form.fullName.trim() &&
    form.travelDate &&
    form.contact.trim() &&
    form.tickets >= 1 &&
    (form.nationality === 'indonesian' || form.passportNumber.trim())

  // ── Confirmation state ─────────────────────────────────────────

  if (submitted) {
    return (
      <FadeIn direction="up" distance={30}>
        <div className="bg-[#e8efe9] p-10 sm:p-12 rounded-2xl text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Request Sent!
          </h3>
          <p className="text-foreground/80 font-light leading-relaxed max-w-md mx-auto">
            Thanks! We&apos;ll confirm your booking and send payment details via WhatsApp within a few hours.
          </p>
          <button
            type="button"
            onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
            className="mt-4 text-sm text-primary font-medium hover:underline underline-offset-4"
          >
            Book another ticket
          </button>
        </div>
      </FadeIn>
    )
  }

  // ── Form ───────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-1.5">
        <label htmlFor="bt-name" className="block text-sm font-medium text-foreground">
          Full Name
        </label>
        <input
          id="bt-name"
          type="text"
          required
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          placeholder="As per ID / passport"
          className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 transition-colors text-sm"
        />
      </div>

      {/* Travel Date + Direction */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="bt-date" className="block text-sm font-medium text-foreground">
            Travel Date
          </label>
          <input
            id="bt-date"
            type="date"
            required
            min={minDate}
            value={form.travelDate}
            onChange={(e) => update('travelDate', e.target.value)}
            className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="bt-direction" className="block text-sm font-medium text-foreground">
            Direction
          </label>
          <select
            id="bt-direction"
            value={form.direction}
            onChange={(e) => update('direction', e.target.value as Direction)}
            className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
          >
            <option value="jepara-karimunjawa">Jepara → Karimunjawa</option>
            <option value="karimunjawa-jepara">Karimunjawa → Jepara</option>
          </select>
        </div>
      </div>

      {/* Tickets + Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="bt-tickets" className="block text-sm font-medium text-foreground">
            Number of Tickets
          </label>
          <input
            id="bt-tickets"
            type="number"
            required
            min={1}
            max={20}
            value={form.tickets}
            onChange={(e) => update('tickets', Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="bt-contact" className="block text-sm font-medium text-foreground">
            Contact / WhatsApp
          </label>
          <input
            id="bt-contact"
            type="tel"
            required
            value={form.contact}
            onChange={(e) => update('contact', e.target.value)}
            placeholder="+62 812 3456 7890"
            className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 transition-colors text-sm"
          />
        </div>
      </div>

      {/* Nationality */}
      <div className="space-y-1.5">
        <label htmlFor="bt-nationality" className="block text-sm font-medium text-foreground">
          Nationality
        </label>
        <select
          id="bt-nationality"
          value={form.nationality}
          onChange={(e) => update('nationality', e.target.value as Nationality)}
          className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
        >
          <option value="indonesian">Indonesian</option>
          <option value="international">International</option>
        </select>
      </div>

      {/* Passport — conditional */}
      {form.nationality === 'international' && (
        <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
          <label htmlFor="bt-passport" className="block text-sm font-medium text-foreground">
            Passport Number
          </label>
          <input
            id="bt-passport"
            type="text"
            required
            value={form.passportNumber}
            onChange={(e) => update('passportNumber', e.target.value)}
            placeholder="e.g. A12345678"
            className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 transition-colors text-sm"
          />
        </div>
      )}

      {/* Price summary */}
      <div className="bg-[#F5EFE4] p-5 rounded-xl flex items-center justify-between">
        <div>
          <p className="text-sm text-foreground/60 font-medium">Total</p>
          <p className="font-serif text-2xl font-bold text-foreground">
            Rp {(300000 * form.tickets).toLocaleString('id-ID')}
          </p>
        </div>
        <p className="text-xs text-foreground/50">
          Rp 300,000 × {form.tickets} ticket{form.tickets > 1 ? 's' : ''}
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid}
        className="w-full bg-primary text-primary-foreground py-3.5 rounded font-medium tracking-wide hover:bg-primary/90 transition-colors shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ borderRadius: '4px' }}
      >
        Request My Ticket
      </button>

      <p className="text-xs text-foreground/50 text-center leading-relaxed">
        This form sends your request via WhatsApp. No online payment — we&apos;ll reply with bank transfer details.
      </p>
    </form>
  )
}
