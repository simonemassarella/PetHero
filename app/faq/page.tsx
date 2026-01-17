'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, User, Briefcase, Mail, ArrowRight, HelpCircle, PawPrint } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

interface FAQItem {
  question: string
  answer: string
}

const clientFAQs: FAQItem[] = [
  {
    question: 'PetLife è responsabile per danni al mio animale?',
    answer: 'No, PetLife è solo intermediario. La responsabilità durante il servizio è del professionista.',
  },
  {
    question: 'Come vengono gestiti i pagamenti?',
    answer: 'Il pagamento avviene tramite PetLife. La piattaforma trattiene la fee (es. 3€) e il resto va al professionista tramite pagamento sicuro.',
  },
  {
    question: 'Come scelgo un Dog Sitter o una Pensione?',
    answer: 'Puoi vedere profili, recensioni, servizi offerti, badge di verifica e contattare il professionista tramite la piattaforma.',
  },
  {
    question: 'Posso cancellare o modificare una prenotazione?',
    answer: 'Sì, le modalità di cancellazione sono indicate sul profilo del professionista e nella conferma prenotazione. Alcuni servizi possono avere policy diverse.',
  },
  {
    question: 'I professionisti hanno assicurazione?',
    answer: 'È consigliato. Verifica nel profilo se hanno polizza RC per animali o assicurazione professionale.',
  },
]

const professionalFAQs: FAQItem[] = [
  {
    question: 'Come ricevo il pagamento?',
    answer: 'Tramite la piattaforma. La fee viene trattenuta automaticamente e il saldo netto va sul tuo conto collegato.',
  },
  {
    question: 'Devo pagare una fee a PetLife?',
    answer: 'Sì, esiste una fee per lead (es. 3€ per contatto) e/o un abbonamento mensile per apparire sulla piattaforma.',
  },
  {
    question: 'Chi è responsabile se succede qualcosa all\'animale?',
    answer: 'Tu, come professionista, sei responsabile per danni o incidenti durante il servizio. PetLife è solo intermediario.',
  },
  {
    question: 'Come posso diventare un professionista verificato?',
    answer: 'Fornisci documenti, referenze e assicurazione (se disponibile). Avrai un badge "Professionista verificato" sul profilo.',
  },
  {
    question: 'Posso impostare i miei prezzi e disponibilità?',
    answer: 'Sì, puoi gestire prezzi, servizi, giorni disponibili e orari direttamente dal tuo profilo sulla piattaforma.',
  },
]

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-card overflow-hidden border-b-4 border-violet/20"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-serenade transition-colors"
          >
            <span className="font-semibold text-coal-dark pr-4">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-violet transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-5 bg-violet/5 border-t border-violet/10">
              <p className="text-coal leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<'clients' | 'professionals'>('clients')

  return (
    <div className="min-h-screen bg-serenade pt-24">
      {/* Header - Groomer Style */}
      <section className="bg-violet py-16 md:py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <HelpCircle size={80} className="absolute top-10 right-10 text-serenade opacity-10 animate-float hidden lg:block" strokeWidth={1.5} />
        <PawPrint size={64} className="absolute bottom-10 left-10 text-serenade opacity-10 animate-float hidden lg:block" style={{ animationDelay: '1s' }} strokeWidth={1.5} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-golden/20 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle size={16} />
              FAQ
            </span>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase leading-tight mb-6">
              <span className="text-serenade">DOMANDE </span>
              <span className="text-golden">PELOSE</span>
            </h1>
            
            <p className="text-serenade/80 text-lg md:text-xl max-w-2xl mx-auto">
              Trova risposte alle domande più comuni su PetLife, sia per i proprietari di animali che per i professionisti.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setActiveTab('clients')}
            className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-display uppercase transition-all ${
              activeTab === 'clients'
                ? 'bg-violet text-serenade'
                : 'bg-white text-coal hover:bg-serenade shadow-card border-b-4 border-violet/20'
            }`}
          >
            <User size={20} />
            Per i Clienti
          </button>
          <button
            onClick={() => setActiveTab('professionals')}
            className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-display uppercase transition-all ${
              activeTab === 'professionals'
                ? 'bg-violet text-serenade'
                : 'bg-white text-coal hover:bg-serenade shadow-card border-b-4 border-violet/20'
            }`}
          >
            <Briefcase size={20} />
            Per i Professionisti
          </button>
        </div>

        {/* FAQ Content */}
        <div className="mb-16">
          {activeTab === 'clients' ? (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-violet/10 rounded-2xl flex items-center justify-center">
                  <User size={24} className="text-violet" />
                </div>
                <h2 className="heading-3">
                  Domande per i Proprietari di Cani
                </h2>
              </div>
              <FAQAccordion items={clientFAQs} />
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-violet/10 rounded-2xl flex items-center justify-center">
                  <Briefcase size={24} className="text-violet" />
                </div>
                <h2 className="heading-3">
                  Domande per Dog Sitter, Pensioni e Educatori
                </h2>
              </div>
              <FAQAccordion items={professionalFAQs} />
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="bg-violet rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-display uppercase text-serenade mb-3">Non hai trovato la risposta?</h3>
          <p className="text-serenade/80 mb-8 text-lg">
            Contattaci e ti risponderemo il prima possibile.
          </p>
          <a
            href="mailto:supporto@petlife.it"
            className="inline-flex items-center gap-2 px-8 py-4 bg-golden text-coal font-semibold rounded-full hover:bg-golden-light transition-colors"
          >
            <Mail size={18} />
            Contattaci
          </a>
        </div>

        {/* Related Links */}
        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          <Link href="/termini" className="text-violet hover:text-violet-dark font-semibold inline-flex items-center gap-1">
            Termini e Condizioni <ArrowRight size={14} />
          </Link>
          <Link href="/privacy" className="text-violet hover:text-violet-dark font-semibold inline-flex items-center gap-1">
            Privacy Policy <ArrowRight size={14} />
          </Link>
          <Link href="/cookie" className="text-violet hover:text-violet-dark font-semibold inline-flex items-center gap-1">
            Cookie Policy <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
