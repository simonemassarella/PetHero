'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Search } from 'lucide-react'
import { serviceTypeLabels, type ServiceType } from '@/data/professionals'

export default function HeroSearch() {
  const router = useRouter()
  const [service, setService] = useState<ServiceType | ''>('')
  const [city, setCity] = useState('')

  const serviceOptions = useMemo(() => {
    return Object.entries(serviceTypeLabels) as Array<[ServiceType, string]>
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (service) params.set('service', service)
    if (city.trim()) params.set('city', city.trim())

    const qs = params.toString()
    router.push(qs ? `/cerca?${qs}` : '/cerca')
  }

  const serviceSelectClassName = `w-full bg-transparent outline-none text-sm font-medium appearance-none ${
    service ? 'text-coal' : 'text-coal/60'
  }`

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-xl border-b-4 border-violet/20"
    >
      <div className="grid grid-cols-3 gap-3">
        <label className="flex items-center gap-2 bg-white rounded-2xl px-[17px] py-[13px] border border-violet/10">
          <Search size={18} className="text-violet" />
          <select
            value={service}
            onChange={(e) => setService(e.target.value as ServiceType | '')}
            className={serviceSelectClassName}
          >
            <option value="">Cosa cerchi?</option>
            {serviceOptions.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 bg-white rounded-2xl px-[17px] py-[13px] border border-violet/10">
          <MapPin size={18} className="text-violet" />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Dove?"
            className="w-full bg-transparent outline-none text-coal text-sm font-medium placeholder:text-coal/60"
          />
        </label>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-golden text-coal px-6 pt-3 pb-4 rounded-2xl font-bold border-b-4 border-violet shadow-md hover:shadow-lg hover:bg-golden-light hover:-translate-y-0.5 transition-all"
        >
          Cerca
          <Search size={18} strokeWidth={2.5} />
        </button>
      </div>
    </form>
  )
}
