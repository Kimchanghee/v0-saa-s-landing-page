import Header from "@/components/header"
import SupportHero from "@/components/support/hero"
import SupportCards from "@/components/support/cards"
import SupportContact from "@/components/support/contact"
import SupportCTA from "@/components/support/cta"
import Footer from "@/components/footer"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <SupportHero />
      <SupportCards />
      <SupportContact />
      <SupportCTA />
      <Footer />
    </main>
  )
}
