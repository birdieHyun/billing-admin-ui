import { useState } from 'react'
import { useParams, useNavigate } from '@tanstack/react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { SubscriptionOverview } from './subscription-overview'
import { ChangePlan } from './change-plan'
import { BillingHistory } from './billing-history'
import { CancelSubscriptionDialog } from './cancel-subscription-dialog'
import { getSubscriptionByTeamId } from '../data/subscriptions'

export function SubscriptionDetail() {
  const { teamId } = useParams({ from: '/_authenticated/subscriptions/$teamId' })
  const navigate = useNavigate()
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const subscription = getSubscriptionByTeamId(teamId)

  if (!subscription) {
    return (
      <>
        <Header fixed>
          <Search />
          <div className='ms-auto flex items-center space-x-4'>
            <ThemeSwitch />
            <ConfigDrawer />
            <ProfileDropdown />
          </div>
        </Header>
        <Main>
          <div className='flex items-center justify-center h-96'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold'>구독을 찾을 수 없습니다</h2>
              <p className='text-muted-foreground mt-2'>
                요청하신 팀의 구독 정보가 없습니다.
              </p>
              <button
                onClick={() => navigate({ to: '/subscriptions' })}
                className='mt-4 text-primary hover:underline'
              >
                구독 목록으로 돌아가기
              </button>
            </div>
          </div>
        </Main>
      </>
    )
  }

  return (
    <>
      <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <button
              onClick={() => navigate({ to: '/subscriptions' })}
              className='text-sm text-muted-foreground hover:text-foreground mb-2'
            >
              ← 구독 목록으로
            </button>
            <h2 className='text-2xl font-bold tracking-tight'>
              {subscription.teamName} 구독 관리
            </h2>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>구독 개요</TabsTrigger>
            <TabsTrigger value='change-plan'>플랜 변경</TabsTrigger>
            <TabsTrigger value='billing-history'>결제 이력</TabsTrigger>
          </TabsList>

          <TabsContent value='overview' className='space-y-4'>
            <SubscriptionOverview
              subscription={subscription}
              onCancelClick={() => setIsCancelDialogOpen(true)}
              onChangePlanClick={() => setActiveTab('change-plan')}
            />
          </TabsContent>

          <TabsContent value='change-plan' className='space-y-4'>
            <ChangePlan subscription={subscription} />
          </TabsContent>

          <TabsContent value='billing-history' className='space-y-4'>
            <BillingHistory teamId={teamId} />
          </TabsContent>
        </Tabs>

        <CancelSubscriptionDialog
          open={isCancelDialogOpen}
          onOpenChange={setIsCancelDialogOpen}
          subscription={subscription}
        />
      </Main>
    </>
  )
}

