import Header from "@/components/header"
import ServicesHero from "@/components/services/hero"
import ServicesPillars from "@/components/services/pillars"
import ServicesOutcomes from "@/components/services/outcomes"
import ServicesCTA from "@/components/services/cta"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ServicesHero />
      <ServicesPillars />
      <ServicesOutcomes />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
