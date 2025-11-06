export default function AnalyticsMetrics() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">500+</div>
            <p className="text-muted-foreground">추적 가능한 지표</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">1초</div>
            <p className="text-muted-foreground">데이터 업데이트 속도</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">95%</div>
            <p className="text-muted-foreground">사용자 만족도</p>
          </div>
        </div>
      </div>
    </section>
  )
}
