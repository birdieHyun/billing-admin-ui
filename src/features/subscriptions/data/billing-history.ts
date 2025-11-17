export type BillingHistory = {
  id: string
  date: string
  amount: string
  status: 'paid' | 'pending' | 'failed'
  invoiceUrl?: string
}

export const getBillingHistory = (teamId: string): BillingHistory[] => {
  // 실제로는 API에서 가져올 데이터
  return [
    {
      id: 'INV001',
      date: '2024-01-15',
      amount: '$999.00',
      status: 'paid',
      invoiceUrl: '/invoices/INV001',
    },
    {
      id: 'INV002',
      date: '2023-12-15',
      amount: '$999.00',
      status: 'paid',
      invoiceUrl: '/invoices/INV002',
    },
    {
      id: 'INV003',
      date: '2023-11-15',
      amount: '$999.00',
      status: 'paid',
      invoiceUrl: '/invoices/INV003',
    },
    {
      id: 'INV004',
      date: '2023-10-15',
      amount: '$999.00',
      status: 'paid',
      invoiceUrl: '/invoices/INV004',
    },
  ]
}

