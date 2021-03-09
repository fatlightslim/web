import AddToCart from "../../../components/AddToCart"
import Layout from "../../../components/Layout2021"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import Size from "../../../components/Size"
import ProductFeature from "../../../components/ProductFeature"
import ProductCard from "../../../components/ProductCard"
import PricingTable from "../../../components/PricingTable"

export default function SpiderFarmer2000(props) {
  // console.log(props.products);
  const { sf2000: product, sp150, ts } = props.products

  return (
    <Layout {...props}>
      <AddToCart product={product} {...props} />
      <ProductCard product={product} />
      <ProductFeature feature={product.fields.feature} />
      <Delivery />
      <Refund />
      <Size spec={product.fields.spec} />
      <PricingTable main={product} left={sp150} right={ts} {...props} />
    </Layout>
  )
}
