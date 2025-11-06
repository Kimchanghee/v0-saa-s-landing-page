export default function ServicesCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">전문 서비스로 시작하세요</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Creator Control의 전문가 팀이 당신의 채널 성장을 함께합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
            서비스 신청하기
          </button>
          <button className="px-10 py-4 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
            상담받기
          </button>
        </div>
      </div>
    </section>
  )
}
