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
import {products} from "../data/products"
import ProductCarousel from "../components/ProductCarousel"
import Delivery from "../components/Delivery"
import Henpin from "../components/Henpin"
import Landing2 from "../components/Landing"
import CustomerReview from "../components/CustomerReview"
import ReviewBanner from "../components/ReviewBanner"
import AutoPlayReview from "../components/AutoPlayReview"
import TailwindHero from "../components/tailwindui/Hero"
import TailwindCta from "../components/tailwindui/Cta"
import TailwindFeature from "../components/tailwindui/Feature"
import RelatedProducts2 from "../components/RelatedProducts2"
// import ReviewCarousel from "../components/ReviewCarousel"




function Home() {
  return (
    <Layout>
      {/* <CustomerReview /> */}
      {/* <Landing2 /> */}
      {/* <TailwindHero />
      <TailwindCta />
      <TailwindFeature /> */}
      <ProductCarousel />
      <Headline data={data.Headline} />
      <Features data={data.Features} />

      <Delivery />
      {/* <CallToAction data={data.CallToAction} /> */}
      {/* <Testimonials data={data.Testimonials} /> */}
      {/* <CustomerReview /> */}
      <ReviewBanner />
      {/* <AutoPlayReview /> */}
      <Henpin />
      <FeatureSummary />
      {/* <PricingTable /> */}
      <RelatedProducts2 />
      {/* <RelatedProducts /> */}
    </Layout>
  )
}

export default Home
