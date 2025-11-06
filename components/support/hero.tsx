export default function SupportHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">지원 센터</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Creator Control 사용 중 도움이 필요하신가요? 우리의 지원팀이 항상 준비되어 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">
                문의하기
              </button>
              <button className="px-8 py-3 border border-border hover:bg-card rounded-lg font-semibold">
                요금제 보기
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl p-8 h-64 flex items-center justify-center border border-blue-500/30">
            <div className="text-muted-foreground">지원팀 연결</div>
          </div>
        </div>
      </div>
    </section>
  )
}
