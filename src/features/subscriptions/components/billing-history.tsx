import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Download } from 'lucide-react'
import { getBillingHistory } from '../data/billing-history'

type BillingHistoryProps = {
  teamId: string
}

export function BillingHistory({ teamId }: BillingHistoryProps) {
  const history = getBillingHistory(teamId)

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'paid':
        return 'default'
      case 'pending':
        return 'secondary'
      case 'failed':
        return 'destructive'
      default:
        return 'default'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'paid':
        return '결제 완료'
      case 'pending':
        return '대기중'
      case 'failed':
        return '실패'
      default:
        return status
    }
  }

  return (
    <div className='rounded-md border'>
      <Table>
        <TableCaption>결제 이력</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>청구서 ID</TableHead>
            <TableHead>결제일</TableHead>
            <TableHead>금액</TableHead>
            <TableHead>상태</TableHead>
            <TableHead className='text-right'>작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item) => (
            <TableRow key={item.id}>
              <TableCell className='font-medium'>{item.id}</TableCell>
              <TableCell>
                {format(new Date(item.date), 'yyyy-MM-dd')}
              </TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(item.status)}>
                  {getStatusLabel(item.status)}
                </Badge>
              </TableCell>
              <TableCell className='text-right'>
                {item.invoiceUrl && (
                  <Button variant='ghost' size='sm'>
                    <Download className='h-4 w-4 mr-2' />
                    다운로드
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

