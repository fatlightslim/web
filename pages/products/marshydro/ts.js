import ProductFeature from "../../../components/ProductFeature"
import ProductCard from "../../../components/ProductCard"
import TStable from "../../../components/TStable"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import Layout from "../../../components/Layout"

// const variant = [
//   {
//     id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjMyMTQ1ODM4OTE0OA==",
//     title: "TS600",
//     price: { sales: "19,800", regular: "29,800" },
//   },
//   {
//     id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjMyMTQ1ODQyMTkxNg==",
//     title: "TS1000",
//     price: { sales: "39,800", regular: "49,800" },
//   },
//   {
//     id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjMyMTQ1ODQ4NzQ1Mg==",
//     title: "TSL2000",
//     price: { sales: "49,800", regular: "59,800" },
//   },
//   {
//     id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjMyMTQ1ODQ1NDY4NA==",
//     title: "TSW2000",
//     price: { sales: "49,800", regular: "59,800" },
//   },
//   {
//     id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjMyMTQ1ODUyMDIyMA==",
//     title: "TS3000",
//     price: { sales: "79,800", regular: "89,800" },
//   },
// ]

export default function MarsHydroTS(props) {
  const { ts: product } = props.products
  return (
    <Layout {...props}>
      <ProductCard product={product} />
      <ProductFeature feature={product.fields.feature} />
      <TStable product={product} {...props} />
      <Delivery />
      <Refund />
    </Layout>
  )
}
