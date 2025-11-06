export default function BusinessComparison() {
  const items = [
    {
      label: "통합",
      title: "모든 크리에이터 통합",
      detail: "여러 크리에이터의 채널을 하나의 대시보드에서 관리합니다.",
    },
    {
      label: "분석",
      title: "포트폴리오 분석",
      detail: "팀 전체의 성과를 분석하고 인사이트를 얻습니다.",
    },
    {
      label: "최적화",
      title: "성과 최적화",
      detail: "데이터 기반의 전략으로 팀의 성과를 극대화합니다.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">비즈니스 플랜 비교</h2>
        </div>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
