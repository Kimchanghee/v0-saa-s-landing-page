export default function FeaturesHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Creator Control의 모든 기능</h1>
          <p className="text-lg text-muted-foreground mb-8">
            개인 크리에이터부터 대규모 팀까지, 모든 사용자를 위한 강력한 기능들을 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
              무료로 시작하기
            </button>
            <button className="px-8 py-3 border border-border hover:bg-card rounded-lg font-semibold">가격 보기</button>
          </div>
        </div>
      </div>
    </section>
  )
}
