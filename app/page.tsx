import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Solution from "@/components/solution"
import Traction from "@/components/traction"
import Cta from "@/components/cta"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Traction />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  )
}
