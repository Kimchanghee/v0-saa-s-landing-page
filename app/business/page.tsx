import Header from "@/components/header"
import BusinessHero from "@/components/business/hero"
import BusinessAIPD from "@/components/business/ai-pd-section"
import BusinessBenefits from "@/components/business/benefits"
import BusinessUseCases from "@/components/business/use-cases"
import BusinessMetrics from "@/components/business/metrics"
import BusinessPersonas from "@/components/business/personas"
import BusinessComparison from "@/components/business/plan-comparison"
import BusinessPlans from "@/components/business/plans"
import BusinessCTA from "@/components/business/cta"
import Footer from "@/components/footer"

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <BusinessHero />
      <BusinessAIPD />
      <BusinessBenefits />
      <BusinessUseCases />
      <BusinessMetrics />
      <BusinessPersonas />
      <BusinessComparison />
      <BusinessPlans />
      <BusinessCTA />
      <Footer />
    </main>
  )
}
