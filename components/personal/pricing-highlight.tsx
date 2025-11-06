export default function PricingHighlight() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">AI PD 기능 - 요금제별 포함 현황</h2>
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
                <td className="py-4 px-6">AI 채널 분석</td>
                <td className="text-center text-green-500">✓</td>
                <td className="text-center text-green-500">✓</td>
                <td className="text-center text-green-500">✓</td>
              </tr>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">AI PD 상담 (월 3회)</td>
                <td className="text-center text-gray-400">-</td>
                <td className="text-center text-green-500">✓</td>
                <td className="text-center text-green-500">✓</td>
              </tr>
              <tr className="border-b border-border hover:bg-card/50">
                <td className="py-4 px-6">AI PD 상담 (무제한)</td>
                <td className="text-center text-gray-400">-</td>
                <td className="text-center text-gray-400">-</td>
                <td className="text-center text-green-500">✓</td>
              </tr>
              <tr className="hover:bg-card/50">
                <td className="py-4 px-6">맞춤형 성장 로드맵</td>
                <td className="text-center text-gray-400">-</td>
                <td className="text-center text-gray-400">-</td>
                <td className="text-center text-green-500">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
