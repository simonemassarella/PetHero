'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle2, Phone, Mail, ArrowLeft, PawPrint } from 'lucide-react'
import { getProfessionalById } from '@/data/professionals'

const UNLOCKED_KEY = 'petlife_unlocked_contacts'
const UNLOCK_VERSION_KEY = 'petlife_unlocked_contacts_v'

function hasUnlockedContact(professionalId: string): boolean {
  try {
    const v = localStorage.getItem(UNLOCK_VERSION_KEY)
    if (v !== '2') return false

    const raw = localStorage.getItem(UNLOCKED_KEY)
    if (!raw) return false
    const ids = JSON.parse(raw) as string[]
    return Array.isArray(ids) && ids.includes(professionalId)
  } catch {
    return false
  }
}

function ThankYouContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const professionalId = searchParams.get('professionalId')
  const returnUrl = searchParams.get('returnUrl')

  const professional = professionalId ? getProfessionalById(professionalId) : undefined

  if (!professional) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="card p-8">
            <h1 className="text-2xl font-display font-bold text-neutral-900 mb-2">
              Pagamento completato
            </h1>
            <p className="text-neutral-600 mb-6">Non riesco a recuperare il professionista.</p>
            <Link href="/cerca" className="btn-primary w-full inline-flex justify-center">
              Torna alla ricerca
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const unlocked = hasUnlockedContact(professional.id)

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary-100 mx-auto mb-6">
            <CheckCircle2 size={40} className="text-secondary-600" />
          </div>

          <h1 className="text-3xl font-display font-bold text-neutral-900 text-center mb-2">
            Grazie! Prenotazione confermata
          </h1>
          <p className="text-neutral-600 text-center mb-8">
            Ecco i contatti di <span className="font-semibold text-neutral-900">{professional.name}</span>.
          </p>

          {!unlocked ? (
            <div className="p-4 rounded-2xl bg-golden/15 border border-golden/30 text-coal mb-6">
              <p className="font-semibold">I contatti non risultano sbloccati.</p>
              <p className="text-sm text-coal/80">Se hai appena pagato, ricarica la pagina o torna al profilo.</p>
            </div>
          ) : null}

          <div className="space-y-3">
            <a
              href={`tel:${professional.phone}`}
              className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-secondary-300 transition-colors"
            >
              <Phone size={20} className="text-secondary-600" />
              <div className="text-left">
                <p className="text-sm text-neutral-500">Telefono</p>
                <p className="font-semibold text-neutral-900">{professional.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${professional.email}`}
              className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-accent-300 transition-colors"
            >
              <Mail size={20} className="text-accent-600" />
              <div className="text-left">
                <p className="text-sm text-neutral-500">Email</p>
                <p className="font-semibold text-neutral-900 break-all">{professional.email}</p>
              </div>
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="btn-secondary w-full inline-flex items-center justify-center gap-2"
              onClick={() => router.push(returnUrl || `/profilo/${professional.id}`)}
            >
              <ArrowLeft size={18} />
              Torna al profilo
            </button>

            <Link href="/cerca" className="btn-primary w-full inline-flex items-center justify-center gap-2">
              <PawPrint size={18} />
              Continua la ricerca
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <PawPrint size={64} className="text-violet mx-auto mb-4 animate-bounce" strokeWidth={2} />
          <p className="text-violet font-display text-xl">Caricamento...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
