import ScrollTrigger from "react-scroll-trigger";

import { data } from "../data/home";
import { products } from "../data/products";
import Layout from "../components/Layout";
import Headline from "../components/Headline";
import Features from "../components/Features";
import FeatureSummary from "../components/FeatureSummary";
// import PricingTable from "../components/PricingTable"
import ProductCarousel from "../components/ProductCarousel";
import Delivery from "../components/Delivery";
import ReviewBanner from "../components/ReviewBanner";
import RelatedProducts from "../components/RelatedProducts2";
import Refund from "../components/Refund";
import OneMoreThing from "../components/OneMoreThing";
import CartButton from "../components/CartButton";
import Faq from "../components/Faq";
import CardBanner from "../components/CardBanner";
// import Testimonial from "../components/Testimonial"
import BlogBanner from "../components/BlogBanner";
import Contact from "../components/Contact";
import Video from "../components/Video";
import Size from "../components/Size";
import Optimal from "../components/Optimal";
import Daisy from "../components/Daisy";
import Spectrum from "../components/Spectrum";
import CompareTable from "../components/CompareTable";

function Home() {
  const sp3000 = products[0];
  sp3000.bg.outer = "bg-gray-800";
  const [visible, setVisible] = React.useState(false);
  return (
    <Layout visible={visible}>
      {/* <ProductCarousel />
      <Headline data={data.Headline} />
      <Features data={data.Features} />
      <Delivery />
      <ReviewBanner />
      <Refund />
      <FeatureSummary />
      <RelatedProducts />
       */}
      <CardBanner {...sp3000} button={false} />
      <Video />

      <div className="bg-black">
        <div className="max-w-7xl mx-auto bg-black ">
          <Spectrum />
        </div>
      </div>
      <Size />

      <Delivery />
      {/* <ReviewBanner /> */}
      <Refund />

      {/* <h3 className="text-center text-3xl py-4 pt-12">関連商品</h3> */}

      <ScrollTrigger
      // throttleScroll={1900}
        onEnter={({progress, velocity}) => {
          // console.log(progress);
          // console.log(velocity);
          setVisible(true);
        }}
        onExit={() => setVisible(false)}
      >
        <CompareTable visible={visible} />
      </ScrollTrigger>
      {/* <div className="grid lg:grid-cols-2 gap-0 bg-gray-200 md:py-4">
        <CardBanner {...products[1]} />
        <CardBanner {...products[2]} />
      </div> */}
      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-4">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
      <CartButton visible={visible} />
    </Layout>
  );
}

export default Home;
