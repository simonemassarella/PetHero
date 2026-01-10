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
    id: 'free',
    name: 'Free',
    price: 0,
    interval: 'month',
    features: [
      'Profilo base visibile',
      'Fino a 3 servizi',
      'Contatti limitati (5/mese)',
      'Badge base',
    ],
    highlighted: false,
    stripePriceId: '',
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 19.99,
    interval: 'month',
    features: [
      'Profilo completo',
      'Servizi illimitati',
      'Contatti illimitati',
      'Badge verificato',
      'Statistiche base',
      'Supporto email',
    ],
    highlighted: false,
    stripePriceId: 'price_basic_monthly',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 39.99,
    interval: 'month',
    features: [
      'Tutto di Basic +',
      'Posizione in evidenza',
      'Badge Premium',
      'Galleria foto estesa',
      'Statistiche avanzate',
      'Supporto prioritario',
      'Promozioni social',
    ],
    highlighted: true,
    stripePriceId: 'price_premium_monthly',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 79.99,
    interval: 'month',
    features: [
      'Tutto di Premium +',
      'Prima posizione garantita',
      'Badge Enterprise',
      'Pagina dedicata',
      'Campagne marketing',
      'Account manager dedicato',
      'API accesso',
      'Multi-sede',
    ],
    highlighted: false,
    stripePriceId: 'price_enterprise_monthly',
  },
]

export const subscriptions: Subscription[] = [
  {
    id: 'sub1',
    professionalId: '1',
    planId: 'premium',
    status: 'active',
    currentPeriodStart: '2024-01-01',
    currentPeriodEnd: '2024-02-01',
    stripeSubscriptionId: 'sub_mock_1',
  },
  {
    id: 'sub2',
    professionalId: '2',
    planId: 'enterprise',
    status: 'active',
    currentPeriodStart: '2024-01-15',
    currentPeriodEnd: '2024-02-15',
    stripeSubscriptionId: 'sub_mock_2',
  },
  {
    id: 'sub3',
    professionalId: '3',
    planId: 'premium',
    status: 'active',
    currentPeriodStart: '2024-01-10',
    currentPeriodEnd: '2024-02-10',
    stripeSubscriptionId: 'sub_mock_3',
  },
  {
    id: 'sub4',
    professionalId: '4',
    planId: 'enterprise',
    status: 'active',
    currentPeriodStart: '2024-01-05',
    currentPeriodEnd: '2024-02-05',
    stripeSubscriptionId: 'sub_mock_4',
  },
  {
    id: 'sub5',
    professionalId: '5',
    planId: 'basic',
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
