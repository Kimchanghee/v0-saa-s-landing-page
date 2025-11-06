import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-pink-500/10 via-background to-purple-600/10">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">지금 바로 시작해보세요</h2>
        <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
          수천 명의 크리에이터가 이미 Creator Control Center로 성공하고 있습니다. 오늘 무료로 시작하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white h-12 px-8 text-base flex items-center justify-center gap-2">
            무료 시작하기 <ArrowRight size={18} />
          </Button>
          <Button variant="outline" className="h-12 px-8 text-base bg-transparent">
            데모 예약
          </Button>
        </div>
      </div>
    </section>
  )
}
