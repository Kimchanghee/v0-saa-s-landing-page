export default function PersonaSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-pink-500/10 rounded-xl p-8 border border-pink-500/30">
            <h3 className="text-2xl font-bold mb-4">개인 크리에이터를 위해</h3>
            <p className="text-muted-foreground mb-6">1인 크리에이터가 성장할 수 있는 모든 도구를 제공합니다.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-pink-500">✓</span>
                <span>개인 팬 관리</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-500">✓</span>
                <span>수익 추적</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-500">✓</span>
                <span>성장 전략 제안</span>
              </li>
            </ul>
            <button className="text-pink-500 hover:text-pink-600 font-semibold">자세히 보기 →</button>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4">팀 관리자를 위해</h3>
            <p className="text-muted-foreground mb-6">여러 크리에이터를 효율적으로 관리하고 팀을 성장시키세요.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <span>팀 대시보드</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <span>성과 분석</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <span>계약 관리</span>
              </li>
            </ul>
            <button className="text-purple-500 hover:text-purple-600 font-semibold">자세히 보기 →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
