import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { AlertCircle } from 'lucide-react'
import { type Subscription } from '../data/subscriptions'
import { plans } from '../data/plans'

type ChangePlanProps = {
  subscription: Subscription
}

export function ChangePlan({ subscription }: ChangePlanProps) {
  const [selectedPlanId, setSelectedPlanId] = useState(subscription.planId)

  const handleChangePlan = () => {
    // 실제로는 API 호출
    console.log('플랜 변경:', selectedPlanId)
    alert(`플랜이 ${plans.find((p) => p.id === selectedPlanId)?.name}로 변경되었습니다.`)
  }

  const isUpgrade =
    plans.findIndex((p) => p.id === selectedPlanId) >
    plans.findIndex((p) => p.id === subscription.planId)

  return (
    <div className='space-y-6'>
      <Alert>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>플랜 변경 안내</AlertTitle>
        <AlertDescription>
          {isUpgrade
            ? '업그레이드: 일할 계산 후 즉시 청구됩니다.'
            : '다운그레이드: 다음 결제일부터 적용됩니다.'}
        </AlertDescription>
      </Alert>

      <RadioGroup value={selectedPlanId} onValueChange={setSelectedPlanId}>
        <div className='space-y-4'>
          {plans.map((plan) => (
            <div key={plan.id} className='flex items-start space-x-3'>
              <RadioGroupItem value={plan.id} id={plan.id} className='mt-1' />
              <Label
                htmlFor={plan.id}
                className='cursor-pointer flex-1'
              >
                <Card
                  className={`p-4 ${
                    plan.id === selectedPlanId
                      ? 'border-primary bg-primary/5'
                      : ''
                  }`}
                >
                  <div className='flex justify-between items-start mb-2'>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-lg'>{plan.name}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {plan.description}
                      </p>
                    </div>
                    <p className='text-xl font-bold ml-4'>
                      ${plan.price}/mo
                    </p>
                  </div>
                  <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Card>
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>

      <div className='flex justify-end'>
        <Button
          onClick={handleChangePlan}
          disabled={selectedPlanId === subscription.planId}
        >
          플랜 변경 확인
        </Button>
      </div>
    </div>
  )
}

