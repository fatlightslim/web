import { products } from "../../../data/products"
import Layout from "../../../components/Layout"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import CardBanner from "../../../components/CardBanner"
import BlogBanner from "../../../components/BlogBanner"
import Contact from "../../../components/Contact"
import Size from "../../../components/Size"
import Optimal from "../../../components/Optimal"
import ProductFeature from "../../../components/ProductFeature"
import CompareTable from "../../../components/CompareTable"

export default function MarsHydrosp6500({}) {
  const product = products[3]
  product.bg.outer = "bg-gray-800"
  const productId =
    process.env.products[
      product["href"].split("/")[product["href"].split("/").length - 1]
    ]

  return (
    <Layout productJson={product} productId={productId}>
      <CardBanner {...product} />
      <ProductFeature feature={feature} />
      <Size spec={spec} />
      <Delivery />
      <Refund />
      <CompareTable main={products[3]} left={products[0]} right={products[2]} />
      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-4">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
    </Layout>
  )
}

const feature = [
  {
    lead:
      "白、赤色のLEDチップをさらに追加し、より自然な太陽光を実現。植物の光合成に不可欠な光エネルギーを、スムーズかつエコにお届けします。",
    img: {
      src: "/img/sp6500/SP6500perfectspectrum3.png",
      alt: "スペクトル",
      width: 1200,
      height: 1000,
    },
  },
  {
    lead:
      "SAMSUNG製、OSRAM製LEDチップを使用。2356個にも及ぶ高密度に配置されたLEDが、植物たちに太陽のような温かい光と安心感を与えます。",
      
    img: {
      src: "/img/sp6500/sp6500perform.png",
      alt: "performance",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "PPFDの測定においてSP6500の圧倒的な光子量を証明。『短時間』『小スペース』でも、植物たちが効率的に光合成を行えます。",
    img: {
      src: "/img/sp6500/SP6500ppfd.png",
      alt: "ppfd",
      width: 1000,
      height: 1000,
    },
    　　text: "text-yellow-300",
  },
  {
    lead:
      "アルミ製フルボディヒートシンクが熱を抑えます。ファンなし。ノイズなし。かなりクール。",
    img: {
      src: "/img/sp3000/heatsink.png",
      alt: "heatsink",
      width: 1000,
      height: 753,
    },
    text: "text-green-500",
  },
  {
    lead:
      "最大20台までの機器をRJ11コネクタで接続することによって全てのライトをコントロールできます。",
    img: {
      src: "/img/sp3000/connect.png",
      alt: "connect",
      width: 1000,
      height: 713,
    },
    text: "text-blue-500",
  },
  // {
  //   lead:
  //     "個人でのホビー用途から商業施設での本格的な栽培まで多くのお客様に幅広く支持されています。",
  //   img: {
  //     src: "/img/sp3000/commercial.png",
  //     alt: "commercial",
  //     width: 1000,
  //     height: 1000,
  //   },
  // },
  {
    lead:
      "MARS HYDRO社の製品は本物のSAMSUNG LM301Bチップのみ使用しています。類似品・詐欺商品等にはご注意ください。",
    img: {
      src: "/img/sp3000/chip.png",
      alt: "chip",
      width: 1000,
      height: 880,
    },
  },
  {
    lead:
      "MARS HYDRO社の製品を初めて使う？ご安心を！そんな方でもスムーズに使うためのユーザーマニュアル付きです。",
    img: {
      src: "/img/sp6500/sp6500n.png",
      alt: "manual",
      width: 1000,
      height: 1000,
    },
  },
]

const spec = {
  data: [
    { label: "型番", desc: "SP6500" },
    { label: "照射範囲", desc: "150cm x 90cm" },
    {
      label: "スペクトル",
      desc: "650-665nm\n730-740nm\n2800K-3000K\n4800-5000K",
    },
    { label: "PPF", desc: "1843μmol/s" },
    { label: "LEDチップ", desc: "2376個\nSAMSUNG LM301B\nOSRAM 3030" },
    {
      label: "消費電力",
      desc: "648.8W±5%@AC120V\n626.1W±5%@AC240V\n624.4W±5%@AC277V",
    },
    { label: "サイズ", desc: "1073mm x 90mm x 92mm\n7.867kg" },
  ],
  img: {
    src: "/img/sp6500/sp6500size.png",
    alt: "sp6500 size",
    width: 1000,
    height: 683,
  },
}