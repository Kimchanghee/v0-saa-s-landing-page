export default function SupportCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">아직도 도움이 필요하신가요?</h2>
        <p className="text-xl text-muted-foreground mb-8">우리의 전문가 팀이 당신의 모든 질문에 답변해드립니다.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
            지금 문의하기
          </button>
          <button className="px-10 py-4 border border-border hover:bg-card rounded-lg font-semibold transition-colors">
            개인용 요금제 보기
          </button>
        </div>
      </div>
    </section>
  )
}
