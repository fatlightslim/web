import {
  getProductsFromContentful,
  getImageFromContentful,
} from "../scripts/contentful"
import { data } from "../data/home"
import Layout from "../components/Layout2021"
import Headline from "../components/Headline"
import FeatureSummary from "../components/FeatureSummary"
import Delivery from "../components/Delivery"
import ReviewBanner from "../components/ReviewBanner"
import RelatedProducts from "../components/RelatedProducts2"
import Refund from "../components/Refund"
import FeatureNew from "../components/FeatureNew"
import NewHero from "../components/NewHero"
import FCcard from "../components/FCcard"
import Sf4000card from "../components/Sf4000card"
import OfficialSpider from "../components/OfficialSpider"

// import Client from 'shopify-buy/index.unoptimized.umd'
// const client = Client.buildClient(process.env.shopify)

export default function Home({ products, assets }) {
  return (
    <Layout products={products.products}>
      <NewHero {...assets} />
      <Headline data={data.Headline} />
      <FeatureNew />
      <FCcard />
      <Sf4000card />
      <OfficialSpider />
      <Delivery />
      <ReviewBanner />
      <Refund />
      <FeatureSummary />
      <RelatedProducts />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      products: await getProductsFromContentful(),
      assets: {
        hero: await getImageFromContentful("1aAtHaA1vPe5s5ZCfjgfMZ"),
        angle: await getImageFromContentful("12o0dyvOxeYGsm1V46Xh0q"),
        amazon: await getImageFromContentful("2TntmVSqP6qzoCUi0fImyS")
      },
    },
  }
}
