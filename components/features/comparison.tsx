export default function FeaturesComparison() {
  const allFeatures = [
    "실시간 채널 분석",
    "AI PD 상담",
    "콘텐츠 기획 지원",
    "팬 커뮤니티 관리",
    "수익 최적화",
    "멀티 채널 지원",
    "성장 로드맵",
    "협업 기회 매칭",
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">메인 vs 기능 페이지</h2>
          <p className="text-lg text-muted-foreground">메인 페이지의 개요와 기능 페이지의 상세 비교</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-semibold">기능</th>
                <th className="text-center py-4 px-6 font-semibold">메인 페이지</th>
                <th className="text-center py-4 px-6 font-semibold">기능 페이지</th>
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-card/50">
                  <td className="py-4 px-6">{feature}</td>
                  <td className="text-center text-blue-500">✓</td>
                  <td className="text-center text-green-500 font-bold">상세설명</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-6 text-center">
          메인 페이지는 개요 중심, 기능 페이지는 각 기능의 상세 설명과 사용 방법을 제공합니다.
        </p>
      </div>
    </section>
  )
}
