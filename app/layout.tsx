import type { Metadata } from 'next'
import { Inter, Passion_One } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const passionOne = Passion_One({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-passion',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PetLife - Trova il Professionista Perfetto per il Tuo Pet',
  description: 'Connettiti con pet sitter, pensioni, toelettatori e veterinari di fiducia nel Lazio. Roma, Latina, Frosinone, Rieti, Viterbo.',
  keywords: 'pet sitter, pensione animali, toelettatura, veterinario, Lazio, Roma, Latina',
  openGraph: {
    title: 'PetLife - Trova il Professionista Perfetto per il Tuo Pet',
    description: 'La piattaforma che connette proprietari di animali con professionisti locali di fiducia.',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${passionOne.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-serenade">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
