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
  const sp3000 = products[0]
  sp3000.bg.outer = "bg-gray-800"
  const productId =
    process.env.products[
      sp3000["href"].split("/")[sp3000["href"].split("/").length - 1]
    ]

  return (
    <Layout productJson={sp3000} productId={productId}>
      <CardBanner {...sp3000} />
      <Video {...sp3000} />
      <ProductFeature feature={feature} />
      <Size spec={spec} />
      <Delivery />
      <Refund />
      <CompareTable main={products[0]} left={products[1]} right={products[2]} />
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
      "これまでの赤色・青色LEDの機能に加えて強力な白色LEDを追加することで太陽光のような理想のライトに近づきました。",
    img: {
      src: "/img/sp3000/spectrum.png",
      alt: "スペクトル",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "SAMSUNG LM301Bの驚きの性能がこれまでの常識を変えます。なんと、1ワットあたり最大2.5グラム(従来比2倍)の収穫が可能です。",
    img: {
      src: "/img/sp3000/ledchip.png",
      alt: "harvest",
      width: 1000,
      height: 857,
    },
  },
  {
    lead:
      "PPFD(光合成光量子束密度)の測定におけるパフォーマンスで他社製品を圧倒します。しかも、消費電力は最大30%OFF",
    img: {
      src: "/img/sp3000/ppfd.png",
      alt: "ppfd",
      width: 1000,
      height: 857,
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
  {
    lead:
      "個人でのホビー用途から商業施設での本格的な栽培まで多くのお客様に幅広く支持されています。",
    img: {
      src: "/img/sp3000/commercial.png",
      alt: "commercial",
      width: 1000,
      height: 1000,
    },
  },
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
]

const spec = {
  data: [
    { label: "型番", desc: "SP3000" },
    { label: "照射範囲", desc: "150cm x 60cm" },
    {
      label: "スペクトル",
      desc: "380-410nm\n650-66nm\n730-740nm\n2800K-3000K\n4800-5000K",
    },
    { label: "PPF", desc: "847μmol/s" },
    { label: "LEDチップ", desc: "957個\nSAMSUNG LM301B\nOSRAM 3030" },
    {
      label: "消費電力",
      desc: "300W±5%@AC120V\n293W±5%@AC240V\n292W±5%@AC277V",
    },
    { label: "サイズ", desc: "1080mm x 80mm x 103mm\n4.6kg" },
  ],
  img: {
    src: "/img/sp3000/size.png",
    alt: "sp3000 size",
    width: 1000,
    height: 683,
  },
}
