export default function LandingFeatures() {
  const features = [
    {
      tag: "분석",
      title: "실시간 성과 분석",
      description: "모든 플랫폼의 성과를 한눈에 파악하고 트렌드를 분석합니다.",
    },
    {
      tag: "자동화",
      title: "콘텐츠 자동화",
      description: "반복 작업을 자동화하고 더 많은 창작에 집중하세요.",
    },
    {
      tag: "협업",
      title: "팀 협업 도구",
      description: "팀원들과 효율적으로 협업하고 프로젝트를 관리합니다.",
    },
    {
      tag: "수익",
      title: "수익 최적화",
      description: "다양한 수익 채널을 통합하고 최대한 활용하세요.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 기능</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">크리에이터의 성공을 위한 가장 강력한 도구들</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-background rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors"
            >
              <span className="text-sm font-semibold text-pink-500">{feature.tag}</span>
              <h3 className="text-xl font-bold mt-3 mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
