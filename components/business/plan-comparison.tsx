export default function BusinessComparison() {
  const items = [
    {
      label: "플랜 1",
      title: "팀 5명 플랜",
      detail: "스타트업과 소규모 팀을 위한 기본 팀 관리 기능.",
    },
    {
      label: "플랜 2",
      title: "팀 30명 플랜",
      detail: "성장하는 에이전시를 위한 고급 분석과 전략 수립 기능.",
    },
    {
      label: "플랜 3",
      title: "무제한 팀 플랜",
      detail: "대규모 조직을 위한 완전한 팀 관리와 커스텀 서비스.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">비즈니스 플랜 비교</h2>
          <p className="text-lg text-muted-foreground">팀 규모에 맞는 플랜을 선택하세요</p>
        </div>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
