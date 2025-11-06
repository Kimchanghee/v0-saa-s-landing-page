import Header from "@/components/header"
import AnalyticsHero from "@/components/analytics/hero"
import AnalyticsFeatures from "@/components/analytics/features"
import AnalyticsUseCases from "@/components/analytics/use-cases"
import AnalyticsMetrics from "@/components/analytics/metrics"
import AnalyticsCTA from "@/components/analytics/cta"
import Footer from "@/components/footer"

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <AnalyticsHero />
      <AnalyticsFeatures />
      <AnalyticsUseCases />
      <AnalyticsMetrics />
      <AnalyticsCTA />
      <Footer />
    </main>
  )
}
