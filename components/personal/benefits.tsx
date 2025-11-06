export default function PersonalBenefits() {
  const benefits = [
    {
      tag: "AI 분석",
      title: "실시간 채널 분석",
      description: "AI가 시청자, 콘텐츠, 트렌드를 분석해 매월 상세한 인사이트를 제공합니다.",
    },
    {
      tag: "AI 기획",
      title: "콘텐츠 기획 지원",
      description: "당신의 채널에 맞는 콘텐츠 아이디어, 게재 시간, 주제를 AI가 제안합니다.",
    },
    {
      tag: "AI 성장",
      title: "성장 전략 제시",
      description: "데이터 기반의 맞춤형 성장 전략과 목표 달성 로드맵을 제공합니다.",
    },
    {
      tag: "AI 수익화",
      title: "수익 최적화",
      description: "광고, 후원, 멤버십 등 다양한 수익화 전략을 AI가 최적화합니다.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">AI PD가 제공하는 기능</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:border-pink-500/50 transition-all"
            >
              <span className="text-sm font-semibold text-pink-500">{benefit.tag}</span>
              <h3 className="text-lg font-bold mt-3 mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
