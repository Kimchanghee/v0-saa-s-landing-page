export default function AnalyticsUseCases() {
  const useCases = [
    {
      title: "콘텐츠 최적화",
      desc: "어떤 콘텐츠가 가장 잘 되는지 분석하고 다음 기획에 반영",
    },
    {
      title: "시청자 이해",
      desc: "시청자 통계, 선호도, 행동 패턴을 파악해 타게팅 개선",
    },
    {
      title: "수익 최대화",
      desc: "수익 채널별 분석으로 수익화 전략 최적화",
    },
    {
      title: "성장 전략 수립",
      desc: "데이터 기반의 단계별 성장 계획 수립 및 실행",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-orange-500/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">분석으로 이런 것들이 가능해집니다</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
