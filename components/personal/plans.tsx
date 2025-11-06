export default function PersonalPlans() {
  const plans = [
    {
      name: "무료",
      description: "개인 크리에이터용",
      price: "₩0",
      cycle: "/월",
      features: ["기본 분석", "1개 채널 연결", "월간 보고서", "커뮤니티 지원"],
      cta: "시작하기",
      highlighted: false,
    },
    {
      name: "프로",
      description: "성장하는 크리에이터용",
      price: "₩29,000",
      cycle: "/월",
      badge: "인기",
      features: ["고급 분석", "3개 채널 연결", "주간 보고서", "팬 관리 도구", "우선 지원"],
      cta: "시작하기",
      highlighted: true,
    },
    {
      name: "프리미엄",
      description: "전문 크리에이터용",
      price: "₩99,000",
      cycle: "/월",
      features: ["전체 기능", "무제한 채널", "실시간 분석", "AI 최적화", "VIP 지원", "커스텀 리포트"],
      cta: "상담받기",
      highlighted: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">요금제</h2>
          <p className="text-lg text-muted-foreground">당신에게 맞는 요금제를 선택하세요</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 border transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-b from-pink-500/10 to-card border-pink-500/50 md:scale-105"
                  : "bg-card border-border hover:border-purple-500/50"
              }`}
            >
              {plan.badge && (
                <div className="inline-block mb-4 px-3 py-1 bg-pink-500/20 text-pink-500 text-sm font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.cycle}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={`${plan.highlighted ? "text-pink-500" : "text-purple-500"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "border border-border hover:bg-background"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
