export default function BusinessPricingOverview() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">비즈니스 요금 비교</h2>
          <p className="text-lg text-muted-foreground">팀 규모에 맞는 요금제를 선택하세요</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-semibold">기능</th>
                <th className="text-center py-4 px-6 font-semibold">스타트업</th>
                <th className="text-center py-4 px-6 font-semibold">프로</th>
                <th className="text-center py-4 px-6 font-semibold">엔터프라이즈</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">팀 대시보드</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">멤버 관리 (최대)</td>
                <td className="text-center">5명</td>
                <td className="text-center">30명</td>
                <td className="text-center">무제한</td>
              </tr>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">계약 관리</td>
                <td className="text-center">-</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>
              <tr className="hover:bg-card/50">
                <td className="py-4 px-6">커스텀 리포팅</td>
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
