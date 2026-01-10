'use client'

import { useState } from 'react'
import { Search, MapPin, Filter, X } from 'lucide-react'
import { cities, serviceTypeLabels, ServiceType } from '@/data/professionals'

interface FiltersProps {
  onSearch: (query: string) => void
  onCityChange: (city: string) => void
  onServiceChange: (service: ServiceType | '') => void
  initialCity?: string
  initialService?: ServiceType | ''
}

export default function Filters({ 
  onSearch, 
  onCityChange, 
  onServiceChange,
  initialCity = '',
  initialService = ''
}: FiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState(initialCity)
  const [selectedService, setSelectedService] = useState<ServiceType | ''>(initialService)
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
    onCityChange(city)
  }

  const handleServiceChange = (service: ServiceType | '') => {
    setSelectedService(service)
    onServiceChange(service)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCity('')
    setSelectedService('')
    onSearch('')
    onCityChange('')
    onServiceChange('')
  }

  const hasActiveFilters = searchQuery || selectedCity || selectedService

  return (
    <div className="bg-white rounded-3xl shadow-card p-5 md:p-6 border-b-4 border-violet/20">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-coal-light" size={20} />
          <input
            type="text"
            placeholder="Cerca professionisti, servizi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-12"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className={`p-3 rounded-xl border-2 transition-colors ${
            showFilters || hasActiveFilters
              ? 'bg-violet text-serenade border-violet'
              : 'bg-white text-coal border-coal/20 hover:border-violet hover:text-violet'
          }`}
        >
          <Filter size={20} />
        </button>
        <button type="submit" className="btn-primary">
          Cerca
        </button>
      </form>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-5 pt-5 border-t border-coal/10 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            {/* City Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-coal-dark mb-2">
                <MapPin size={16} className="inline mr-1 text-violet" />
                Città
              </label>
              <select
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="input-field"
              >
                <option value="">Tutte le città</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Service Type Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-coal-dark mb-2">
                <Filter size={16} className="inline mr-1 text-violet" />
                Tipo di Servizio
              </label>
              <select
                value={selectedService}
                onChange={(e) => handleServiceChange(e.target.value as ServiceType | '')}
                className="input-field"
              >
                <option value="">Tutti i servizi</option>
                {(Object.keys(serviceTypeLabels) as ServiceType[]).map(type => (
                  <option key={type} value={type}>{serviceTypeLabels[type]}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="mt-5 flex items-center gap-2 text-sm text-coal-light hover:text-violet transition-colors"
            >
              <X size={16} />
              Cancella filtri
            </button>
          )}
        </div>
      )}

      {/* Active Filters Tags */}
      {hasActiveFilters && !showFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedCity && (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet/10 text-violet rounded-full text-sm font-semibold">
              <MapPin size={14} />
              {selectedCity}
              <button onClick={() => handleCityChange('')} className="ml-1 hover:text-violet-dark">
                <X size={14} />
              </button>
            </span>
          )}
          {selectedService && (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet/10 text-violet rounded-full text-sm font-semibold">
              {serviceTypeLabels[selectedService]}
              <button onClick={() => handleServiceChange('')} className="ml-1 hover:text-violet-dark">
                <X size={14} />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
