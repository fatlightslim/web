import { getProductsFromContentful } from "../../../scripts/contentful"
import Layout from "../../../components/Layout2021"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import BlogBanner from "../../../components/BlogBanner"
import Contact from "../../../components/Contact"
import Video from "../../../components/Video"
import Size from "../../../components/Size"
import Optimal from "../../../components/Optimal"
import ProductFeature from "../../../components/ProductFeature"
import ProductCard from "../../../components/ProductCard"
import PricingTable from "../../../components/PricingTable"

export default function MarsHydroSp3000({ products }) {
  const { sp3000: product, sp150, ts } = products

  return (
    <Layout product={product}>
      <ProductCard product={product} />
      <Video video={product.fields.video} />
      <ProductFeature feature={product.fields.feature} />
      <Delivery />
      <Refund />
      <Size spec={product.fields.spec} />
      <PricingTable main={product} left={sp150} right={ts} />
      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-4">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: await getProductsFromContentful()
  }
}
