export default function BusinessBenefits() {
  const benefits = [
    {
      tag: "팀 관리",
      title: "통합 팀 대시보드",
      description: "모든 크리에이터의 성과를 한곳에서 관리합니다.",
    },
    {
      tag: "AI 분석",
      title: "포트폴리오 인사이트",
      description: "팀 전체와 개별 크리에이터의 성과를 깊이 있게 분석합니다.",
    },
    {
      tag: "AI 전략",
      title: "팀 전략 수립",
      description: "AI PD가 팀 차원의 성장 전략과 우선순위를 제시합니다.",
    },
    {
      tag: "협업",
      title: "협력 도구",
      description: "팀 내 크리에이터 간 협업과 커뮤니케이션을 지원합니다.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">비즈니스 AI PD 기능</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:border-purple-500/50 transition-all"
            >
              <span className="text-sm font-semibold text-purple-500">{benefit.tag}</span>
              <h3 className="text-lg font-bold mt-3 mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
