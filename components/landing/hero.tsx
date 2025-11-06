export default function LandingHero() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              크리에이터의 모든 것을 한곳에서
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              영상 편집부터 팬 관리, 수익 분석까지. Creator Control Center는 당신의 성공을 위한 모든 도구를 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors">
                크리에이터 시작하기
              </button>
              <button className="px-8 py-3 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
                팀 관리자로 시작
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm">
                <span className="text-pink-500">★</span> 무료로 시작
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm">
                <span className="text-purple-500">★</span> 24시간 지원
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm">
                <span className="text-orange-500">★</span> 1분 가입
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-purple-500/30">
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-lg flex items-center justify-center text-muted-foreground">
                대시보드 미리보기
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 bg-orange-500/10 rounded border border-orange-500/30 flex items-center justify-center text-sm font-semibold">
                  YouTube
                </div>
                <div className="h-16 bg-purple-500/10 rounded border border-purple-500/30 flex items-center justify-center text-sm font-semibold">
                  Twitch
                </div>
                <div className="h-16 bg-pink-500/10 rounded border border-pink-500/30 flex items-center justify-center text-sm font-semibold">
                  TikTok
                </div>
                <div className="h-16 bg-blue-500/10 rounded border border-blue-500/30 flex items-center justify-center text-sm font-semibold">
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
