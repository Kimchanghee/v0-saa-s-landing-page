export default function LandingCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">지금 바로 시작하세요</h2>
        <p className="text-xl text-muted-foreground mb-8">Creator Control과 함께 당신의 채널을 한 단계 성장시키세요.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors">
            무료로 시작하기
          </button>
          <button className="px-10 py-4 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
            서비스 살펴보기
          </button>
        </div>
        <p className="text-muted-foreground mt-6">신용카드 불필요. 5분 안에 시작하세요.</p>
      </div>
    </section>
  )
}
