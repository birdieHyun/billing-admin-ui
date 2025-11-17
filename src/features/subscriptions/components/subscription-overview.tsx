import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { type Subscription } from '../data/subscriptions'

type SubscriptionOverviewProps = {
  subscription: Subscription
  onCancelClick: () => void
  onChangePlanClick?: () => void
}

export function SubscriptionOverview({
  subscription,
  onCancelClick,
  onChangePlanClick,
}: SubscriptionOverviewProps) {
  const getStatusVariant = (status: Subscription['status']) => {
    switch (status) {
      case 'active':
        return 'default'
      case 'pending':
        return 'secondary'
      case 'cancelled':
        return 'destructive'
      case 'expired':
        return 'outline'
      default:
        return 'default'
    }
  }

  const getStatusLabel = (status: Subscription['status']) => {
    switch (status) {
      case 'active':
        return '활성'
      case 'pending':
        return '대기중'
      case 'cancelled':
        return '취소됨'
      case 'expired':
        return '만료됨'
      default:
        return status
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>현재 구독</CardTitle>
        <CardDescription>구독 정보 및 상태</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-sm text-muted-foreground'>플랜</p>
            <p className='text-lg font-semibold'>{subscription.product}</p>
          </div>
          <div>
            <p className='text-sm text-muted-foreground'>상태</p>
            <Badge variant={getStatusVariant(subscription.status)}>
              {getStatusLabel(subscription.status)}
            </Badge>
          </div>
          <div>
            <p className='text-sm text-muted-foreground'>구독 시작일</p>
            <p className='text-base'>
              {format(new Date(subscription.startDate), 'yyyy년 MM월 dd일')}
            </p>
          </div>
          <div>
            <p className='text-sm text-muted-foreground'>다음 결제일</p>
            <p className='text-base'>
              {format(new Date(subscription.nextBillingDate), 'yyyy년 MM월 dd일')}
            </p>
          </div>
          <div>
            <p className='text-sm text-muted-foreground'>월 결제 금액</p>
            <p className='text-lg font-semibold'>{subscription.amount}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className='gap-2'>
        <Button variant='outline' onClick={onChangePlanClick}>
          플랜 변경
        </Button>
        {subscription.status === 'active' && (
          <Button variant='destructive' onClick={onCancelClick}>
            구독 취소
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

