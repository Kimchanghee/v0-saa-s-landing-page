export default function ServicesOutcomes() {
  const outcomes = [
    {
      label: "3개월",
      title: "채널 감사 및 전략 수립",
      detail: "당신의 채널을 분석하고 성장 전략을 수립합니다.",
    },
    {
      label: "6개월",
      title: "최적화 및 성장",
      detail: "전략을 실행하고 채널의 성장을 모니터링합니다.",
    },
    {
      label: "12개월",
      title: "목표 달성",
      detail: "수립한 목표를 달성하고 지속적인 성장을 이룹니다.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 성과</h2>
          <p className="text-lg text-muted-foreground">Creator Control 서비스의 성과 예상 타임라인</p>
        </div>
        <div className="space-y-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                <span className="font-bold text-center text-sm">{outcome.label}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
                <p className="text-muted-foreground">{outcome.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
