'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { professionals, searchProfessionals, ServiceType, serviceTypeLabels, serviceTypeIcons } from '@/data/professionals'
import CardProfessionista from '@/components/CardProfessionista'
import Filters from '@/components/Filters'
import AnimatedSection from '@/components/AnimatedSection'
import { Search, MapPin, Filter, X, PawPrint } from 'lucide-react'

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

  const hasFilters = query || city || service

  return (
    <div className="min-h-screen bg-serenade pt-24">
      {/* Hero Header - Groomer Style */}
      <section className="bg-violet py-16 md:py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <Search size={80} className="absolute top-10 right-10 text-serenade opacity-10 animate-float hidden lg:block" strokeWidth={1.5} />
        <PawPrint size={64} className="absolute bottom-10 left-10 text-serenade opacity-10 animate-float hidden lg:block" style={{ animationDelay: '1s' }} strokeWidth={1.5} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 bg-golden/20 text-golden px-4 py-2 rounded-full text-sm font-medium">
                <Search size={16} />
                Trova il Tuo Professionista
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase text-center leading-tight">
              <span className="text-serenade">CERCA </span>
              <span className="text-golden">PROFESSIONISTI</span>
            </h1>
            
            <p className="text-serenade/80 text-lg md:text-xl text-center mt-6 max-w-2xl mx-auto">
              Pet sitter, pensioni, toelettature, veterinari e molto altro in tutto il Lazio
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Card */}
        <AnimatedSection animation="fade-up" delay={0.1}>
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-10 border-b-4 border-violet">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-violet/10 rounded-full flex items-center justify-center">
                <Filter size={20} className="text-violet" />
              </div>
              <h2 className="font-display text-2xl text-violet uppercase">Filtra Ricerca</h2>
            </div>
            <Filters
              onSearch={setQuery}
              onCityChange={setCity}
              onServiceChange={setService}
              initialCity={initialCity}
              initialService={initialService}
            />
          </div>
        </AnimatedSection>

        {/* Results Header */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-coal text-lg">
                <span className="font-display text-3xl text-violet">{results.length}</span>
                <span className="ml-2">professionisti trovati</span>
                {city && <span className="ml-1">a <span className="font-semibold text-teal">{city}</span></span>}
              </p>
            </div>
            
            {/* Active Filters */}
            {hasFilters && (
              <div className="flex flex-wrap items-center gap-2">
                {service && (
                  <span className="inline-flex items-center gap-2 bg-violet/10 text-violet px-3 py-1.5 rounded-full text-sm">
                    <span>{serviceTypeIcons[service]}</span>
                    {serviceTypeLabels[service]}
                    <button onClick={() => setService('')} className="hover:text-red-500">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {city && (
                  <span className="inline-flex items-center gap-2 bg-teal/10 text-teal px-3 py-1.5 rounded-full text-sm">
                    <MapPin size={14} />
                    {city}
                    <button onClick={() => setCity('')} className="hover:text-red-500">
                      <X size={14} />
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setQuery('')
                    setCity('')
                    setService('')
                  }}
                  className="text-sm text-coal hover:text-violet underline"
                >
                  Cancella tutti
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((professional, index) => (
              <AnimatedSection key={professional.id} animation="fade-up" delay={0.1 * (index % 6)}>
                <CardProfessionista 
                  professional={professional}
                  showContact
                />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection animation="fade-up">
            <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
              <div className="text-8xl mb-6 animate-bounce">🔍</div>
              <h3 className="font-display text-3xl text-violet uppercase mb-4">
                Nessun risultato trovato
              </h3>
              <p className="text-coal text-lg mb-8 max-w-md mx-auto">
                Prova a modificare i filtri di ricerca o cerca in un&apos;altra città del Lazio
              </p>
              <button
                onClick={() => {
                  setQuery('')
                  setCity('')
                  setService('')
                }}
                className="inline-flex items-center gap-2 bg-golden text-coal px-8 py-4 rounded-full font-bold text-lg border-b-4 border-violet hover:bg-golden-light hover:-translate-y-1 transition-all duration-300"
              >
                <X size={20} />
                Cancella Filtri
              </button>
            </div>
          </AnimatedSection>
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
          <PawPrint size={64} className="text-violet mx-auto mb-4 animate-bounce" strokeWidth={2} />
          <p className="text-violet font-display text-xl">Caricamento...</p>
        </div>
      </div>
    }>
      <CercaContent />
    </Suspense>
  )
}
