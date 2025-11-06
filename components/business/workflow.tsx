export default function BusinessWorkflow() {
  const steps = [
    {
      label: "1주일",
      title: "팀 설정",
      detail: "팀 멤버를 초대하고 크리에이터 프로필을 등록합니다.",
    },
    {
      label: "1개월",
      title: "AI PD 분석",
      detail: "AI PD가 팀 전체 성과를 분석하고 전략을 제시합니다.",
    },
    {
      label: "3개월",
      title: "전략 실행",
      detail: "제시된 전략을 실행하고 팀 성과를 극대화합니다.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">비즈니스 이용 흐름</h2>
          <p className="text-lg text-muted-foreground">팀 시작부터 성장까지의 여정</p>
        </div>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
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
