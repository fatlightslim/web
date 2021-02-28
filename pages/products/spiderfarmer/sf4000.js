import { getProductsFromContentful } from "../../../scripts/contentful"
import Layout from "../../../components/Layout2021";
import Delivery from "../../../components/Delivery";
import Refund from "../../../components/Refund";
import BlogBanner from "../../../components/BlogBanner";
import Contact from "../../../components/Contact";
import Sizepink from "../../../components/Sizepink";
import Optimal from "../../../components/Optimal";
import ProductFeatureWhite from "../../../components/ProductFeatureWhite";
import CompareTableSF4000 from "../../../components/CompareTableSF4000";
import ProductCard from "../../../components/ProductCard";
import PricingTable from "../../../components/PricingTable";

export default function SpiderfarmerSf4000({ products }) {
  const { sf4000: product, fc6500, sp6500 } = products


  return (
    <Layout product={product}>
      <ProductCard product={product} />
      <ProductFeatureWhite feature={product.fields.feature} />
      <Sizepink spec={product.fields.spec} />
      <PricingTable main={product} left={sp6500} right={fc6500} />
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