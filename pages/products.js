import Layout from "../components/Layout"
import ProductBanner from "../components/ProductBanner"
import CallToAction3 from "../components/CallToAction3"
import {products} from "../data/products"

export default function Products() {
  return (
    <Layout>
      {products.map((data, index) => (
        <ProductBanner key={index} data={data} />
      ))}

      <CallToAction3 />
    </Layout>
  )
}
