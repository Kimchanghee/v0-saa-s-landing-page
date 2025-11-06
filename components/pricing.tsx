import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "스타터",
    description: "개인 크리에이터를 위한",
    price: "₩29,900",
    period: "/월",
    features: ["월 100개 동영상 편집", "기본 분석", "이메일 지원", "1GB 저장소"],
    highlighted: false,
  },
  {
    name: "프로페셔널",
    description: "성장하는 크리에이터를 위한",
    price: "₩79,900",
    period: "/월",
    features: [
      "무제한 영상 편집",
      "고급 분석",
      "우선 지원",
      "스타터의 모든 기능",
      "커스텀 브랜딩",
      "팬 커뮤니티 기능",
      "100GB 저장소",
    ],
    highlighted: true,
  },
  {
    name: "엔터프라이즈",
    description: "대형 크리에이터 그룹",
    price: "상담",
    period: "가격",
    features: [
      "무제한 팀 멤버",
      "화이트라벨",
      "전담 지원",
      "프로의 모든 기능",
      "고급 보안",
      "커스텀 API",
      "무제한 저장소",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-pink-500 font-semibold mb-2">투명한 가격</p>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">모든 크리에이터를 위한 플랜</h2>
          <p className="text-lg text-muted-foreground">무료로 시작하세요. 필요할 때 업그레이드하세요.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 transition-all ${
                plan.highlighted ? "bg-pink-500/10 border-pink-500/50 md:scale-105" : "bg-card border-border"
              } border`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    가장 인기
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 h-11 ${
                  plan.highlighted
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                시작하기
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            모든 플랜은 14일 무료 체험을 포함합니다. 신용카드 불필요합니다.{" "}
            <a href="#" className="text-pink-500 hover:text-purple-600 transition-colors">
              자주 묻는 질문 보기
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
