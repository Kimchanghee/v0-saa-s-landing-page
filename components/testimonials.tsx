import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "김민지",
    role: "유튜브 크리에이터 (50만 구독자)",
    content: "Creator Control Center 덕분에 편집 시간을 3시간에서 30분으로 줄였어요. 진짜 대박입니다!",
    rating: 5,
  },
  {
    name: "박준호",
    role: "쇼핑몰 운영자",
    content: "팬 관리와 상품 판매를 한 플랫폼에서 할 수 있어서 너무 편합니다. 이제 수익도 2배가 됐어요.",
    rating: 5,
  },
  {
    name: "이지수",
    role: "팟캐스트 호스트 (월 10만 리스너)",
    content: "분석 기능이 정말 강력해요. 어떤 주제가 인기인지 한눈에 알 수 있어서 콘텐츠 기획이 쉬워졌어요.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-pink-500 font-semibold mb-2">크리에이터 추천</p>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">성공하는 크리에이터들이 사용 중</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border p-8 flex flex-col">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-pink-500 text-pink-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 flex-grow text-lg leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
