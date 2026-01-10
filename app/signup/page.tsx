'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff, User, Phone, MapPin, UserPlus } from 'lucide-react'
import { cities } from '@/data/professionals'

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    password: '',
    confirmPassword: '',
    role: roleParam === 'professional' ? 'professional' : 'dog_owner',
    acceptTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Le password non coincidono')
      return
    }

    if (!formData.acceptTerms) {
      setError('Devi accettare i termini e le condizioni')
      return
    }

    setLoading(true)

    // Simula registrazione
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In un'app reale, salveresti l'utente nel database
    const newUser = {
      id: `u${Date.now()}`,
      ...formData,
      createdAt: new Date().toISOString(),
    }
    
    localStorage.setItem('user', JSON.stringify(newUser))
    
    if (formData.role === 'professional') {
      router.push('/dashboard?welcome=true')
    } else {
      router.push('/?welcome=true')
    }
    
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-4xl">🐕</span>
            <span className="font-display font-bold text-2xl text-neutral-900">PetHero</span>
          </Link>
          <h1 className="mt-6 text-2xl font-display font-bold text-neutral-900">
            Crea il tuo Account
          </h1>
          <p className="mt-2 text-neutral-600">
            {formData.role === 'professional' 
              ? 'Registrati come professionista e raggiungi nuovi clienti'
              : 'Registrati per trovare i migliori professionisti per il tuo cane'
            }
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, role: 'dog_owner' }))}
            className={`flex-1 p-4 rounded-xl border-2 transition-all ${
              formData.role === 'dog_owner'
                ? 'border-primary-500 bg-primary-50'
                : 'border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <span className="text-2xl block mb-2">🐕</span>
            <span className={`font-medium ${formData.role === 'dog_owner' ? 'text-primary-700' : 'text-neutral-700'}`}>
              Proprietario
            </span>
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, role: 'professional' }))}
            className={`flex-1 p-4 rounded-xl border-2 transition-all ${
              formData.role === 'professional'
                ? 'border-primary-500 bg-primary-50'
                : 'border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <span className="text-2xl block mb-2">👨‍💼</span>
            <span className={`font-medium ${formData.role === 'professional' ? 'text-primary-700' : 'text-neutral-700'}`}>
              Professionista
            </span>
          </button>
        </div>

        {/* Signup Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                Nome Completo *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field pl-12"
                  placeholder="Mario Rossi"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field pl-12"
                  placeholder="la.tua@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Telefono
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field pl-12"
                    placeholder="+39 333 1234567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-2">
                  Città *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input-field pl-12"
                  >
                    <option value="">Seleziona città</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="input-field pl-12 pr-12"
                  placeholder="Minimo 8 caratteri"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                Conferma Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="input-field pl-12"
                  placeholder="Ripeti la password"
                />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
              />
              <label htmlFor="acceptTerms" className="text-sm text-neutral-600">
                Accetto i{' '}
                <Link href="/termini" className="text-primary-500 hover:underline">Termini di Servizio</Link>
                {' '}e la{' '}
                <Link href="/privacy" className="text-primary-500 hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Registrazione in corso...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <UserPlus size={18} />
                  Crea Account
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-neutral-600">
          Hai già un account?{' '}
          <Link href="/login" className="text-primary-500 hover:text-primary-600 font-medium">
            Accedi
          </Link>
        </p>
      </div>
    </div>
  )
}
