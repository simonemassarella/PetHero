'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { CreditCard, Lock, Check, ArrowLeft, Shield, PawPrint } from 'lucide-react'
import { subscriptionPlans } from '@/data/subscriptions'
import { getProfessionalById } from '@/data/professionals'
import { formatPrice } from '@/lib/utils'

const UNLOCKED_KEY = 'petlife_unlocked_contacts'
const UNLOCK_VERSION_KEY = 'petlife_unlocked_contacts_v'

function unlockContact(professionalId: string) {
  try {
    localStorage.setItem(UNLOCK_VERSION_KEY, '2')
    const raw = localStorage.getItem(UNLOCKED_KEY)
    const ids = raw ? (JSON.parse(raw) as string[]) : []
    const next = Array.isArray(ids) ? Array.from(new Set([...ids, professionalId])) : [professionalId]
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify(next))
  } catch {
    localStorage.setItem(UNLOCK_VERSION_KEY, '2')
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify([professionalId]))
  }
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const planId = searchParams.get('plan') || 'pro'
  const professionalId = searchParams.get('professionalId')
  const serviceId = searchParams.get('serviceId')
  const returnUrl = searchParams.get('returnUrl')

  const bookingProfessional = professionalId ? getProfessionalById(professionalId) : undefined
  const bookingService = bookingProfessional?.services.find((s) => s.id === serviceId)

  const selectedPlan = subscriptionPlans.find(p => p.id === planId) || subscriptionPlans[0]

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
    billingName: '',
    billingEmail: '',
    billingAddress: '',
    billingCity: '',
    billingZip: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simula elaborazione pagamento Stripe
    await new Promise(resolve => setTimeout(resolve, 2000))

    setSuccess(true)
    setLoading(false)

    if (bookingProfessional && bookingService) {
      unlockContact(bookingProfessional.id)
    }

    // Redirect dopo 3 secondi
    setTimeout(() => {
      if (bookingProfessional && bookingService) {
        const params = new URLSearchParams()
        params.set('professionalId', bookingProfessional.id)
        if (returnUrl) params.set('returnUrl', returnUrl)
        router.push(`/thankyou?${params.toString()}`)
        return
      }
      router.push('/dashboard?subscription=success')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target

    // Formattazione carta
    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').slice(0, 16)
      value = value.replace(/(\d{4})/g, '$1 ').trim()
    }
    if (name === 'expiry') {
      value = value.replace(/\D/g, '').slice(0, 4)
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2)
      }
    }
    if (name === 'cvc') {
      value = value.replace(/\D/g, '').slice(0, 4)
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (selectedPlan.id === 'base') {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="card p-8">
            <h1 className="text-2xl font-display font-bold text-neutral-900 mb-2">
              Il piano Base non richiede attivazione
            </h1>
            <p className="text-neutral-600 mb-6">
              Con Base ti registri gratis: la piattaforma trattiene 3€ per ogni prenotazione pagata dal cliente.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/signup?role=professional" className="btn-primary">
                Registrati
              </Link>
              <Link href="/professionisti#pricing" className="btn-secondary">
                Torna ai piani
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="card p-8">
            <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-secondary-500" />
            </div>
            <h1 className="text-2xl font-display font-bold text-neutral-900 mb-2">
              {bookingProfessional && bookingService ? 'Prenotazione Confermata!' : 'Pagamento Completato!'}
            </h1>
            <p className="text-neutral-600 mb-6">
              {bookingProfessional && bookingService
                ? `Hai prenotato "${bookingService.name}" con ${bookingProfessional.name}. Verrai reindirizzato al profilo...`
                : `Il tuo abbonamento ${selectedPlan.name} è ora attivo. Verrai reindirizzato alla dashboard...`}
            </p>
            <div className="animate-pulse text-primary-500">
              Reindirizzamento in corso...
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href={bookingProfessional ? `/profilo/${bookingProfessional.id}` : "/professionisti#pricing"}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-500 mb-8"
        >
          <ArrowLeft size={18} />
          Torna ai piani
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Riepilogo Ordine</h2>
              
              <div className="p-4 bg-primary-50 rounded-xl mb-4">
                <h3 className="font-semibold text-neutral-900">
                  {bookingProfessional && bookingService ? bookingService.name : selectedPlan.name}
                </h3>
                <p className="text-3xl font-bold text-primary-600 mt-1">
                  {bookingProfessional && bookingService ? formatPrice(bookingService.price) : formatPrice(selectedPlan.price)}
                  {bookingProfessional && bookingService ? null : (
                    <span className="text-sm font-normal text-neutral-500">/mese</span>
                  )}
                </p>
              </div>

              {!bookingProfessional || !bookingService ? (
                <ul className="space-y-2 mb-6">
                  {selectedPlan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-neutral-600 mb-6">
                  <div className="flex items-center justify-between">
                    <span>Professionista</span>
                    <span className="font-medium text-neutral-900">{bookingProfessional.name}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span>Servizio</span>
                    <span className="font-medium text-neutral-900">{bookingService.name}</span>
                  </div>
                </div>
              )}

              <div className="border-t border-neutral-100 pt-4">
                <div className="flex justify-between text-sm text-neutral-600 mb-2">
                  <span>Subtotale</span>
                  <span>{formatPrice(bookingProfessional && bookingService ? bookingService.price : selectedPlan.price)}</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-600 mb-2">
                  <span>IVA (22%)</span>
                  <span>{formatPrice((bookingProfessional && bookingService ? bookingService.price : selectedPlan.price) * 0.22)}</span>
                </div>
                <div className="flex justify-between font-semibold text-neutral-900 text-lg pt-2 border-t border-neutral-100">
                  <span>Totale</span>
                  <span>{formatPrice((bookingProfessional && bookingService ? bookingService.price : selectedPlan.price) * 1.22)}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
                <Shield size={16} />
                <span>Pagamento sicuro con Stripe</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="card p-6">
              <h1 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Completa il Pagamento
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Card Details */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <CreditCard size={20} />
                    Dati Carta
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Numero Carta
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Nome sulla Carta
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        placeholder="Mario Rossi"
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Scadenza
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleChange}
                          placeholder="123"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    Indirizzo di Fatturazione
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          name="billingName"
                          value={formData.billingName}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="billingEmail"
                          value={formData.billingEmail}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Indirizzo
                      </label>
                      <input
                        type="text"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Città
                        </label>
                        <input
                          type="text"
                          name="billingCity"
                          value={formData.billingCity}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          CAP
                        </label>
                        <input
                          type="text"
                          name="billingZip"
                          value={formData.billingZip}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Elaborazione in corso...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Lock size={18} />
                      Paga {formatPrice(selectedPlan.price * 1.22)}
                    </span>
                  )}
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  Cliccando &ldquo;Paga&rdquo; accetti i nostri{' '}
                  <Link href="/termini" className="text-primary-500 hover:underline">Termini di Servizio</Link>
                  {' '}e autorizzi l&apos;addebito ricorrente mensile.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-serenade flex items-center justify-center">
        <div className="text-center">
          <PawPrint size={64} className="text-violet mx-auto mb-4 animate-bounce" strokeWidth={2} />
          <p className="text-violet font-display text-xl">Caricamento...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
