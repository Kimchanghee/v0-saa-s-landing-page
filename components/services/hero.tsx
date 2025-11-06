export default function ServicesHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">우리의 서비스</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Creator Control이 제공하는 다양한 서비스로 당신의 채널을 성공으로 이끕니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold">
              서비스 신청
            </button>
            <button className="px-8 py-3 border border-border hover:bg-card rounded-lg font-semibold">
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
