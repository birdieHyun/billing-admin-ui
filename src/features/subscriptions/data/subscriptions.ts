export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'pending'

export type Subscription = {
  id: string
  teamName: string
  product: string
  planId: string
  status: SubscriptionStatus
  startDate: string
  nextBillingDate: string
  amount: string
}

export const getSubscriptionByTeamId = (teamId: string): Subscription | undefined => {
  return subscriptions.find((sub) => sub.id === teamId)
}

export const subscriptions: Subscription[] = [
  {
    id: 'SUB001',
    teamName: 'Acme Inc',
    product: 'Enterprise Plan',
    planId: 'enterprise',
    status: 'active',
    startDate: '2024-01-15',
    nextBillingDate: '2024-02-15',
    amount: '$999.00',
  },
  {
    id: 'SUB002',
    teamName: 'Tech Corp',
    product: 'Professional Plan',
    planId: 'professional',
    status: 'active',
    startDate: '2024-01-20',
    nextBillingDate: '2024-02-20',
    amount: '$499.00',
  },
  {
    id: 'SUB003',
    teamName: 'Startup Co',
    product: 'Basic Plan',
    planId: 'basic',
    status: 'active',
    startDate: '2024-01-10',
    nextBillingDate: '2024-02-10',
    amount: '$99.00',
  },
  {
    id: 'SUB004',
    teamName: 'Demo Team',
    product: 'Enterprise Plan',
    planId: 'enterprise',
    status: 'pending',
    startDate: '2024-01-25',
    nextBillingDate: '2024-02-25',
    amount: '$999.00',
  },
  {
    id: 'SUB005',
    teamName: 'Test Company',
    product: 'Professional Plan',
    planId: 'professional',
    status: 'cancelled',
    startDate: '2023-12-01',
    nextBillingDate: '2024-01-01',
    amount: '$499.00',
  },
  {
    id: 'SUB006',
    teamName: 'Sample Org',
    product: 'Basic Plan',
    planId: 'basic',
    status: 'expired',
    startDate: '2023-11-15',
    nextBillingDate: '2023-12-15',
    amount: '$99.00',
  },
]

