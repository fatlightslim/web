import { getProductsFromContentful } from "../../../scripts/contentful"
import Layout from "../../../components/Layout2021";
import Delivery from "../../../components/Delivery";
import Refund from "../../../components/Refund";
import BlogBanner from "../../../components/BlogBanner";
import Contact from "../../../components/Contact";
import Size from "../../../components/Size";
import Optimal from "../../../components/Optimal";
import ProductFeature from "../../../components/ProductFeature";
import CompareTableSF4000 from "../../../components/CompareTableSF4000";
import ProductCard from "../../../components/ProductCard";
import PricingTable from "../../../components/PricingTable";

export default function SpiderfarmerSf7000({ products }) {
  const { sf7000: product, sf4000, fc6500 } = products


  return (
    <Layout product={product} products={products}>
      <ProductCard product={product} />
      <ProductFeature feature={product.fields.feature} />
      <Size spec={product.fields.spec} />
      <PricingTable main={product} left={sf4000} right={fc6500} />
      <Delivery />
      <Refund />
      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-4">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: await getProductsFromContentful(),
  }
}