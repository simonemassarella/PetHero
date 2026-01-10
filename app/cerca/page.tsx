'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { professionals, searchProfessionals, ServiceType } from '@/data/professionals'
import CardProfessionista from '@/components/CardProfessionista'
import Filters from '@/components/Filters'

function CercaContent() {
  const searchParams = useSearchParams()
  
  const initialCity = searchParams.get('city') || ''
  const initialService = (searchParams.get('service') as ServiceType) || ''
  const initialQuery = searchParams.get('q') || ''

  const [query, setQuery] = useState(initialQuery)
  const [city, setCity] = useState(initialCity)
  const [service, setService] = useState<ServiceType | ''>(initialService)
  const [results, setResults] = useState(professionals)

  useEffect(() => {
    const filtered = searchProfessionals(query, city || undefined, service || undefined)
    setResults(filtered)
  }, [query, city, service])

  return (
    <div className="min-h-screen bg-serenade">
      {/* Header */}
      <div className="bg-violet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-golden font-display uppercase tracking-wider text-sm mb-2">Trova il Tuo Professionista</p>
          <h1 className="text-4xl font-display uppercase text-serenade mb-3">
            Cerca Professionisti
          </h1>
          <p className="text-serenade/80 text-lg">
            Trova dog sitter, pensioni, educatori e centri cinofili nella provincia di Latina
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="mb-10">
          <Filters
            onSearch={setQuery}
            onCityChange={setCity}
            onServiceChange={setService}
            initialCity={initialCity}
            initialService={initialService}
          />
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-coal">
            <span className="font-bold text-violet">{results.length}</span> professionisti trovati
            {city && <span> a <span className="font-semibold text-coal-dark">{city}</span></span>}
            {service && <span> per <span className="font-semibold text-coal-dark">{service.replace('_', ' ')}</span></span>}
          </p>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map(professional => (
              <CardProfessionista 
                key={professional.id} 
                professional={professional}
                showContact
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="heading-3 mb-3">
              Nessun risultato trovato
            </h3>
            <p className="text-coal-light mb-8 text-lg">
              Prova a modificare i filtri di ricerca o cerca in un&apos;altra città
            </p>
            <button
              onClick={() => {
                setQuery('')
                setCity('')
                setService('')
              }}
              className="btn-primary"
            >
              Cancella Filtri
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CercaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-serenade flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🐾</div>
          <p className="text-violet font-display text-xl">Caricamento...</p>
        </div>
      </div>
    }>
      <CercaContent />
    </Suspense>
  )
}
