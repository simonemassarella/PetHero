'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        {/* Navbar Container - Figma Style */}
        <div className="bg-serenade rounded-b-[30px] border-b-4 border-l-2 border-r-2 border-violet px-4 py-2">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              <span className="font-display text-2xl uppercase text-violet tracking-tight">
                PetHero
              </span>
            </Link>

            {/* Desktop Navigation - Figma Style */}
            <div className="hidden md:flex items-center gap-5">
              <Link href="/" className="nav-link-active">Home</Link>
              <Link href="/cerca" className="nav-link">Cerca</Link>
              <Link href="/professionisti" className="nav-link">Servizi</Link>
              <Link href="/faq" className="nav-link">FAQ</Link>
              <Link href="/login" className="nav-link">Accedi</Link>
            </div>

            {/* CTA Button - Figma Style */}
            <div className="hidden md:flex items-center">
              <Link 
                href="tel:+390771000000" 
                className="flex items-center gap-2 bg-violet text-serenade px-5 py-2.5 rounded-full font-display text-lg uppercase tracking-tight hover:bg-violet-light transition-colors"
              >
                <Phone size={18} />
                Contattaci
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-violet hover:text-golden transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-6 border-t border-violet/20 mt-2 animate-fade-in">
              <div className="flex flex-col gap-2">
                <Link href="/" className="nav-link-active px-4 py-3" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/cerca" className="nav-link px-4 py-3" onClick={() => setIsOpen(false)}>Cerca</Link>
                <Link href="/professionisti" className="nav-link px-4 py-3" onClick={() => setIsOpen(false)}>Servizi</Link>
                <Link href="/faq" className="nav-link px-4 py-3" onClick={() => setIsOpen(false)}>FAQ</Link>
                <Link href="/login" className="nav-link px-4 py-3" onClick={() => setIsOpen(false)}>Accedi</Link>
                <Link 
                  href="tel:+390771000000" 
                  className="mt-4 mx-4 flex items-center justify-center gap-2 bg-violet text-serenade px-5 py-3 rounded-full font-display text-lg uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  Contattaci
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
