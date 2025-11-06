export default function BusinessPersonas() {
  const personas = [
    {
      name: "이창호",
      role: "MCN 대표",
      quote: "수십 명의 크리에이터를 관리하는 것이 이렇게 쉬워질 수 있다니! 정말 효율적입니다.",
      goal: "팀 성과 최대화",
      needs: ["팀 대시보드", "계약 관리", "성과 분석"],
    },
    {
      name: "정하영",
      role: "에이전시 매니저",
      quote: "클라이언트별 리포팅이 자동화되니까 시간이 정말 많이 절약됩니다.",
      goal: "클라이언트 관리",
      needs: ["커스텀 리포트", "성과 추적", "자동화"],
    },
    {
      name: "최진우",
      role: "콘텐츠 디렉터",
      quote: "팀 전체의 진행 상황을 실시간으로 볼 수 있어서 의사결정이 빨라졌습니다.",
      goal: "프로젝트 관리",
      needs: ["실시간 모니터링", "협업 도구", "분석"],
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">비즈니스 사용자 사례</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => (
            <div key={idx} className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold">{persona.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{persona.role}</p>
              <blockquote className="mb-6 italic text-muted-foreground">"{persona.quote}"</blockquote>
              <div className="border-t border-border pt-4 text-sm">
                <strong className="block mb-3">목표</strong>
                <p className="text-muted-foreground">{persona.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
