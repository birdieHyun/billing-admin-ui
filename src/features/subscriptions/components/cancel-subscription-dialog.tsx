import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { type Subscription } from '../data/subscriptions'

type CancelSubscriptionDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  subscription: Subscription
}

export function CancelSubscriptionDialog({
  open,
  onOpenChange,
  subscription,
}: CancelSubscriptionDialogProps) {
  const [cancelReason, setCancelReason] = useState('')

  const handleConfirmCancel = () => {
    // 실제로는 API 호출
    console.log('구독 취소:', subscription.id, cancelReason)
    alert('구독이 취소되었습니다. 현재 결제 기간이 끝날 때까지 서비스를 이용하실 수 있습니다.')
    onOpenChange(false)
    setCancelReason('')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>구독 취소</DialogTitle>
          <DialogDescription>
            이 작업은 되돌릴 수 없습니다. 현재 결제 기간이 끝날 때까지 서비스를 이용하실 수
            있으며, 그 이후에는 접근이 제한됩니다.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4'>
          <div>
            <Label htmlFor='reason'>취소 사유 (선택사항)</Label>
            <Textarea
              id='reason'
              placeholder='구독을 취소하는 이유를 알려주세요...'
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              className='mt-2'
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            구독 유지
          </Button>
          <Button variant='destructive' onClick={handleConfirmCancel}>
            구독 취소
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

