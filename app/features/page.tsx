import Header from "@/components/header"
import FeaturesHero from "@/components/features/hero"
import FeaturesGrid from "@/components/features/grid"
import FeaturesComparison from "@/components/features/comparison"
import FeaturesMetrics from "@/components/features/metrics"
import FeaturesCTA from "@/components/features/cta"
import Footer from "@/components/footer"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <FeaturesHero />
      <FeaturesGrid />
      <FeaturesComparison />
      <FeaturesMetrics />
      <FeaturesCTA />
      <Footer />
    </main>
  )
}
