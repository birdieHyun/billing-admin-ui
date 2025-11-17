import { createFileRoute } from '@tanstack/react-router'
import { SubscriptionDetail } from '@/features/subscriptions/components/subscription-detail'

export const Route = createFileRoute('/_authenticated/subscriptions/$teamId')({
  component: SubscriptionDetail,
})

