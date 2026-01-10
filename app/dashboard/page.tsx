'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  User, Settings, CreditCard, BarChart3, MessageSquare, 
  Calendar, Edit, Camera, Plus, LogOut, Bell, ChevronRight
} from 'lucide-react'
import DashboardStats, { RecentContacts } from '@/components/DashboardStats'
import { professionals } from '@/data/professionals'
import { subscriptionPlans, getSubscriptionByProfessionalId } from '@/data/subscriptions'
import { formatPrice } from '@/lib/utils'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  
  // Mock: usa il primo professionista come utente loggato
  const professional = professionals[0]
  const subscription = getSubscriptionByProfessionalId(professional.id)
  const currentPlan = subscriptionPlans.find(p => p.id === subscription?.planId)

  const tabs = [
    { id: 'overview', label: 'Panoramica', icon: BarChart3 },
    { id: 'profile', label: 'Profilo', icon: User },
    { id: 'contacts', label: 'Contatti', icon: MessageSquare },
    { id: 'calendar', label: 'Calendario', icon: Calendar },
    { id: 'subscription', label: 'Abbonamento', icon: CreditCard },
    { id: 'settings', label: 'Impostazioni', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={professional.avatar}
                  alt={professional.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold text-neutral-900">{professional.name}</h1>
                <p className="text-sm text-neutral-500">{professional.city}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
              </button>
              <Link
                href={`/profilo/${professional.id}`}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                Vedi Profilo Pubblico
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="card p-2 space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
              <hr className="my-2 border-neutral-100" />
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-600 hover:bg-red-50 transition-colors">
                <LogOut size={20} />
                <span className="font-medium">Esci</span>
              </button>
            </nav>

            {/* Current Plan Card */}
            {currentPlan && (
              <div className="card p-4 mt-4">
                <p className="text-sm text-neutral-500 mb-1">Piano attuale</p>
                <p className="font-semibold text-neutral-900">{currentPlan.name}</p>
                <p className="text-primary-600 font-bold">{formatPrice(currentPlan.price)}/mese</p>
                <Link
                  href="/checkout"
                  className="mt-3 block text-center text-sm text-primary-500 hover:text-primary-600 font-medium"
                >
                  Upgrade Piano →
                </Link>
              </div>
            )}
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <DashboardStats />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <RecentContacts />
                  
                  {/* Quick Actions */}
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Azioni Rapide</h3>
                    <div className="space-y-3">
                      <Link
                        href="/dashboard?tab=profile"
                        className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                          <Edit size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">Modifica Profilo</p>
                          <p className="text-sm text-neutral-500">Aggiorna le tue informazioni</p>
                        </div>
                      </Link>
                      <Link
                        href="/dashboard?tab=profile"
                        className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <div className="p-2 bg-secondary-100 rounded-lg text-secondary-600">
                          <Camera size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">Aggiungi Foto</p>
                          <p className="text-sm text-neutral-500">Carica nuove immagini</p>
                        </div>
                      </Link>
                      <Link
                        href="/dashboard?tab=profile"
                        className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <div className="p-2 bg-accent-100 rounded-lg text-accent-600">
                          <Plus size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">Nuovo Servizio</p>
                          <p className="text-sm text-neutral-500">Aggiungi un servizio</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-6">Modifica Profilo</h2>
                <form className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={professional.avatar}
                        alt={professional.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button type="button" className="btn-secondary">
                      Cambia Foto
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Nome</label>
                      <input type="text" defaultValue={professional.name} className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                      <input type="email" defaultValue={professional.email} className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Telefono</label>
                      <input type="tel" defaultValue={professional.phone} className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Città</label>
                      <input type="text" defaultValue={professional.city} className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Bio</label>
                    <textarea
                      rows={4}
                      defaultValue={professional.bio}
                      className="input-field resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <button type="button" className="btn-secondary">Annulla</button>
                    <button type="submit" className="btn-primary">Salva Modifiche</button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="space-y-6">
                <div className="card p-6">
                  <h2 className="text-xl font-semibold text-neutral-900 mb-4">Il Tuo Abbonamento</h2>
                  {currentPlan && (
                    <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-neutral-900">{currentPlan.name}</p>
                        <p className="text-sm text-neutral-600">Rinnovo: 1 Febbraio 2024</p>
                      </div>
                      <p className="text-2xl font-bold text-primary-600">{formatPrice(currentPlan.price)}/mese</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {subscriptionPlans.filter(p => p.id !== 'free').map(plan => (
                    <div
                      key={plan.id}
                      className={`card p-6 ${plan.highlighted ? 'ring-2 ring-primary-500' : ''}`}
                    >
                      {plan.highlighted && (
                        <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-4">
                          Consigliato
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-neutral-900">{plan.name}</h3>
                      <p className="text-3xl font-bold text-primary-600 my-2">
                        {formatPrice(plan.price)}
                        <span className="text-sm font-normal text-neutral-500">/mese</span>
                      </p>
                      <ul className="space-y-2 my-4">
                        {plan.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                            <span className="text-secondary-500">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/checkout?plan=${plan.id}`}
                        className={`block text-center py-2 rounded-lg font-medium transition-colors ${
                          currentPlan?.id === plan.id
                            ? 'bg-neutral-100 text-neutral-500 cursor-default'
                            : 'btn-primary'
                        }`}
                      >
                        {currentPlan?.id === plan.id ? 'Piano Attuale' : 'Seleziona'}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'contacts' || activeTab === 'calendar' || activeTab === 'settings') && (
              <div className="card p-12 text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Sezione in Costruzione
                </h2>
                <p className="text-neutral-600">
                  Questa funzionalità sarà disponibile presto!
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
