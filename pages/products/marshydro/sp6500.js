import { products } from "../../../data/products"
import Layout from "../../../components/Layout"
import Delivery from "../../../components/Delivery"
import Refund from "../../../components/Refund"
import CardBanner from "../../../components/CardBanner"
import BlogBanner from "../../../components/BlogBanner"
import Contact from "../../../components/Contact"
import Video from "../../../components/Video"
import Size from "../../../components/Size"
import Optimal from "../../../components/Optimal"
import ProductFeature from "../../../components/ProductFeature"
import CompareTable from "../../../components/CompareTable"

export default function MarsHydroSp3000({}) {
  const sp3000 = products[3]
  sp3000.bg.outer = "bg-gray-800"
  const productId =
    process.env.products[
      sp3000["href"].split("/")[sp3000["href"].split("/").length - 1]
    ]

  return (
    <Layout productJson={sp3000} productId={productId}>
      <CardBanner {...sp3000} />
      {/* <Video {...sp3000} /> */}
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
      "白色、及び赤色のLEDチップを追加し、より暖かな光を実現。究極に植物の促進をお助けします。",
    img: {
      src: "/img/sp6500/SP6500-01.png",
      alt: "スペクトル",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "SAMSUNG製 LM301BとOSRAM製LEDチップを使用。2356個にも及ぶ高密度に配置されたLEDが、植物たちに太陽のような温かい光と安心感を与えます。",
    img: {
      src: "/img/sp6500/sp6500perform.png",
      alt: "performance",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "PPFD(光合成光量子束密度)の測定におけるパフォーマンスでSP6500の有能性を証明。SP6500を使わない理由があるでしょうか？",
    img: {
      src: "/img/sp6500/SP6500ppfd.png",
      alt: "ppfd",
      width: 1000,
      height: 1000,
    },
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
      "MARS HYDRO社の製品を初めて使う？ご安心を！ユーザーマニュアル付きです。",
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
