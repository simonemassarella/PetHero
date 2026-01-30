'use client'

import { useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Mail, Phone } from 'lucide-react'
import type { Professional } from '@/data/professionals'
import FormContatto from '@/components/FormContatto'

type Props = {
  professional: Professional
}

const UNLOCKED_KEY = 'petlife_unlocked_contacts'
const UNLOCK_VERSION_KEY = 'petlife_unlocked_contacts_v'

function getLoggedUser(): { id?: string; role?: string } | null {
  try {
    const raw = localStorage.getItem('user')
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

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

export default function ProfileContactGate({ professional }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const [mode, setMode] = useState<'idle' | 'contact'>('idle')
  const [selectedServiceId, setSelectedServiceId] = useState<string>(professional.services[0]?.id ?? '')

  const user = useMemo(() => getLoggedUser(), [])
  const isLoggedIn = !!user

  const unlocked = useMemo(() => {
    return hasUnlockedContact(professional.id)
  }, [professional.id])

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setMode('contact')}
            className="btn-primary w-full"
          >
            Prenota / Contatta
          </button>
        </div>

        {mode === 'contact' && (
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-700">
                Seleziona il servizio
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="input-field"
              >
                {professional.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <FormContatto
              professional={professional}
              hideSubmit
              hideServiceSelect
              footerAction={
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={() => {
                    const params = new URLSearchParams()
                    params.set('professionalId', professional.id)
                    params.set('serviceId', selectedServiceId)
                    params.set('returnUrl', pathname)
                    router.push(`/checkout?${params.toString()}`)
                  }}
                  disabled={!selectedServiceId}
                >
                  Procedi al pagamento
                </button>
              }
            />

            <div className="pt-6 border-t border-neutral-100">
              <p className="text-sm text-neutral-500 mb-3">
                {unlocked
                  ? 'Contatti diretti disponibili:'
                  : 'I contatti del professionista saranno visibili dopo il pagamento.'}
              </p>

              <div className="space-y-2">
                {unlocked && (
                  <a
                    href={`tel:${professional.phone}`}
                    className="flex items-center gap-3 p-3 bg-secondary-50 text-secondary-700 rounded-xl hover:bg-secondary-100 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-medium">{professional.phone}</span>
                  </a>
                )}

                {unlocked && (
                  <a
                    href={`mailto:${professional.email}`}
                    className="flex items-center gap-3 p-3 bg-accent-50 text-accent-700 rounded-xl hover:bg-accent-100 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="font-medium text-sm">{professional.email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
