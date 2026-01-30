export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  highlighted: boolean
  stripePriceId: string
}

export interface Subscription {
  id: string
  professionalId: string
  planId: string
  status: 'active' | 'canceled' | 'past_due' | 'trialing'
  currentPeriodStart: string
  currentPeriodEnd: string
  stripeSubscriptionId: string
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'base',
    name: 'Base',
    price: 0,
    interval: 'month',
    features: [
      'Iscrizione gratuita',
      'Crea la tua pagina pubblica',
      'Il cliente prenota e paga online',
      'La piattaforma trattiene 3€ per ogni prenotazione',
      'Nessun costo fisso',
    ],
    highlighted: false,
    stripePriceId: '',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    interval: 'month',
    features: [
      'Tutto di Base +',
      'Nessuna commissione sulle prenotazioni (0€)',
      'Maggiore visibilità nei risultati',
      'Badge “Professionista PRO”',
      'Priorità nelle richieste dei clienti',
    ],
    highlighted: true,
    stripePriceId: 'price_pro_monthly',
  },
]

export const subscriptions: Subscription[] = [
  {
    id: 'sub1',
    professionalId: '1',
    planId: 'pro',
    status: 'active',
    currentPeriodStart: '2024-01-01',
    currentPeriodEnd: '2024-02-01',
    stripeSubscriptionId: 'sub_mock_1',
  },
  {
    id: 'sub2',
    professionalId: '2',
    planId: 'pro',
    status: 'active',
    currentPeriodStart: '2024-01-15',
    currentPeriodEnd: '2024-02-15',
    stripeSubscriptionId: 'sub_mock_2',
  },
  {
    id: 'sub3',
    professionalId: '3',
    planId: 'pro',
    status: 'active',
    currentPeriodStart: '2024-01-10',
    currentPeriodEnd: '2024-02-10',
    stripeSubscriptionId: 'sub_mock_3',
  },
  {
    id: 'sub4',
    professionalId: '4',
    planId: 'pro',
    status: 'active',
    currentPeriodStart: '2024-01-05',
    currentPeriodEnd: '2024-02-05',
    stripeSubscriptionId: 'sub_mock_4',
  },
  {
    id: 'sub5',
    professionalId: '5',
    planId: 'base',
    status: 'active',
    currentPeriodStart: '2024-01-20',
    currentPeriodEnd: '2024-02-20',
    stripeSubscriptionId: 'sub_mock_5',
  },
]

export const getPlanById = (id: string): SubscriptionPlan | undefined => {
  return subscriptionPlans.find(p => p.id === id)
}

export const getSubscriptionByProfessionalId = (professionalId: string): Subscription | undefined => {
  return subscriptions.find(s => s.professionalId === professionalId)
}
