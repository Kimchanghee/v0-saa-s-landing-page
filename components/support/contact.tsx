export default function SupportContact() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">직접 문의하기</h2>
          <p className="text-lg text-muted-foreground">우리의 지원팀에 직접 연락하세요</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-background rounded-xl p-8 border border-border text-center">
            <h3 className="text-xl font-bold mb-4">이메일</h3>
            <p className="text-muted-foreground mb-4">support@creatorcontrol.com</p>
            <p className="text-sm text-muted-foreground">평균 응답 시간: 24시간</p>
          </div>
          <div className="bg-background rounded-xl p-8 border border-border text-center">
            <h3 className="text-xl font-bold mb-4">사무실 시간</h3>
            <p className="text-muted-foreground mb-2">월-금 09:00-18:00 (KST)</p>
            <p className="text-sm text-muted-foreground">토일 휴무</p>
          </div>
        </div>
      </div>
    </section>
  )
}
