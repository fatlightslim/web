import Layout from "../../../components/Layout2021"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import BlogBanner from "../../../components/BlogBanner"
import Contact from "../../../components/Contact"
import Video from "../../../components/Video"
import Size from "../../../components/Size"
import Optimal from "../../../components/Optimal"
import ProductFeature from "../../../components/ProductFeature"
import CompareTable from "../../../components/CompareTable"
import ProductCard from "../../../components/ProductCard"

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  return {
    props: {
      product: await client.getEntry("7tSqaiVCFgMmzz2rsq5qFy")
    },
  }
}

export default function MarsHydroSp3000({ product }) {
  return (
    <Layout product={product}>
      <ProductCard product={product} />
      <Video video={product.fields.video} />
      <ProductFeature feature={product.fields.feature} />
      <Delivery />
      <Refund />
      <Size spec={product.fields.spec} />
      {/* <CompareTable main={products[0]} left={products[1]} right={products[2]} /> */}
      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-4">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
    </Layout>
  )
}
