'use client'

import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, PawPrint } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-violet">
      {/* CTA Banner */}
      <div className="bg-golden py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-2xl md:text-3xl uppercase text-coal text-center md:text-left">
            Pronto a coccolare il tuo <span className="text-violet">pet</span>?
          </p>
          <Link href="/cerca" className="bg-violet text-serenade px-8 py-3 rounded-full font-bold text-lg hover:bg-violet-dark transition-colors">
            Trova Professionista
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <PawPrint size={36} className="text-golden" strokeWidth={2.5} />
              <span className="font-display text-3xl uppercase">
                <span className="text-serenade">Pet</span><span className="text-golden">Life</span>
              </span>
            </Link>
            <p className="text-serenade/70 mb-8 leading-relaxed text-lg">
              La piattaforma che connette proprietari di cani con i migliori professionisti della provincia di Latina.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-serenade/10 hover:bg-golden text-serenade hover:text-coal rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Facebook size={22} strokeWidth={2} />
              </a>
              <a href="#" className="w-12 h-12 bg-serenade/10 hover:bg-golden text-serenade hover:text-coal rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Instagram size={22} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl uppercase text-golden mb-8">Navigazione</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-serenade/80 hover:text-golden transition-colors text-lg">Home</Link></li>
              <li><Link href="/cerca" className="text-serenade/80 hover:text-golden transition-colors text-lg">Cerca</Link></li>
              <li><Link href="/professionisti" className="text-serenade/80 hover:text-golden transition-colors text-lg">Per Professionisti</Link></li>
              <li><Link href="/faq" className="text-serenade/80 hover:text-golden transition-colors text-lg">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-xl uppercase text-golden mb-8">Legale</h4>
            <ul className="space-y-4">
              <li><Link href="/termini" className="text-serenade/80 hover:text-golden transition-colors text-lg">Termini e Condizioni</Link></li>
              <li><Link href="/privacy" className="text-serenade/80 hover:text-golden transition-colors text-lg">Privacy Policy</Link></li>
              <li><Link href="/cookie" className="text-serenade/80 hover:text-golden transition-colors text-lg">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl uppercase text-golden mb-8">Contatti</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={22} strokeWidth={2} className="text-golden mt-0.5 flex-shrink-0" />
                <span className="text-serenade/80 text-lg">Provincia di Latina, Lazio</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={22} strokeWidth={2} className="text-golden flex-shrink-0" />
                <a href="tel:+390771000000" className="text-serenade/80 hover:text-golden transition-colors text-lg">
                  +39 0771 000 000
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={22} strokeWidth={2} className="text-golden flex-shrink-0" />
                <a href="mailto:info@pethero.it" className="text-serenade/80 hover:text-golden transition-colors text-lg">
                  info@pethero.it
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={22} strokeWidth={2} className="text-golden mt-0.5 flex-shrink-0" />
                <div className="text-serenade/80 text-lg">
                  <p>Lun - Ven: 9:00 - 18:00</p>
                  <p>Sab: 10:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-serenade/20">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-display text-2xl uppercase text-serenade mb-6">Iscriviti alla Newsletter</h4>
            <p className="text-serenade/70 mb-6">Ricevi aggiornamenti sui migliori professionisti della tua zona</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="nome@email.com" 
                className="flex-1 px-5 py-4 bg-serenade/10 border border-serenade/20 rounded-xl text-serenade placeholder-serenade/50 focus:outline-none focus:border-golden text-lg"
              />
              <button className="px-8 py-4 bg-golden text-coal font-bold rounded-xl hover:bg-golden-light transition-all duration-300 hover:-translate-y-0.5 text-lg">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-serenade/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-serenade/50 text-base">
            © {new Date().getFullYear()} PetHero. Tutti i diritti riservati.
          </p>
          <p className="text-serenade/50 text-base">
            Made with 💛 in Gaeta
          </p>
        </div>
      </div>
    </footer>
  )
}
