import { Card } from "@/components/ui/card"
import { Zap, Users, BarChart3, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "빠른 편집",
    description: "AI 기반 자동 편집으로 편집 시간을 90% 단축하세요. 더 많은 영상을 더 빠르게 제작할 수 있습니다.",
  },
  {
    icon: Users,
    title: "팬 관리",
    description: "댓글, 메시지, 팬 분석을 한곳에서 관리하세요. 팬과의 상호작용을 더 의미 있게 만들어보세요.",
  },
  {
    icon: BarChart3,
    title: "상세 분석",
    description: "성과 데이터를 실시간으로 분석하세요. 어떤 콘텐츠가 인기인지 즉시 파악할 수 있습니다.",
  },
  {
    icon: Lock,
    title: "안전한 보관",
    description: "당신의 모든 콘텐츠는 클라우드에 안전하게 저장됩니다. 언제 어디서나 접근하세요.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-pink-500 font-semibold mb-2">강력한 기능</p>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">크리에이터를 위한 모든 도구</h2>
          <p className="text-lg text-muted-foreground">
            성공하는 크리에이터들이 믿고 사용하는 기능들을 모두 만나보세요.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-card border border-border p-6 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
