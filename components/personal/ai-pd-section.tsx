export default function AIpDSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-pink-500 mb-3 block">다중 채널 관리의 새로운 표준</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">당신의 채널 관리 담당자, AI PD</h2>
            <p className="text-lg text-muted-foreground mb-8">
              기존에 하루종일 분산된 채널들을 오가며 확인하던 시간을 획기적으로 단축하세요. 모든 채널의 현황을 한눈에
              보고, AI PD에게 질문하면 각 채널에 최적화된 전략을 받을 수 있습니다.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-pink-500 font-bold flex-shrink-0 text-xl">⚡</span>
                <div>
                  <strong>다중 채널 통합 관리</strong>
                  <p className="text-sm text-muted-foreground">
                    YouTube, 인스타, 틱톡 등 모든 채널을 한 페이지에서 관리
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-pink-500 font-bold flex-shrink-0 text-xl">📊</span>
                <div>
                  <strong>채널별 맞춤 전략</strong>
                  <p className="text-sm text-muted-foreground">AI PD가 각 채널의 특성을 파악하고 최적화 방안 제시</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-pink-500 font-bold flex-shrink-0 text-xl">⏱</span>
                <div>
                  <strong>시간 단축</strong>
                  <p className="text-sm text-muted-foreground">기존 수십 분 → 단 1분으로 모든 채널 현황 파악</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl p-8 h-auto flex flex-col items-center justify-center border border-pink-500/30 space-y-4">
            <div className="w-full max-w-sm space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">❌ 기존 방식</p>
                <p className="text-xs text-muted-foreground">
                  YouTube 확인 → 인스타 확인 → 틱톡 확인 → 구글 애널리틱스 확인
                </p>
                <p className="text-xs font-bold text-red-500 mt-2">🕐 30분 이상 소요</p>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">✅ Creator Control</p>
                <p className="text-xs text-muted-foreground">한 대시보드에서 모든 채널 현황 확인 + AI PD 상담</p>
                <p className="text-xs font-bold text-pink-500 mt-2">⚡ 1분이면 충분!</p>
              </div>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">매일 반복되는 29분을 절약하세요</p>
          </div>
        </div>
      </div>
    </section>
  )
}
