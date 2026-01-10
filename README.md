# 🐕 PetHero

**PetHero** è una piattaforma che connette proprietari di cani con professionisti locali: Dog Sitter, Pensioni, Educatori Cinofili e Centri Cinofili nella provincia di Latina (Gaeta, Formia, Terracina, Sperlonga, Fondi).

## 🚀 Quick Start

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Apri http://localhost:3000
```

## 📁 Struttura del Progetto

```
pet-hero/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Layout principale
│   ├── globals.css        # Stili globali + Tailwind
│   ├── cerca/             # Pagina ricerca professionisti
│   ├── profilo/[id]/      # Profilo professionista
│   ├── login/             # Login utenti
│   ├── signup/            # Registrazione utenti
│   ├── dashboard/         # Dashboard professionisti
│   ├── professionisti/    # Landing page professionisti
│   └── checkout/          # Checkout abbonamenti
├── components/            # Componenti React riutilizzabili
│   ├── Navbar.tsx         # Navigazione principale
│   ├── Footer.tsx         # Footer
│   ├── CardProfessionista.tsx  # Card professionista
│   ├── Badge.tsx          # Badge e certificazioni
│   ├── Filters.tsx        # Filtri ricerca
│   ├── FormContatto.tsx   # Form contatto
│   └── DashboardStats.tsx # Statistiche dashboard
├── data/                  # Mock data
│   ├── professionals.ts   # Dati professionisti
│   ├── users.ts           # Dati utenti
│   └── subscriptions.ts   # Piani abbonamento
├── lib/                   # Utility e integrazioni
│   ├── utils.ts           # Funzioni utility
│   ├── stripe.ts          # Mock integrazione Stripe
│   └── sendgrid.ts        # Mock integrazione SendGrid
└── tailwind.config.ts     # Configurazione Tailwind
```

## User Roles

### Dog Owner (Proprietario)
- Cerca professionisti per città e servizio
- Visualizza profili completi con recensioni
- Contatta e prenota servizi
- Salva professionisti preferiti

### Professionista
- Crea e gestisce il proprio profilo
- Aggiunge servizi con prezzi
- Riceve contatti e prenotazioni
- Dashboard con statistiche
- Piani abbonamento per maggiore visibilità

### Admin
- Gestione utenti e professionisti
- Gestione abbonamenti
- Moderazione contenuti

## 🎨 Design System

### Colori
- **Primary (Orange):** `#ee7712` - Azioni principali, CTA
- **Secondary (Green):** `#22c55e` - Successo, conferme
- **Accent (Blue):** `#3b82f6` - Link, informazioni
- **Neutral:** Scala di grigi per testi e sfondi

### Componenti CSS
```css
.btn-primary    /* Bottone primario arancione */
.btn-secondary  /* Bottone secondario outline */
.btn-accent     /* Bottone verde */
.card           /* Card con shadow */
.input-field    /* Input form */
.badge-*        /* Badge colorati */
```

## 🔧 Configurazione

### Variabili d'Ambiente

Crea un file `.env.local`:

```env
# Stripe (per pagamenti)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# SendGrid (per email)
SENDGRID_API_KEY=SG....
SENDGRID_FROM_EMAIL=noreply@doghero.it

# Database (futuro)
DATABASE_URL=...
```

## 💳 Piani Abbonamento

| Piano | Prezzo | Features |
|-------|--------|----------|
| Free | €0/mese | Profilo base, 3 servizi, 5 contatti/mese |
| Basic | €19.99/mese | Profilo completo, servizi illimitati, contatti illimitati |
| Premium | €39.99/mese | Posizione in evidenza, statistiche avanzate, supporto prioritario |
| Enterprise | €79.99/mese | Prima posizione, account manager, API access |

## 🧪 Credenziali Demo

```
Dog Owner:     mario.rossi@email.com / password123
Professionista: maria.rossi@email.com / password123
Admin:         admin@doghero.it / admin123
```

## 📱 Responsive Design

- **Mobile First:** Design ottimizzato per smartphone
- **Tablet:** Layout adattivo per tablet
- **Desktop:** Esperienza completa su schermi grandi

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript
- **Payments:** Stripe (mock)
- **Email:** SendGrid (mock)

## 📍 Città Coperte

- Gaeta
- Formia
- Terracina
- Sperlonga
- Fondi
- Minturno
- Itri
- San Felice Circeo
- Lenola
- Monte San Biagio

## 🚧 Roadmap

- [ ] Autenticazione con NextAuth.js
- [ ] Database PostgreSQL con Prisma
- [ ] Integrazione Stripe reale
- [ ] Integrazione SendGrid reale
- [ ] Sistema di recensioni avanzato
- [ ] Chat in-app tra utenti
- [ ] Calendario prenotazioni
- [ ] App mobile (React Native)
- [ ] Shop integrato per prodotti pet
- [ ] Eventi e corsi

## 📄 License

MIT License - Vedi [LICENSE](LICENSE) per dettagli.

---

Sviluppato con ❤️ per la comunità cinofila della provincia di Latina.
