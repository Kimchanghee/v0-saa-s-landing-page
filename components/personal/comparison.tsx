export default function PersonalComparison() {
  const items = [
    {
      label: "Step 1",
      title: "계획 선택",
      detail: "당신의 필요에 맞는 요금제를 선택하세요.",
    },
    {
      label: "Step 2",
      title: "계정 생성",
      detail: "5분 안에 계정을 만들고 채널을 연결하세요.",
    },
    {
      label: "Step 3",
      title: "분석 시작",
      detail: "즉시 상세한 분석과 인사이트를 받아보세요.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">요금제 비교</h2>
        </div>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
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
