export default function BusinessAIPD() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl p-8 h-auto flex flex-col items-center justify-center border border-purple-500/30 space-y-4">
            <div className="w-full max-w-sm space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">❌ 기존 팀 관리</p>
                <p className="text-xs text-muted-foreground mb-2">각 팀원 개별 확인, 성과 분석, 피드백</p>
                <p className="text-xs font-bold text-red-500">🕐 1명당 15분 × 30명 = 약 7~8시간</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">✅ Creator Control</p>
                <p className="text-xs text-muted-foreground mb-2">통합 대시보드 + AI PD 전략</p>
                <p className="text-xs font-bold text-purple-600">⚡ 30명을 1시간 이내로 관리</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold text-purple-600 mb-3 block">팀 전체 성장 가속화</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">팀의 AI 경영 전략가</h2>
            <p className="text-lg text-muted-foreground mb-8">
              수십~수백 명의 팀원을 관리하면서 개별 피드백에 시간을 쏟을 여유가 없으신가요? AI PD가 팀 전체의 성과를
              분석하고, 최적의 운영 전략을 제시해 관리 시간을 극적으로 단축하세요.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-purple-600 font-bold flex-shrink-0 text-xl">👥</span>
                <div>
                  <strong>대규모 팀 관리</strong>
                  <p className="text-sm text-muted-foreground">
                    수십~수백 명의 크리에이터를 한 대시보드에서 효율적으로 관리
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-purple-600 font-bold flex-shrink-0 text-xl">📈</span>
                <div>
                  <strong>팀 성과 분석</strong>
                  <p className="text-sm text-muted-foreground">AI PD가 전체 팀의 강점, 문제점, 기회를 종합 분석</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-purple-600 font-bold flex-shrink-0 text-xl">🎯</span>
                <div>
                  <strong>전략적 운영</strong>
                  <p className="text-sm text-muted-foreground">리소스 배분, 협업 전략, 성장 로드맵을 AI와 함께 수립</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
