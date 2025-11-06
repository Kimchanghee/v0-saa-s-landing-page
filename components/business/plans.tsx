export default function BusinessPlans() {
  const plans = [
    {
      name: "스타트업",
      description: "소규모 팀용",
      price: "₩199,000",
      cycle: "/월",
      features: ["팀 대시보드", "5명 크리에이터", "기본 분석", "이메일 지원"],
      cta: "상담받기",
      highlighted: false,
    },
    {
      name: "프로",
      description: "성장하는 에이전시용",
      price: "₩599,000",
      cycle: "/월",
      badge: "추천",
      features: ["팀 대시보드", "30명 크리에이터", "고급 분석", "계약 관리", "우선 지원"],
      cta: "상담받기",
      highlighted: true,
    },
    {
      name: "엔터프라이즈",
      description: "대규모 조직용",
      price: "맞춤 가격",
      cycle: "/월",
      features: ["팀 대시보드", "무제한 크리에이터", "커스텀 분석", "계약 관리", "전용 지원", "API 접근"],
      cta: "연락하기",
      highlighted: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">비즈니스 요금제</h2>
          <p className="text-lg text-muted-foreground">팀 규모에 맞는 플랜을 선택하세요</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 border transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-500/10 to-card border-purple-500/50 md:scale-105"
                  : "bg-card border-border hover:border-blue-500/50"
              }`}
            >
              {plan.badge && (
                <div className="inline-block mb-4 px-3 py-1 bg-purple-500/20 text-purple-500 text-sm font-semibold rounded-full">
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
                    <span className={`${plan.highlighted ? "text-purple-500" : "text-blue-500"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
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
