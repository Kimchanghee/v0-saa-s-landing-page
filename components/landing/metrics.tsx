export default function LandingMetrics() {
  const metrics = [
    { value: "50K+", label: "활성 크리에이터", description: "전 세계 크리에이터들이 신뢰합니다" },
    { value: "500M+", label: "분석된 조회수", description: "매월 정확한 분석 제공" },
    { value: "99.9%", label: "가동률", description: "안정적인 서비스 보장" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
