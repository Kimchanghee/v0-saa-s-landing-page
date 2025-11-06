export default function LandingJourney() {
  const steps = [
    { label: "Step 1", title: "가입하기", description: "5초 만에 계정을 만들고 시작하세요." },
    { label: "Step 2", title: "채널 연결", description: "YouTube, Twitch 등 플랫폼을 연결합니다." },
    { label: "Step 3", title: "분석 시작", description: "즉시 실시간 분석을 보고 인사이트를 얻습니다." },
    { label: "Step 4", title: "성장하기", description: "데이터 기반의 전략으로 채널을 성장시킵니다." },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">시작 가이드</h2>
          <p className="text-lg text-muted-foreground">4단계로 Creator Control을 시작하세요</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-6 w-12 border-t-2 border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
