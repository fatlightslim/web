import {data} from "../data/home"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import Features from "../components/Features"
import FeatureSummary from "../components/FeatureSummary"
// import PricingTable from "../components/PricingTable"
import ProductCarousel from "../components/ProductCarousel"
import Delivery from "../components/Delivery"
import ReviewBanner from "../components/ReviewBanner"
import RelatedProducts from "../components/RelatedProducts2"
import Refund from "../components/Refund"
import OneMoreThing from "../components/OneMoreThing"
// import Testimonial from "../components/Testimonial"

function Home() {
  return (
    <Layout>
      <ProductCarousel />
      <Headline data={data.Headline} />
      {/* <Testimonial /> */}
      <Features data={data.Features} />
      <Delivery />
      <ReviewBanner />
      <Refund />
      <FeatureSummary />
      <OneMoreThing />
      {/* <PricingTable /> */}
      <RelatedProducts />
    </Layout>
  )
}

export default Home
