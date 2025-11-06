export default function AnalyticsHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              데이터 기반 성장,
              <span className="text-orange-500"> 이제 한눈에</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              복잡한 분석 도구는 이제 그만. Creator Control의 분석이면 충분합니다.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              채널 성과, 시청자 트렌드, 경쟁사 분석까지 한 대시보드에서 실시간으로 확인하고, AI PD의 인사이트로 데이터
              기반의 의사결정을 내리세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
                분석 시작하기
              </button>
              <button className="px-8 py-3 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
                데모 보기
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-2xl p-8 h-80 flex flex-col items-center justify-center border border-orange-500/30 space-y-4">
            <div className="w-full max-w-sm space-y-3">
              <div className="p-3 bg-card rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">총 조회수</p>
                <p className="text-2xl font-bold">1.2M</p>
                <p className="text-xs text-green-500">↑ 34% (지난달 대비)</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">참여율</p>
                  <p className="font-bold">8.2%</p>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">신규 구독</p>
                  <p className="font-bold">+245</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
