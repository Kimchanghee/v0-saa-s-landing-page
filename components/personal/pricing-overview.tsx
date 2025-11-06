export default function PricingOverview() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">요금 비교</h2>
          <p className="text-lg text-muted-foreground">각 요금제의 기능을 비교해보세요</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-semibold">기능</th>
                <th className="text-center py-4 px-6 font-semibold">무료</th>
                <th className="text-center py-4 px-6 font-semibold">프로</th>
                <th className="text-center py-4 px-6 font-semibold">프리미엄</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">기본 분석</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">고급 분석</td>
                <td className="text-center">-</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">팬 관리</td>
                <td className="text-center">-</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>
              <tr className="hover:bg-card/50">
                <td className="py-4 px-6">AI 최적화</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
