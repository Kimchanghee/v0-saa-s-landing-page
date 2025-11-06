export default function PersonalUseCases() {
  const useCases = [
    {
      scenario: "조회수 정체",
      question: "지난 3개월 조회수가 늘지 않아요",
      aiResponse: "→ 콘텐츠 주기, 업로드 시간, 주제 다양성을 분석해 개선안 제시",
    },
    {
      scenario: "채널 방향성",
      question: "어떤 콘텐츠를 만들어야 할까요?",
      aiResponse: "→ 시청자 구성, 경쟁사 분석, 트렌드를 기반해 최적 콘텐츠 제안",
    },
    {
      scenario: "수익 증대",
      question: "현재 수익을 2배로 늘리려면?",
      aiResponse: "→ 채널 규모에 맞는 수익화 방법을 단계별로 제안",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">AI PD와 함께하는 사례</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-background rounded-xl p-6 border border-border">
              <div className="text-sm font-semibold text-pink-500 mb-3">{useCase.scenario}</div>
              <p className="font-semibold mb-4">"{useCase.question}"</p>
              <p className="text-sm text-muted-foreground">{useCase.aiResponse}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
