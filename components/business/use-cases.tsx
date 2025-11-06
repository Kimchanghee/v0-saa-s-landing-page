export default function BusinessUseCases() {
  const useCases = [
    {
      scenario: "팀 성과 관리",
      question: "각 크리에이터별로 성과가 어떻게 될까요?",
      aiResponse: "→ 개별 분석 및 팀 전체 성과 예측, 개선 방안 제시",
    },
    {
      scenario: "협업 전략",
      question: "어떤 크리에이터들이 함께 협업하면 좋을까요?",
      aiResponse: "→ 시너지 분석을 통해 최적의 협업 조합 제안",
    },
    {
      scenario: "리소스 배분",
      question: "마케팅 예산을 어떻게 배분해야 할까요?",
      aiResponse: "→ ROI 분석 기반의 최적 예산 배분안 제시",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">팀 관리자의 AI PD 활용 사례</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-background rounded-xl p-6 border border-border">
              <div className="text-sm font-semibold text-purple-500 mb-3">{useCase.scenario}</div>
              <p className="font-semibold mb-4">"{useCase.question}"</p>
              <p className="text-sm text-muted-foreground">{useCase.aiResponse}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
