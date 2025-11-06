export default function ServicesPillars() {
  const pillars = [
    {
      tagline: "분석",
      title: "콘텐츠 분석 서비스",
      description: "매월 전문가가 작성한 상세 분석 리포트를 받아보세요.",
      bullets: ["경쟁사 분석", "시청자 심화 분석", "성장 추세 분석", "콘텐츠 최적화 제안"],
    },
    {
      tagline: "전략",
      title: "콘텐츠 전략 컨설팅",
      description: "전문가와 함께 채널의 장기 성장 전략을 수립합니다.",
      bullets: ["채널 감사", "시장 분석", "타겟 오디언스 정의", "12개월 로드맵"],
    },
    {
      tagline: "최적화",
      title: "채널 최적화 서비스",
      description: "프로필, 썸네일, 제목 등 모든 요소를 최적화합니다.",
      bullets: ["프로필 최적화", "메타데이터 최적화", "SEO 최적화", "A/B 테스트"],
    },
    {
      tagline: "교육",
      title: "크리에이터 교육 프로그램",
      description: "성공하는 크리에이터가 되기 위한 교육을 제공합니다.",
      bullets: ["영상 제작 기초", "채널 성장 전략", "수익화 방법", "커뮤니티 관리"],
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 서비스</h2>
          <p className="text-lg text-muted-foreground">크리에이터 성공을 위한 4가지 핵심 서비스</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:border-orange-500/50 transition-colors"
            >
              <span className="text-sm font-semibold text-orange-500">{pillar.tagline}</span>
              <h3 className="text-xl font-bold mt-3 mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{pillar.description}</p>
              <ul className="space-y-2 text-sm">
                {pillar.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-orange-500">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
