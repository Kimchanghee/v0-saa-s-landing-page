export default function BusinessCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">팀의 성장을 시작하세요</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Creator Control로 팀을 효율적으로 관리하고 성과를 극대화하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
            무료 상담받기
          </button>
          <button className="px-10 py-4 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
            문의하기
          </button>
        </div>
      </div>
    </section>
  )
}
