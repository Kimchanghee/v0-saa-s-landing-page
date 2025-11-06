export default function PersonalPersonas() {
  const personas = [
    {
      name: "서지은",
      role: "뷰티 유튜버",
      quote: "분석 도구가 없어서 막연했는데, Creator Control 덕분에 전략을 세울 수 있게 되었습니다.",
      goal: "유튜브 채널 성장",
      needs: ["상세한 분석", "팬 관리", "수익 추적"],
    },
    {
      name: "김준호",
      role: "게임 스트리머",
      quote: "실시간으로 시청자 반응을 볼 수 있어서 정말 도움됩니다. 채팅도 효율적으로 관리할 수 있어요.",
      goal: "스트림 퀄리티 향상",
      needs: ["실시간 분석", "채팅 관리", "성장 팁"],
    },
    {
      name: "박민지",
      role: "음악 크리에이터",
      quote: "여러 플랫폼을 한곳에서 관리하니까 시간이 정말 많이 절약됩니다.",
      goal: "다중 플랫폼 관리",
      needs: ["통합 대시보드", "자동화", "협업 도구"],
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">사용자 사례</h2>
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
