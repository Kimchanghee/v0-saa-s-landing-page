export default function BusinessMetrics() {
  const metrics = [
    { value: "1000+", label: "관리 중인 크리에이터", description: "전 세계 에이전시가 신뢰합니다" },
    { value: "₩10B+", label: "관리 수익", description: "매년 증가하는 관리 수익" },
    { value: "95%", label: "만족도", description: "고객 만족도 평가" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">비즈니스 성과</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="font-semibold mb-2">{metric.label}</div>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
