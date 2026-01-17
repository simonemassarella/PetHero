'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function TerminiPage() {
  return (
    <div className="min-h-screen bg-serenade">
      {/* Header */}
      <div className="bg-violet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-serenade/70 hover:text-serenade transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Torna alla Home
          </Link>
          <p className="text-golden font-display uppercase tracking-widest text-sm mb-4">Legale</p>
          <h1 className="text-4xl md:text-5xl font-display uppercase text-serenade mb-4">
            Termini e Condizioni
          </h1>
          <p className="text-serenade/80">
            Ultimo aggiornamento: Gennaio 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
        <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-10 border-b-4 border-violet/20">
          {/* 1. Premessa */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">1</span>
              Premessa
            </h2>
            <div className="text-coal space-y-3 ml-13">
              <p>
                PetLife è una piattaforma digitale che facilita l&apos;incontro tra proprietari di cani e professionisti (Dog Sitter, Pensioni, Educatori Cinofili).
              </p>
              <p>
                La piattaforma non fornisce direttamente i servizi sugli animali e non è responsabile per danni, incidenti o malattie dell&apos;animale.
              </p>
            </div>
          </section>

          {/* 2. Registrazione */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">2</span>
              Registrazione
            </h2>
            <ul className="text-coal space-y-3 ml-13 list-disc list-inside">
              <li>L&apos;utente (cliente o professionista) deve fornire informazioni vere e complete.</li>
              <li>È obbligatorio accettare questi Termini e Condizioni al momento della registrazione.</li>
            </ul>
          </section>

          {/* 3. Responsabilità dei Professionisti */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">3</span>
              Responsabilità dei Professionisti
            </h2>
            <ul className="text-coal space-y-3 ml-13 list-disc list-inside">
              <li>Tutti i professionisti sono responsabili della cura degli animali affidati.</li>
              <li>Devono garantire esperienza, competenza e attenzione durante il servizio.</li>
              <li>PetLife non è responsabile per incidenti, danni a terzi o malattie dell&apos;animale.</li>
              <li>È consigliata una polizza assicurativa RC per animali o responsabilità civile professionale.</li>
            </ul>
          </section>

          {/* 4. Responsabilità dei Clienti */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">4</span>
              Responsabilità dei Clienti
            </h2>
            <ul className="text-coal space-y-3 ml-13 list-disc list-inside">
              <li>Il cliente accetta che PetLife è solo intermediario.</li>
              <li>Deve fornire informazioni complete sul cane (salute, comportamenti, allergie).</li>
              <li>È responsabile di eventuali informazioni errate o omissioni che possano causare problemi durante il servizio.</li>
            </ul>
          </section>

          {/* 5. Pagamenti */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">5</span>
              Pagamenti
            </h2>
            <ul className="text-coal space-y-3 ml-13 list-disc list-inside">
              <li>Tutti i pagamenti passano tramite piattaforma con sistema sicuro di split payment (es. Stripe Connect).</li>
              <li><strong className="text-coal-dark">Fee PetLife</strong> → trattenuta automatica (es. 3€ per lead o abbonamento)</li>
              <li><strong className="text-coal-dark">Saldo netto</strong> → trasferito direttamente al professionista</li>
              <li>PetLife non è responsabile di ritardi nei pagamenti, ma garantisce trasparenza nella gestione.</li>
            </ul>
          </section>

          {/* 6. Limitazioni */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">6</span>
              Limitazioni
            </h2>
            <ul className="text-coal space-y-3 ml-13 list-disc list-inside">
              <li>PetLife non è responsabile per danni diretti o indiretti, perdita di animali o malattie.</li>
              <li>La piattaforma non sostituisce servizi veterinari o di emergenza.</li>
              <li>Tutti i servizi vengono svolti sotto responsabilità del professionista.</li>
            </ul>
          </section>

          {/* 7. Controlli */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">7</span>
              Controlli
            </h2>
            <ul className="text-coal space-y-3 ml-13 list-disc list-inside">
              <li>PetLife verifica l&apos;identità e le referenze dei professionisti.</li>
              <li>Non garantisce l&apos;assenza di incidenti o problemi durante il servizio.</li>
              <li>È responsabilità del cliente leggere profili, recensioni e dettagli dei servizi.</li>
            </ul>
          </section>

          {/* 8. Accettazione Termini */}
          <section>
            <h2 className="text-xl font-display uppercase text-coal-dark mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-violet/10 text-violet rounded-xl flex items-center justify-center text-sm font-bold">8</span>
              Accettazione Termini
            </h2>
            <div className="text-coal space-y-3 ml-13">
              <p>
                Registrandosi o utilizzando la piattaforma, clienti e professionisti accettano questi Termini e Condizioni.
              </p>
              <p>
                PetLife si riserva il diritto di aggiornare i termini e notificherà gli utenti tramite email o messaggio in-app.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-coal/10">
            <p className="text-coal-light text-center">
              Per domande sui Termini e Condizioni, contattaci a{' '}
              <a href="mailto:legal@petlife.it" className="text-violet hover:text-violet-dark">
                legal@petlife.it
              </a>
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          <Link href="/privacy" className="text-violet hover:text-violet-dark font-semibold inline-flex items-center gap-1">
            Privacy Policy <ArrowRight size={14} />
          </Link>
          <Link href="/cookie" className="text-violet hover:text-violet-dark font-semibold inline-flex items-center gap-1">
            Cookie Policy <ArrowRight size={14} />
          </Link>
          <Link href="/faq" className="text-violet hover:text-violet-dark font-semibold inline-flex items-center gap-1">
            FAQ <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
