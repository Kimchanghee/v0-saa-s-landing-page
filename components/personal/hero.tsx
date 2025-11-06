export default function PersonalHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              여러 채널 관리,
              <span className="text-pink-500"> 이제 1분이면 충분해</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              기존에 수십 분이 걸리던 채널 현황 확인을 단 1분만에 한눈에 파악하세요.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              YouTube, 인스타그램, 틱톡 등 모든 채널의 데이터를 한 페이지에서 관리하고, AI PD와 함께 최적의 성장 전략을
              수립하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors">
                지금 시작하기
              </button>
              <button className="px-8 py-3 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
                요금 보기
              </button>
            </div>
            {/* 신뢰도 표시 */}
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-pink-500 font-bold">●●●●●</span>
                <span>4.9/5</span>
              </div>
              <span>|</span>
              <span>2,300+ 크리에이터가 신뢰 중</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl p-8 h-80 flex flex-col items-center justify-center border border-pink-500/30 space-y-4">
            <div className="w-full max-w-sm space-y-3">
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  ▶
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">YouTube</p>
                  <p className="text-xs text-muted-foreground">조회수 ↑ 45%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  📷
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Instagram</p>
                  <p className="text-xs text-muted-foreground">팔로워 ↑ 28%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  ♪
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">TikTok</p>
                  <p className="text-xs text-muted-foreground">좋아요 ↑ 62%</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4">모든 채널을 한 대시보드에서 관리</p>
          </div>
        </div>
      </div>
    </section>
  )
}
