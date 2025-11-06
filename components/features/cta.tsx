export default function FeaturesCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">모든 기능을 경험해보세요</h2>
        <p className="text-xl text-muted-foreground mb-8">
          기능 페이지에서 각 도구의 상세한 설명을 확인하고, 당신의 채널에 필요한 것을 찾아보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
            무료로 시작하기
          </button>
          <button className="px-10 py-4 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
            개인용 플랜 보기
          </button>
        </div>
      </div>
    </section>
  )
}
