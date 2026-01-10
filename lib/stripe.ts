// Mock Stripe Integration
// In produzione, sostituire con la vera integrazione Stripe

export interface StripeCheckoutSession {
  id: string
  url: string
  customer_email: string
  subscription: string
  status: 'open' | 'complete' | 'expired'
}

export interface StripeSubscription {
  id: string
  customer: string
  status: 'active' | 'canceled' | 'past_due' | 'trialing'
  current_period_start: number
  current_period_end: number
  plan: {
    id: string
    amount: number
    interval: 'month' | 'year'
  }
}

// Mock: Crea una sessione di checkout
export async function createCheckoutSession(
  priceId: string,
  customerEmail: string,
  successUrl: string,
  cancelUrl: string
): Promise<StripeCheckoutSession> {
  // Simula delay API
  await new Promise(resolve => setTimeout(resolve, 500))

  // Mock response
  return {
    id: `cs_mock_${Date.now()}`,
    url: `https://checkout.stripe.com/mock/${Date.now()}`,
    customer_email: customerEmail,
    subscription: `sub_mock_${Date.now()}`,
    status: 'open',
  }
}

// Mock: Recupera una sottoscrizione
export async function getSubscription(subscriptionId: string): Promise<StripeSubscription | null> {
  await new Promise(resolve => setTimeout(resolve, 300))

  // Mock response
  return {
    id: subscriptionId,
    customer: 'cus_mock_123',
    status: 'active',
    current_period_start: Math.floor(Date.now() / 1000),
    current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
    plan: {
      id: 'price_premium_monthly',
      amount: 3999,
      interval: 'month',
    },
  }
}

// Mock: Cancella una sottoscrizione
export async function cancelSubscription(subscriptionId: string): Promise<StripeSubscription> {
  await new Promise(resolve => setTimeout(resolve, 500))

  return {
    id: subscriptionId,
    customer: 'cus_mock_123',
    status: 'canceled',
    current_period_start: Math.floor(Date.now() / 1000),
    current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
    plan: {
      id: 'price_premium_monthly',
      amount: 3999,
      interval: 'month',
    },
  }
}

// Mock: Aggiorna metodo di pagamento
export async function updatePaymentMethod(
  customerId: string,
  paymentMethodId: string
): Promise<{ success: boolean }> {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { success: true }
}

// Mock: Webhook handler per eventi Stripe
export function handleStripeWebhook(event: {
  type: string
  data: { object: Record<string, unknown> }
}): { received: boolean } {
  console.log('Stripe webhook received:', event.type)

  switch (event.type) {
    case 'checkout.session.completed':
      console.log('Checkout completed:', event.data.object)
      break
    case 'customer.subscription.updated':
      console.log('Subscription updated:', event.data.object)
      break
    case 'customer.subscription.deleted':
      console.log('Subscription deleted:', event.data.object)
      break
    case 'invoice.payment_succeeded':
      console.log('Payment succeeded:', event.data.object)
      break
    case 'invoice.payment_failed':
      console.log('Payment failed:', event.data.object)
      break
    default:
      console.log('Unhandled event type:', event.type)
  }

  return { received: true }
}

// Configurazione Stripe (mock)
export const stripeConfig = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_mock',
  secretKey: process.env.STRIPE_SECRET_KEY || 'sk_test_mock',
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'whsec_mock',
}
