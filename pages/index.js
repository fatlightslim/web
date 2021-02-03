import { data } from "../data/home"
import Layout from "../components/Layout2021"
import Headline from "../components/Headline"
import FeatureSummary from "../components/FeatureSummary"
import Delivery from "../components/Delivery"
import ReviewBanner from "../components/ReviewBanner"
import RelatedProducts from "../components/RelatedProducts2"
import Refund from "../components/Refund"
import FeatureNew from "../components/FeatureNew"
import NewHero from "../components/NewHeroFix"
import FCcard from "../components/FCcard"
import Ts3000card from "../components/Ts3000card"
// import Client from 'shopify-buy/index.unoptimized.umd'
// const client = Client.buildClient(process.env.shopify)
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys

function Home({}) {
  return (
    <Layout>
      <NewHero />
      <Headline data={data.Headline} />
      <FeatureNew />
      <Ts3000card />
      <FCcard />
      <Delivery />
      <ReviewBanner />
      <Refund />
      <FeatureSummary />
      <RelatedProducts />
    </Layout>
  )
}

export default Home
