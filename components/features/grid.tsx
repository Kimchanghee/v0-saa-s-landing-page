export default function FeaturesGrid() {
  const features = [
    {
      category: "분석 & 인사이트",
      items: [
        {
          title: "실시간 채널 분석",
          description: "시청자, 조회수, 구독자 변화를 실시간으로 분석",
          icon: "📊",
        },
        {
          title: "콘텐츠 성과 추적",
          description: "각 영상의 성과를 상세히 분석하고 트렌드 파악",
          icon: "📈",
        },
        {
          title: "시청자 분석",
          description: "시청자 구성, 지역, 관심사를 깊이 있게 분석",
          icon: "👥",
        },
      ],
    },
    {
      category: "AI PD 기능",
      items: [
        {
          title: "AI 맞춤형 조언",
          description: "당신의 채널에 맞는 AI PD의 개인화된 전략 제시",
          icon: "🤖",
        },
        {
          title: "콘텐츠 기획 지원",
          description: "시청자 기반의 콘텐츠 아이디어와 주제 추천",
          icon: "✨",
        },
        {
          title: "성장 전략 수립",
          description: "단계별 성장 로드맵과 목표 달성 방안 제공",
          icon: "🎯",
        },
      ],
    },
    {
      category: "관리 & 자동화",
      items: [
        {
          title: "팬 커뮤니티 관리",
          description: "댓글, DM, 팬 정보를 한곳에서 효율적으로 관리",
          icon: "💬",
        },
        {
          title: "자동화 도구",
          description: "반복적인 작업을 자동화하고 시간 절약",
          icon: "⚙️",
        },
        {
          title: "멀티 채널 관리",
          description: "유튜브, 트위치, 인스타그램 등 다양한 채널 통합",
          icon: "🔗",
        },
      ],
    },
    {
      category: "수익화 & 성장",
      items: [
        {
          title: "수익 최적화",
          description: "광고, 후원, 멤버십 등 다양한 수익화 전략 제시",
          icon: "💰",
        },
        {
          title: "협업 기회",
          description: "적절한 협업 파트너 추천 및 매칭",
          icon: "🤝",
        },
        {
          title: "성장 대시보드",
          description: "월별, 분기별 성장 지표를 시각화하여 제시",
          icon: "📉",
        },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 기능</h2>
          <p className="text-lg text-muted-foreground">Creator Control이 제공하는 완전한 기능 세트</p>
        </div>
        {features.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-600">{section.category}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {section.items.map((feature, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-6 border border-border hover:border-blue-500/50 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
