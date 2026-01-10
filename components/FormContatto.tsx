'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Professional } from '@/data/professionals'

interface FormContattoProps {
  professional: Professional
  onSubmit?: (data: ContactFormData) => void
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  serviceId?: string
  date?: string
}

export default function FormContatto({ professional, onSubmit }: FormContattoProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceId: '',
    date: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simula invio (mock)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock success
      setStatus('success')
      if (onSubmit) {
        onSubmit(formData)
      }
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          serviceId: '',
          date: '',
        })
        setStatus('idle')
      }, 3000)
    } catch {
      setStatus('error')
      setErrorMessage('Si è verificato un errore. Riprova più tardi.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (status === 'success') {
    return (
      <div className="bg-secondary-50 rounded-2xl p-8 text-center animate-fade-in">
        <CheckCircle className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Messaggio Inviato!
        </h3>
        <p className="text-neutral-600">
          {professional.name} riceverà il tuo messaggio e ti contatterà al più presto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-900 mb-4">
        Contatta {professional.name}
      </h3>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
          <AlertCircle size={18} />
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
            Nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Il tuo nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="la.tua@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+39 333 1234567"
          />
        </div>

        <div>
          <label htmlFor="serviceId" className="block text-sm font-medium text-neutral-700 mb-1">
            Servizio di interesse
          </label>
          <select
            id="serviceId"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Seleziona un servizio</option>
            {professional.services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - €{service.price}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
          Data preferita
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input-field"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="input-field resize-none"
          placeholder="Descrivi le tue esigenze..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Invio in corso...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send size={18} />
            Invia Messaggio
          </span>
        )}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        Inviando questo messaggio accetti la nostra{' '}
        <a href="/privacy" className="text-primary-500 hover:underline">Privacy Policy</a>
      </p>
    </form>
  )
}
