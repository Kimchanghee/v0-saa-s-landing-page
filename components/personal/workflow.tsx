export default function PersonalWorkflow() {
  const steps = [
    {
      label: "1일차",
      title: "온보딩",
      detail: "튜토리얼을 따라 기본 설정을 완료하세요.",
    },
    {
      label: "1주일",
      title: "첫 분석",
      detail: "첫 주간 분석 보고서를 받아보세요.",
    },
    {
      label: "1개월",
      title: "최적화",
      detail: "데이터 기반의 전략으로 채널을 최적화하세요.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">이용 흐름</h2>
          <p className="text-lg text-muted-foreground">Creator Control 시작부터 성장까지의 여정</p>
        </div>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-pink-500/30">
                <span className="font-bold text-center text-sm">{step.label}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
