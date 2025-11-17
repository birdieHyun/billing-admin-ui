import { format } from 'date-fns'
import { Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { type Subscription } from '../data/subscriptions'

type SubscriptionsTableProps = {
  data: Subscription[]
}

export function SubscriptionsTable({ data }: SubscriptionsTableProps) {
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
    <div className='rounded-md border'>
      <Table>
        <TableCaption>팀 구독 목록</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>구독 ID</TableHead>
            <TableHead>팀 이름</TableHead>
            <TableHead>상품</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>구독 시작일</TableHead>
            <TableHead>다음 결제일</TableHead>
            <TableHead className='text-right'>금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((subscription) => (
            <TableRow key={subscription.id}>
              <TableCell className='font-medium'>{subscription.id}</TableCell>
              <TableCell>
                <Link
                  to='/subscriptions/$teamId'
                  params={{ teamId: subscription.id }}
                  className='font-medium text-primary hover:underline'
                >
                  {subscription.teamName}
                </Link>
              </TableCell>
              <TableCell>{subscription.product}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(subscription.status)}>
                  {getStatusLabel(subscription.status)}
                </Badge>
              </TableCell>
              <TableCell>
                {format(new Date(subscription.startDate), 'yyyy-MM-dd')}
              </TableCell>
              <TableCell>
                {format(new Date(subscription.nextBillingDate), 'yyyy-MM-dd')}
              </TableCell>
              <TableCell className='text-right'>
                {subscription.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

