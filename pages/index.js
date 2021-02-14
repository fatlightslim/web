import { withRouter } from "next/router"
import { data } from "../data/home"
import Layout from "../components/Layout"
import Headline from "../components/Headline"
import FeatureSummary from "../components/FeatureSummary"
import Delivery from "../components/Delivery"
import ReviewBanner from "../components/ReviewBanner"
import RelatedProducts from "../components/RelatedProducts2"
import Refund from "../components/Refund"
import FeatureNew from "../components/FeatureNew"
import NewHero from "../components/NewHero"
import FCcard from "../components/FCcard";
import Sf4000card from "../components/Sf4000card";
// import Client from 'shopify-buy/index.unoptimized.umd'
// const client = Client.buildClient(process.env.shopify)
  // Set your secret key. Remember to switch to your live secret key in production!
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  // const Stripe = require("stripe")

// export async function getStaticProps() {
//   const res = await client.product.fetchAll()
//   const products = await JSON.parse(JSON.stringify(res))

//   // const products = await stripe.products.list();


//   return {
//     props: {
//       products,
//     },
//   }
// }

function Home({ router }) {
  return (
    <Layout router={router}>
      <NewHero />
      <Headline data={data.Headline} />
      <FeatureNew />
      <Sf4000card />
      <FCcard />
      <Delivery />
      <ReviewBanner />
      <Refund />
      <FeatureSummary />
      <RelatedProducts />
    </Layout>
  )
}

export default withRouter(Home)
