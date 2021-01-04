import { data } from "../data/home";
import Layout from "../components/Layout";
import Headline from "../components/Headline";
import Features from "../components/Features";
import FeatureSummary from "../components/FeatureSummary";
import ProductCarousel from "../components/ProductCarousel";
import Delivery from "../components/Delivery";
import ReviewBanner from "../components/ReviewBanner";
import RelatedProducts from "../components/RelatedProducts2";
import Refund from "../components/Refund";
import FeatureNew from "../components/FeatureNew";
import NewHero from "../components/NewHero";
import Ichiran from "../components/Ichiran";
// import Client from 'shopify-buy/index.unoptimized.umd'
// const client = Client.buildClient(process.env.shopify)

// export async function getStaticProps() {
//   const res = await client.product.fetchAll()
//   const products = await JSON.parse(JSON.stringify(res))
//   return {
//     props: {
//       products,
//       // buildTimestamp: Date.now(),
//     },
//   }
// }

export default function Home({products}) {
  return (
    <Layout>
      {/* <ProductCarousel /> */}
      <NewHero />
      <Headline data={data.Headline} />
      {/* <Features data={data.Features} /> */}
      <FeatureNew />
      <Ichiran />
      <Delivery />
      <ReviewBanner />
      <Refund />
      <FeatureSummary />
      <RelatedProducts />
    </Layout>
  );
}
