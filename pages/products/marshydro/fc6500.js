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
import ProductFeatureWhite from "../../../components/ProductFeatureWhite"
import CompareTable from "../../../components/CompareTable"

export default function MarsHydroFc6500({}) {
  const fc6500 = products[4]
  fc6500.bg.outer = "bg-white-800"
  const productId =
    process.env.products[
      fc6500["href"].split("/")[fc6500["href"].split("/").length - 1]
    ]

  return (
    <Layout productJson={fc6500} productId={productId}>
      <CardBanner {...fc6500} />
      <ProductFeatureWhite feature={feature} />
      <Size spec={spec} />
      <CompareTable main={products[4]} left={products[3]} right={products[0]} />
      <Delivery />
      <Refund />
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
      src: "/img/fc6500/fcspectrum.png",
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
      "その業界No.1のSAMSUNG LM301Bチップを3,144個も使用した贅沢なLEDライトです。本社の定番モデルのTS3000よりも約３倍以上のLEDチップが入ったハイエンドモデル！",
    img: {
      src: "/img/fc6500/ledchip.png",
      alt: "connect",
      width: 1000,
      height: 1000,
    },
    text: "text-black",
  },
  {
    lead:
      "PPFD(光合成光量子束密度)の測定におけるパフォーマンスで他社製品を圧倒します。しかも、消費電力は最大30%OFF",
    img: {
      src: "/img/fc6500/fcmap.png",
      alt: "ppfd",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "比べものにならない、圧倒的な性能。FC6500が選ばれてるその理由は、数字が証明してくれます。",
    img: {
      src: "/img/fc6500/fctable.png",
      alt: "heatsink",
      width: 1000,
      height: 1000,
    },
    text: "text-black",
  },
  
  {
    lead:
      "個人でのホビー用途から商業施設での本格的な栽培まで多くのお客様に幅広く支持されています。",
    img: {
      src: "/img/fc6500/fccommercial.png",
      alt: "commercial",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "MARS HYDRO社の製品は本物のSAMSUNG LM301Bチップのみ使用しています。類似品・詐欺商品等にはご注意ください。",
    img: {
      src: "/img/fc6500/samsung.png",
      alt: "chip",
      width: 960,
      height: 640,
    },
  },
]

const spec = {
  data: [
    { label: "型番", desc: "FC6500" },
    { label: "照射範囲", desc: "152cm x 152cm" },
    {
      label: "スペクトル",
      desc: "660-665nm\n2800K-3000K\n4800-5000K",
    },
    { label: "PPF", desc: "2.9μmol/j" },
    { label: "LEDチップ", desc: "3,144個\nSAMSUNG LM301B\nOSRAM 3030" },
    {
      label: "消費電力",
      desc: "651W±5%@AC240V\n638W±5%@AC240V\n636W±5%@AC277V",
    },
    { label: "サイズ", desc: "1130mm x 1120mm x 106mm\n4.6kg" },
  ],
  img: {
    src: "/img/fc6500/size6500.png",
    alt: "fc6500 size",
    width: 1000,
    height: 683,
  },
}
