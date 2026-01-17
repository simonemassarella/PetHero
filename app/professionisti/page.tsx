'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Check, Star, Users, TrendingUp, Shield, Zap, Award, ArrowRight, Briefcase } from 'lucide-react'
import { subscriptionPlans } from '@/data/subscriptions'
import { formatPrice } from '@/lib/utils'
import AnimatedSection from '@/components/AnimatedSection'

export default function ProfessionistiPage() {
  const benefits = [
    { icon: Users, title: 'Raggiungi Nuovi Clienti', description: 'Migliaia di proprietari di animali cercano professionisti ogni mese in tutto il Lazio' },
    { icon: TrendingUp, title: 'Fai Crescere il Business', description: 'Aumenta la tua visibilità e le prenotazioni con il nostro network' },
    { icon: Shield, title: 'Profilo Verificato', description: 'Badge di fiducia che aumentano le conversioni e la credibilità' },
    { icon: Zap, title: 'Gestione Semplice', description: 'Dashboard intuitiva per gestire contatti, prenotazioni e recensioni' },
  ]

  const testimonials = [
    {
      name: 'Maria Rossi',
      role: 'Pet Sitter',
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
    <div className="min-h-screen bg-serenade pt-24">
      {/* Hero - Groomer Style */}
      <section className="bg-violet py-16 md:py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float hidden lg:block">💼</div>
        <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>🐾</div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-golden/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-golden/20 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Briefcase size={16} />
                Per Professionisti
              </span>
              
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase leading-tight mb-6">
                <span className="text-serenade">FAI CRESCERE IL TUO </span>
                <span className="text-golden">BUSINESS</span>
              </h1>
              
              <p className="text-serenade/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Unisciti alla piattaforma leader per professionisti del settore pet nel Lazio. Raggiungi migliaia di proprietari di animali.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/signup?role=professional" 
                  className="inline-flex items-center justify-center gap-2 bg-golden text-coal px-8 py-4 rounded-full font-bold text-lg border-b-4 border-coal/20 hover:bg-golden-light hover:-translate-y-1 transition-all duration-300"
                >
                  Registrati Gratis
                  <ArrowRight size={20} />
                </Link>
                <a 
                  href="#pricing" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-serenade/20 text-serenade font-semibold rounded-full hover:bg-serenade/30 transition-colors border-2 border-serenade/30"
                >
                  Vedi i Piani
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits - Groomer Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-violet/10 text-violet px-4 py-2 rounded-full text-sm font-medium mb-4">
                ✨ Vantaggi
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase">
                <span className="text-violet">PERCHÉ SCEGLIERE </span>
                <span className="text-teal">PETHERO?</span>
              </h2>
              <p className="text-coal text-lg mt-4 max-w-2xl mx-auto">
                Tutto ciò di cui hai bisogno per far crescere la tua attività nel settore pet
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.1}>
                <div className="bg-serenade rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-violet">
                  <div className="w-16 h-16 bg-violet/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon size={28} className="text-violet" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-xl text-violet uppercase mb-3">{benefit.title}</h3>
                  <p className="text-coal">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Groomer Style */}
      <section className="py-20 bg-serenade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚀 Come Funziona
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase">
                <span className="text-violet">INIZIA IN </span>
                <span className="text-golden">3 PASSI</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Crea il Profilo', description: 'Registrati gratuitamente e completa il tuo profilo con foto, servizi e prezzi', icon: '📝' },
              { step: '2', title: 'Ricevi Contatti', description: 'I proprietari di animali ti troveranno e ti contatteranno direttamente', icon: '📱' },
              { step: '3', title: 'Fai Crescere', description: 'Gestisci prenotazioni, ricevi recensioni e aumenta la tua visibilità', icon: '📈' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={i * 0.15}>
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-violet text-serenade rounded-full flex items-center justify-center font-display text-xl">
                    {item.step}
                  </div>
                  <div className="text-5xl mb-6 mt-4">{item.icon}</div>
                  <h3 className="font-display text-2xl text-violet uppercase mb-3">{item.title}</h3>
                  <p className="text-coal">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Groomer Style */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-4">
                💰 Piani
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase">
                <span className="text-violet">SCEGLI IL TUO </span>
                <span className="text-teal">PIANO</span>
              </h2>
              <p className="text-coal text-lg mt-4 max-w-2xl mx-auto">
                Piani flessibili per ogni esigenza, dalla registrazione gratuita ai piani enterprise
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPlans.map((plan, i) => (
              <AnimatedSection key={plan.id} animation="fade-up" delay={i * 0.1}>
                <div
                  className={`bg-serenade rounded-3xl p-6 relative transition-all duration-300 hover:shadow-xl ${
                    plan.highlighted ? 'ring-4 ring-golden scale-105 shadow-xl' : 'hover:-translate-y-2'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-4 py-1 bg-golden text-coal text-sm font-bold rounded-full">
                        <Award size={14} />
                        Più Popolare
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6 pt-2">
                    <h3 className="font-display text-2xl text-violet uppercase">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-display text-coal">
                        {plan.price === 0 ? 'Gratis' : formatPrice(plan.price)}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-coal/60">/mese</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-coal">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.price === 0 ? '/signup?role=professional' : `/checkout?plan=${plan.id}`}
                    className={`block text-center py-3 rounded-full font-bold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-golden text-coal border-b-4 border-violet hover:bg-golden-light hover:-translate-y-1'
                        : 'bg-violet text-serenade hover:bg-violet-light'
                    }`}
                  >
                    {plan.price === 0 ? 'Inizia Gratis' : 'Scegli Piano'}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Groomer Style */}
      <section className="py-20 bg-serenade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-violet/10 text-violet px-4 py-2 rounded-full text-sm font-medium mb-4">
                ⭐ Testimonianze
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase">
                <span className="text-violet">COSA DICONO I </span>
                <span className="text-golden">PROFESSIONISTI</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.15}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-1 text-golden mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-coal text-lg mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-violet">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-display text-lg text-violet">{testimonial.name}</p>
                      <p className="text-coal/60">{testimonial.role} - {testimonial.city}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Groomer Style */}
      <section className="py-20 bg-violet relative overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">🚀</div>
        <div className="absolute bottom-10 right-10 text-5xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🐾</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mb-6">
              <span className="text-serenade">PRONTO A </span>
              <span className="text-golden">INIZIARE?</span>
            </h2>
            <p className="text-serenade/80 text-xl mb-10 max-w-2xl mx-auto">
              Unisciti a centinaia di professionisti che hanno già scelto PetHero nel Lazio. La registrazione è gratuita!
            </p>
            <Link
              href="/signup?role=professional"
              className="inline-flex items-center gap-3 bg-golden text-coal px-10 py-5 rounded-full font-bold text-xl border-b-4 border-coal/20 hover:bg-golden-light hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              Registrati Ora
              <ArrowRight size={24} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
