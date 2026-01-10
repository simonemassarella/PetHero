export type ServiceType = 'dog_sitter' | 'pensione' | 'educatore' | 'centro_cinofilo'

export interface Professional {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  coverImage: string
  bio: string
  city: string
  address: string
  serviceTypes: ServiceType[]
  services: Service[]
  badges: Badge[]
  collaborations: string[]
  reviews: Review[]
  rating: number
  totalReviews: number
  verified: boolean
  subscriptionTier: 'free' | 'basic' | 'premium' | 'enterprise'
  createdAt: string
  gallery: string[]
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: string
}

export interface Badge {
  id: string
  name: string
  icon: string
  color: string
}

export interface Review {
  id: string
  authorName: string
  authorAvatar: string
  rating: number
  comment: string
  date: string
}

export const serviceTypeLabels: Record<ServiceType, string> = {
  dog_sitter: 'Dog Sitter',
  pensione: 'Pensione',
  educatore: 'Educatore Cinofilo',
  centro_cinofilo: 'Centro Cinofilo',
}

export const serviceTypeIcons: Record<ServiceType, string> = {
  dog_sitter: '🏠',
  pensione: '🏨',
  educatore: '🎓',
  centro_cinofilo: '🐕',
}

export const cities = [
  'Gaeta',
  'Formia',
  'Terracina',
  'Sperlonga',
  'Fondi',
  'Minturno',
  'Itri',
  'Lenola',
  'Monte San Biagio',
  'San Felice Circeo',
]

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Maria Rossi',
    email: 'maria.rossi@email.com',
    phone: '+39 333 1234567',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    coverImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200',
    bio: 'Appassionata di cani da sempre, offro servizi di dog sitting con amore e professionalità. Casa con giardino recintato, esperienza con tutte le taglie.',
    city: 'Gaeta',
    address: 'Via Lungomare Caboto, 15',
    serviceTypes: ['dog_sitter'],
    services: [
      { id: 's1', name: 'Dog Sitting Giornaliero', description: 'Custodia del tuo cane per l\'intera giornata', price: 25, duration: '8 ore' },
      { id: 's2', name: 'Passeggiata', description: 'Passeggiata di 1 ora con il tuo cane', price: 15, duration: '1 ora' },
      { id: 's3', name: 'Pernottamento', description: 'Il tuo cane dorme a casa mia', price: 35, duration: 'notte' },
    ],
    badges: [
      { id: 'b1', name: 'Verificato', icon: '✓', color: 'green' },
      { id: 'b2', name: 'Super Host', icon: '⭐', color: 'gold' },
      { id: 'b3', name: 'Primo Soccorso', icon: '🏥', color: 'red' },
    ],
    collaborations: ['Clinica Veterinaria Gaeta', 'Pet Shop Amici a 4 Zampe'],
    reviews: [
      { id: 'r1', authorName: 'Luca Bianchi', authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 5, comment: 'Maria è fantastica! Il mio Rocky si è trovato benissimo.', date: '2024-01-15' },
      { id: 'r2', authorName: 'Anna Verdi', authorAvatar: 'https://randomuser.me/api/portraits/women/28.jpg', rating: 5, comment: 'Professionale e affidabile. Consigliatissima!', date: '2024-01-10' },
    ],
    rating: 4.9,
    totalReviews: 47,
    verified: true,
    subscriptionTier: 'premium',
    createdAt: '2023-06-15',
    gallery: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600',
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
    ],
  },
  {
    id: '2',
    name: 'Pensione Quattro Zampe',
    email: 'info@quattrozampe.it',
    phone: '+39 0771 123456',
    avatar: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=200',
    coverImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
    bio: 'Pensione professionale per cani con ampi spazi verdi, personale qualificato 24/7. Struttura climatizzata con webcam per monitorare il tuo amico.',
    city: 'Formia',
    address: 'Via dei Pini, 45 - Loc. Penitro',
    serviceTypes: ['pensione'],
    services: [
      { id: 's4', name: 'Pensione Standard', description: 'Box singolo con uscite giornaliere', price: 30, duration: 'giorno' },
      { id: 's5', name: 'Pensione Premium', description: 'Suite con area gioco privata', price: 45, duration: 'giorno' },
      { id: 's6', name: 'Pensione VIP', description: 'Camera climatizzata con webcam', price: 60, duration: 'giorno' },
    ],
    badges: [
      { id: 'b1', name: 'Verificato', icon: '✓', color: 'green' },
      { id: 'b4', name: 'Struttura Certificata', icon: '🏆', color: 'blue' },
      { id: 'b5', name: 'Webcam 24/7', icon: '📹', color: 'purple' },
    ],
    collaborations: ['Ambulatorio Veterinario Formia', 'Toelettatura Bau Bau'],
    reviews: [
      { id: 'r3', authorName: 'Marco Neri', authorAvatar: 'https://randomuser.me/api/portraits/men/45.jpg', rating: 5, comment: 'Struttura impeccabile, personale gentilissimo.', date: '2024-01-20' },
      { id: 'r4', authorName: 'Giulia Russo', authorAvatar: 'https://randomuser.me/api/portraits/women/33.jpg', rating: 4, comment: 'Ottima pensione, torneremo sicuramente!', date: '2024-01-18' },
    ],
    rating: 4.7,
    totalReviews: 89,
    verified: true,
    subscriptionTier: 'enterprise',
    createdAt: '2022-03-10',
    gallery: [
      'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
    ],
  },
  {
    id: '3',
    name: 'Dott. Paolo Esposito',
    email: 'paolo.esposito@educatore.it',
    phone: '+39 328 9876543',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    coverImage: 'https://images.unsplash.com/photo-1558929996-da64ba858215?w=1200',
    bio: 'Educatore cinofilo certificato ENCI con 15 anni di esperienza. Specializzato in problemi comportamentali, socializzazione cuccioli e preparazione per esposizioni.',
    city: 'Terracina',
    address: 'Via Roma, 78',
    serviceTypes: ['educatore'],
    services: [
      { id: 's7', name: 'Valutazione Comportamentale', description: 'Prima visita e analisi del comportamento', price: 50, duration: '1.5 ore' },
      { id: 's8', name: 'Corso Base Cuccioli', description: 'Socializzazione e comandi base', price: 200, duration: '8 lezioni' },
      { id: 's9', name: 'Rieducazione Comportamentale', description: 'Percorso personalizzato', price: 400, duration: '10 lezioni' },
    ],
    badges: [
      { id: 'b1', name: 'Verificato', icon: '✓', color: 'green' },
      { id: 'b6', name: 'Certificato ENCI', icon: '📜', color: 'blue' },
      { id: 'b7', name: '15+ Anni Esperienza', icon: '🎖️', color: 'gold' },
    ],
    collaborations: ['ENCI Lazio', 'Clinica Veterinaria Terracina', 'Associazione Amici del Cane'],
    reviews: [
      { id: 'r5', authorName: 'Francesca Galli', authorAvatar: 'https://randomuser.me/api/portraits/women/41.jpg', rating: 5, comment: 'Paolo ha trasformato il mio cane! Professionalità incredibile.', date: '2024-01-22' },
      { id: 'r6', authorName: 'Roberto Conti', authorAvatar: 'https://randomuser.me/api/portraits/men/38.jpg', rating: 5, comment: 'Finalmente il mio Labrador non tira più al guinzaglio!', date: '2024-01-19' },
    ],
    rating: 4.9,
    totalReviews: 124,
    verified: true,
    subscriptionTier: 'premium',
    createdAt: '2021-09-20',
    gallery: [
      'https://images.unsplash.com/photo-1558929996-da64ba858215?w=600',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600',
    ],
  },
  {
    id: '4',
    name: 'Centro Cinofilo Costa Pontina',
    email: 'info@centrocostapontina.it',
    phone: '+39 0773 456789',
    avatar: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200',
    coverImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
    bio: 'Centro cinofilo completo con campo agility, piscina per cani, area sgambamento. Corsi di gruppo e individuali, eventi e competizioni.',
    city: 'Sperlonga',
    address: 'Strada Provinciale Fondi-Sperlonga km 3',
    serviceTypes: ['centro_cinofilo', 'educatore'],
    services: [
      { id: 's10', name: 'Corso Agility Base', description: 'Introduzione all\'agility dog', price: 150, duration: '6 lezioni' },
      { id: 's11', name: 'Piscina per Cani', description: 'Sessione di nuoto assistito', price: 25, duration: '30 min' },
      { id: 's12', name: 'Area Sgambamento', description: 'Accesso giornaliero all\'area recintata', price: 10, duration: 'giorno' },
    ],
    badges: [
      { id: 'b1', name: 'Verificato', icon: '✓', color: 'green' },
      { id: 'b8', name: 'Campo Agility', icon: '🏃', color: 'orange' },
      { id: 'b9', name: 'Piscina', icon: '🏊', color: 'blue' },
    ],
    collaborations: ['FISC Italia', 'Comune di Sperlonga', 'Pro Loco Sperlonga'],
    reviews: [
      { id: 'r7', authorName: 'Elena Martini', authorAvatar: 'https://randomuser.me/api/portraits/women/55.jpg', rating: 5, comment: 'Centro fantastico! Il mio Border Collie adora l\'agility.', date: '2024-01-25' },
      { id: 'r8', authorName: 'Davide Ricci', authorAvatar: 'https://randomuser.me/api/portraits/men/29.jpg', rating: 4, comment: 'Ottima struttura, personale competente.', date: '2024-01-21' },
    ],
    rating: 4.6,
    totalReviews: 67,
    verified: true,
    subscriptionTier: 'enterprise',
    createdAt: '2020-05-12',
    gallery: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600',
      'https://images.unsplash.com/photo-1558929996-da64ba858215?w=600',
    ],
  },
  {
    id: '5',
    name: 'Sara Lombardi',
    email: 'sara.lombardi@email.com',
    phone: '+39 347 5551234',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    coverImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200',
    bio: 'Dog Sitter certificata con esperienza in cani di tutte le taglie. Disponibile anche per passeggiate serali e weekend. Amo i cani come fossero miei!',
    city: 'Fondi',
    address: 'Via Appia Lato Napoli, 120',
    serviceTypes: ['dog_sitter'],
    services: [
      { id: 's13', name: 'Passeggiata Mattutina', description: 'Passeggiata di 45 minuti', price: 12, duration: '45 min' },
      { id: 's14', name: 'Dog Sitting Weekend', description: 'Custodia per tutto il weekend', price: 80, duration: 'weekend' },
      { id: 's15', name: 'Visita a Domicilio', description: 'Visita per cibo e coccole', price: 15, duration: '30 min' },
    ],
    badges: [
      { id: 'b1', name: 'Verificato', icon: '✓', color: 'green' },
      { id: 'b10', name: 'Disponibile Weekend', icon: '📅', color: 'purple' },
    ],
    collaborations: ['Ambulatorio Veterinario Fondi'],
    reviews: [
      { id: 'r9', authorName: 'Chiara Fontana', authorAvatar: 'https://randomuser.me/api/portraits/women/22.jpg', rating: 5, comment: 'Sara è dolcissima, il mio cane la adora!', date: '2024-01-24' },
    ],
    rating: 4.8,
    totalReviews: 31,
    verified: true,
    subscriptionTier: 'basic',
    createdAt: '2023-11-05',
    gallery: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
    ],
  },
  {
    id: '6',
    name: 'Pensione Il Rifugio del Cane',
    email: 'rifugiodelcane@email.com',
    phone: '+39 0771 987654',
    avatar: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200',
    coverImage: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200',
    bio: 'Pensione familiare immersa nel verde delle colline di Itri. Ambiente tranquillo e rilassante, ideale per cani anziani o che necessitano di cure particolari.',
    city: 'Itri',
    address: 'Contrada Valle, snc',
    serviceTypes: ['pensione'],
    services: [
      { id: 's16', name: 'Pensione Base', description: 'Soggiorno con pasti inclusi', price: 28, duration: 'giorno' },
      { id: 's17', name: 'Pensione Senior', description: 'Assistenza speciale per cani anziani', price: 40, duration: 'giorno' },
    ],
    badges: [
      { id: 'b1', name: 'Verificato', icon: '✓', color: 'green' },
      { id: 'b11', name: 'Pet Friendly Senior', icon: '🐕‍🦺', color: 'teal' },
    ],
    collaborations: ['Veterinario Dr. Rossi Itri'],
    reviews: [
      { id: 'r10', authorName: 'Giuseppe Amato', authorAvatar: 'https://randomuser.me/api/portraits/men/61.jpg', rating: 5, comment: 'Posto perfetto per il mio cane anziano. Cura e attenzione.', date: '2024-01-17' },
    ],
    rating: 4.7,
    totalReviews: 42,
    verified: true,
    subscriptionTier: 'basic',
    createdAt: '2022-08-20',
    gallery: [
      'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600',
    ],
  },
]

export const getProfessionalById = (id: string): Professional | undefined => {
  return professionals.find(p => p.id === id)
}

export const getProfessionalsByCity = (city: string): Professional[] => {
  return professionals.filter(p => p.city.toLowerCase() === city.toLowerCase())
}

export const getProfessionalsByService = (serviceType: ServiceType): Professional[] => {
  return professionals.filter(p => p.serviceTypes.includes(serviceType))
}

export const searchProfessionals = (query: string, city?: string, serviceType?: ServiceType): Professional[] => {
  return professionals.filter(p => {
    const matchesQuery = !query || 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.bio.toLowerCase().includes(query.toLowerCase())
    const matchesCity = !city || p.city.toLowerCase() === city.toLowerCase()
    const matchesService = !serviceType || p.serviceTypes.includes(serviceType)
    return matchesQuery && matchesCity && matchesService
  })
}
