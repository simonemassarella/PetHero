import Link from 'next/link'
import Image from 'next/image'
import { Check, Star, Users, TrendingUp, Shield, Zap, Award, ArrowRight } from 'lucide-react'
import { subscriptionPlans } from '@/data/subscriptions'
import { formatPrice } from '@/lib/utils'

export default function ProfessionistiPage() {
  const benefits = [
    { icon: Users, title: 'Raggiungi Nuovi Clienti', description: 'Migliaia di proprietari di cani cercano professionisti ogni mese' },
    { icon: TrendingUp, title: 'Fai Crescere il Business', description: 'Aumenta la tua visibilità e le prenotazioni' },
    { icon: Shield, title: 'Profilo Verificato', description: 'Badge di fiducia che aumentano le conversioni' },
    { icon: Zap, title: 'Gestione Semplice', description: 'Dashboard intuitiva per gestire contatti e prenotazioni' },
  ]

  const testimonials = [
    {
      name: 'Maria Rossi',
      role: 'Dog Sitter',
      city: 'Gaeta',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Da quando sono su PetHero ho triplicato i miei clienti. La piattaforma è fantastica!',
      rating: 5,
    },
    {
      name: 'Paolo Esposito',
      role: 'Educatore Cinofilo',
      city: 'Terracina',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      text: 'Finalmente una piattaforma seria per i professionisti del settore. Consigliatissima.',
      rating: 5,
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              Per Professionisti
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Fai Crescere il Tuo Business con PetHero
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Unisciti alla piattaforma leader per professionisti del settore cinofilo nella provincia di Latina. Raggiungi migliaia di proprietari di cani.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup?role=professional" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
                Registrati Gratis
              </Link>
              <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors">
                Vedi i Piani
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Perché Scegliere PetHero?</h2>
            <p className="section-subtitle mx-auto">
              Tutto ciò di cui hai bisogno per far crescere la tua attività
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={28} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Come Funziona</h2>
            <p className="section-subtitle mx-auto">
              Inizia in pochi minuti e raggiungi nuovi clienti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Crea il Profilo', description: 'Registrati gratuitamente e completa il tuo profilo con foto, servizi e prezzi' },
              { step: '2', title: 'Ricevi Contatti', description: 'I proprietari di cani ti troveranno e ti contatteranno direttamente' },
              { step: '3', title: 'Fai Crescere il Business', description: 'Gestisci prenotazioni, ricevi recensioni e aumenta la tua visibilità' },
            ].map(item => (
              <div key={item.step} className="card p-8 text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Piani e Prezzi</h2>
            <p className="section-subtitle mx-auto">
              Scegli il piano più adatto alle tue esigenze
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPlans.map(plan => (
              <div
                key={plan.id}
                className={`card p-6 relative ${plan.highlighted ? 'ring-2 ring-primary-500 scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                      <Award size={14} />
                      Più Popolare
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-neutral-900">
                      {plan.price === 0 ? 'Gratis' : formatPrice(plan.price)}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-neutral-500">/mese</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check size={18} className="text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.price === 0 ? '/signup?role=professional' : `/checkout?plan=${plan.id}`}
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {plan.price === 0 ? 'Inizia Gratis' : 'Scegli Piano'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Cosa Dicono i Professionisti</h2>
            <p className="section-subtitle mx-auto">
              Storie di successo dalla nostra community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role} - {testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Pronto a Far Crescere il Tuo Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Unisciti a centinaia di professionisti che hanno già scelto PetHero. La registrazione è gratuita!
          </p>
          <Link
            href="/signup?role=professional"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-neutral-100 transition-colors text-lg"
          >
            Registrati Ora
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
