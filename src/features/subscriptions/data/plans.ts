export type Plan = {
  id: string
  name: string
  description: string
  price: number
  features: string[]
}

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    description: '소규모 팀을 위한 기본 플랜',
    price: 99,
    features: [
      '최대 10명의 사용자',
      '기본 기능 사용',
      '이메일 지원',
      '5GB 저장 공간',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    description: '성장하는 팀을 위한 전문 플랜',
    price: 499,
    features: [
      '최대 50명의 사용자',
      '고급 기능 사용',
      '우선 지원',
      '100GB 저장 공간',
      'API 접근',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    description: '대규모 조직을 위한 엔터프라이즈 플랜',
    price: 999,
    features: [
      '무제한 사용자',
      '모든 기능 사용',
      '24/7 전담 지원',
      '무제한 저장 공간',
      '전용 API',
      '커스텀 통합',
    ],
  },
]

