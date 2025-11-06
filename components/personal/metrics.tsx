export default function PersonalMetrics() {
  const metrics = [
    { value: "98%", label: "정확도", description: "업계 최고의 분석 정확도" },
    { value: "24시간", label: "응답", description: "고객 지원 평균 응답 시간" },
    { value: "99.9%", label: "가동률", description: "안정적인 서비스 제공" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">우리의 성과</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
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
