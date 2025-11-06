import Header from "@/components/header"
import PersonalHero from "@/components/personal/hero"
import AIpDSection from "@/components/personal/ai-pd-section"
import PersonalBenefits from "@/components/personal/benefits"
import PersonalUseCases from "@/components/personal/use-cases"
import PersonalMetrics from "@/components/personal/metrics"
import PersonalPersonas from "@/components/personal/personas"
import PricingHighlight from "@/components/personal/pricing-highlight"
import PersonalPlans from "@/components/personal/plans"
import PersonalCTA from "@/components/personal/cta"
import Footer from "@/components/footer"

export default function PersonalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <PersonalHero />
      <AIpDSection />
      <PersonalBenefits />
      <PersonalUseCases />
      <PersonalMetrics />
      <PersonalPersonas />
      <PricingHighlight />
      <PersonalPlans />
      <PersonalCTA />
      <Footer />
    </main>
  )
}
