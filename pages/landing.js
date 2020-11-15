import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Headline from "../components/Headline"
import Features from "../components/Features"
import CallToAction from "../components/Cta"
import CallToAction2 from "../components/Cta2"
import Testimonials from "../components/Testimonials"
import FeatureSummary from "../components/FeatureSummary"
import Pricing from "../components/Pricing"


export default function Landing() {
  return (
    <Layout>
      <Hero  />
      <Headline />
      <Features />
      <CallToAction />
      <Testimonials />
      <FeatureSummary />
      <Pricing />
      <CallToAction2 />
    </Layout>
  )
}
