import {data} from "../data/home"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import CallToAction from "../components/Cta"
import Testimonials from "../components/Testimonials"
import FeatureSummary from "../components/FeatureSummary"
// import PricingTable from "../components/PricingTable"
import ProductCarousel from "../components/ProductCarousel"
import Delivery from "../components/Delivery"
import ReviewBanner from "../components/ReviewBanner"
import AutoPlayReview from "../components/AutoPlayReview"
import Minjida from "../components/Minjida"
import FeatureNew from "../components/FeatureNew"

// import ReviewCarousel from "../components/ReviewCarousel"



import RelatedProducts from "../components/RelatedProducts2"
import Refund from "../components/Refund"

// import Testimonial from "../components/Testimonial"

export default function Home(props) {
  return (
    <Layout>
      <ProductCarousel />
      <Headline data={data.Headline} />
    
      <FeatureNew data={data.FeatureNew} />
      <Minjida />

      {/* <Testimonial /> */}
     
      
      <Delivery />
      <ReviewBanner />
      <Refund />
      <FeatureSummary />
      <RelatedProducts />
    </Layout>
  );
}
