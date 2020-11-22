import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Headline from "../components/Headline"
import Features from "../components/Features"
import CallToAction from "../components/Cta"
import Testimonials from "../components/Testimonials"
import FeatureSummary from "../components/FeatureSummary"
import PricingTable from "../components/PricingTable"
import RelatedProducts from "../components/RelatedProducts"
import {data} from "../data/home"
import ProductCarousel from "../components/ProductCarousel"


function Home() {
  return (
    <Layout>
      <ProductCarousel />
      {/* <Hero data={data.Hero} /> */}
      <Headline data={data.Headline} />
      <Features data={data.Features} />
      {/* <CallToAction data={data.CallToAction} /> */}
      <Testimonials data={data.Testimonials} />
      {/* <FeatureSummary /> */}
      <PricingTable />
      <RelatedProducts />
    </Layout>
  )
}

export default Home
