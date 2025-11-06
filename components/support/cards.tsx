export default function SupportCards() {
  const cards = [
    {
      title: "사용 가이드",
      description: "Creator Control 사용 방법과 팁을 배워보세요.",
      items: ["시작하기", "기본 기능 설명", "고급 기능 가이드", "FAQ"],
    },
    {
      title: "기술 지원",
      description: "기술적인 문제 해결을 위한 도움을 받으세요.",
      items: ["로그인 문제", "기능 불일치", "데이터 동기화", "보안 문의"],
    },
    {
      title: "비즈니스 문의",
      description: "요금제 변경, 청구, 계약 관련 문의입니다.",
      items: ["요금제 변경", "청구 문제", "계약 관련", "대량 라이선스"],
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">지원 카테고리</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-8 border border-border hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted-foreground mb-6">{card.description}</p>
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-blue-500">→</span>
                    <a href="#" className="hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
