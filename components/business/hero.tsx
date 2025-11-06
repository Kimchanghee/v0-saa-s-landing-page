export default function BusinessHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              수십 명의 크리에이터 관리,
              <span className="text-purple-600"> 이제 1시간이면 끝나요</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              기존에 하루 5시간 이상 걸리던 팀 전체 관리를 1시간으로 단축하세요.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              크리에이터 기업 또는 강사라면, 수십~수백 명의 크리에이터/학생을 효율적으로 관리하면서 AI PD와 함께 팀
              전체의 성장 전략을 수립하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
                관리자로 시작하기
              </button>
              <button className="px-8 py-3 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
                요금 보기
              </button>
            </div>
            {/* 신뢰도 표시 */}
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">●●●●●</span>
                <span>4.8/5</span>
              </div>
              <span>|</span>
              <span>250+ 팀/기업이 신뢰 중</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl p-8 h-80 flex flex-col items-center justify-center border border-purple-500/30 space-y-4">
            <div className="w-full max-w-sm space-y-3">
              <div className="p-3 bg-card rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-2">활성 크리에이터</p>
                <p className="text-2xl font-bold">127명</p>
                <p className="text-xs text-green-500 mt-1">↑ 23% 월별 증가</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">평균 수익</p>
                  <p className="font-bold">$2.5K</p>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">팀 성장률</p>
                  <p className="font-bold">+45%</p>
                </div>
              </div>
              <div className="p-3 bg-card rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-2">관리 시간</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">기존: 5시간</span>
                  <span className="text-xs text-muted-foreground">→</span>
                  <span className="text-sm font-bold text-purple-600">1시간</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
