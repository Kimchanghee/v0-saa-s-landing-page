export default function LandingTestimonials() {
  const testimonials = [
    {
      quote: "Creator Control 덕분에 콘텐츠 제작에만 집중할 수 있게 되었습니다. 관리 시간이 50% 줄었어요!",
      name: "김지은",
      title: "유튜브 크리에이터",
    },
    {
      quote: "팀 전체의 성과를 한 대시보드에서 볼 수 있어서 정말 편합니다. 강력하고 직관적입니다.",
      name: "박준호",
      title: "MCN 대표",
    },
    {
      quote: "가격 대비 기능이 정말 좋습니다. 이미 비용을 충분히 절감했습니다.",
      name: "이수정",
      title: "라이브 스트리머",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">크리에이터들의 후기</h2>
          <p className="text-lg text-muted-foreground">Creator Control을 사용하는 크리에이터들의 이야기</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card rounded-xl p-8 border border-border">
              <p className="text-lg mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
