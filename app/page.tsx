import Header from "@/components/header"
import LandingHero from "@/components/landing/hero"
import LandingMetrics from "@/components/landing/metrics"
import LandingFeatures from "@/components/landing/features"
import PersonaSection from "@/components/landing/persona-section"
import LandingJourney from "@/components/landing/journey"
import LandingTestimonials from "@/components/landing/testimonials"
import LandingCTA from "@/components/landing/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <LandingHero />
      <LandingMetrics />
      <LandingFeatures />
      <PersonaSection />
      <LandingJourney />
      <LandingTestimonials />
      <LandingCTA />
      <Footer />
    </main>
  )
}
