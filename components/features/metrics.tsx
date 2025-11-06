export default function FeaturesMetrics() {
  const metrics = [
    { value: "50+", label: "주요 기능", description: "지속적으로 추가되는 신기능" },
    { value: "99.9%", label: "가동률", description: "안정적인 서비스 제공" },
    { value: "24h", label: "고객 지원", description: "항상 함께하는 지원팀" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">기능으로 만드는 차이</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-2">
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
