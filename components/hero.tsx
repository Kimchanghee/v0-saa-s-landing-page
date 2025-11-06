import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-purple-500/5 py-20 md:py-32">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6 border border-purple-500/30">
            <span className="text-sm font-medium">✨ 크리에이터를 위한 솔루션</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
            당신의 창작 활동을{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">한곳에서</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
            영상 편집, 콘텐츠 관리, 팬 상호작용을 모두 한 플랫폼에서 관리하세요. Creator Control Center에서 시간을
            절약하고 창작에 집중하세요.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white h-12 px-8 text-base flex items-center justify-center gap-2">
              무료 체험 시작 <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-base bg-transparent">
              데모 보기
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-background"
                />
              ))}
            </div>
            <p>
              <span className="font-semibold text-foreground">5,000+</span> 명의 크리에이터가 이미 사용 중입니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
