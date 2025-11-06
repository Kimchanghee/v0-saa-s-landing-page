export default function AnalyticsFeatures() {
  const features = [
    {
      title: "실시간 성과 대시보드",
      description: "채널/팀의 모든 주요 지표를 한눈에 모니터링하세요",
      icon: "📊",
    },
    {
      title: "트렌드 분석",
      description: "시청자 행동, 콘텐츠 성과 등 심층 트렌드 분석",
      icon: "📈",
    },
    {
      title: "경쟁사 벤치마킹",
      description: "경쟁 채널과의 비교 분석으로 차별화 전략 수립",
      icon: "🎯",
    },
    {
      title: "AI 인사이트",
      description: "AI PD가 데이터에 숨은 기회와 위험 요소를 발굴",
      icon: "🤖",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">분석의 모든 것을 담았습니다</h2>
          <p className="text-lg text-muted-foreground">데이터 기반의 의사결정에 필요한 모든 도구</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-lg hover:border-orange-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
