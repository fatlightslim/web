import { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { products } from "../../../data/products";
import Layout from "../../../components/Layout";
import Delivery from "../../../components/Delivery";
import Refund from "../../../components/Refund";
import CartButton from "../../../components/CartButton";
import CardBanner from "../../../components/CardBanner";
import BlogBanner from "../../../components/BlogBanner";
import Contact from "../../../components/Contact";
import Optimal from "../../../components/Optimal";
import ProductFeature from "../../../components/ProductFeature";
import CompareTable from "../../../components/CompareTable";
import Video from "../../../components/Video";
import Size from "../../../components/Size";
import TStable from "../../../components/TStable";
import { createCheckout } from "../../../scripts/shopify";

export default function MarsHydroSp150(props) {
  const product = products[2];
  product.bg.outer = "bg-gray-800";

  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState("/");

  useEffect(() => {
    createCheckout(process.env.sp150).then((url) => setUrl(url));
  }, []);

  return (
    <Layout visible={visible} className="pb-24 lg:pb-0">
      <CardBanner {...product} button={false} />
      <Video {...product} />
      <ProductFeature feature={feature} />
      <TStable />
      <Delivery />
      <Refund />
      <ScrollTrigger
        onEnter={({ progress, velocity }) => {
          setVisible(true);
        }}
        onExit={() => setVisible(false)}
      ></ScrollTrigger>
      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-4">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
      <CartButton {...product} visible={visible} url={url} />
    </Layout>
  );
}

const feature = [
  {
    lead: "栽培環境に合わせて選べる5つのサイズ",
    img: {
      src: "/img/ts/TSlights.png",
      alt: "スペクトル",
      width: 1000,
      height: 619,
    },
  },
  {
    lead:
      "最先端の技術で設計された、新しいLEDライト。発熱調節も防水もバッチリです。",
    img: {
      src: "/img/ts/fc.png",
      alt: "harvest",
      width: 893,
      height: 853,
    },
  },
  {
    lead:
      "これまでの赤色・青色LEDの機能に加えて強力な白色LEDを追加することで太陽光のような理想のライトに近づきました。",
    img: {
      src: "/img/ts/spectrum.png",
      alt: "ppfd",
      width: 891,
      height: 900,
    },
  },
  {
    lead:
      "天井にも、壁にも、簡単設置。高さ調節も簡単なので植物の成長ステージに合わせた色んな設置方法が楽しめます。",
    img: {
      src: "/img/ts/stage.png",
      alt: "heatsink",

      width: 970,
      height: 600,
    },
    bg: {},
  },
  {
    lead:
      "全ての植物、全ての成長ステージにぴったりの光。その秘訣は新しいSMD LEDチップ。もう冬や梅雨にも大丈夫です。",
    img: {
      src: "/img/sp150/multi.png",
      alt: "connect",

      width: 906,
      height: 824,
    },
  },
  {
    lead:
      "個人でのホビー用途から商業施設での本格的な栽培まで多くのお客様に幅広く支持されています。",
    img: {
      src: "/img/ts/commercial.png",
      alt: "commercial",

      width: 970,
      height: 600,
    },
  },
  {
    lead: "直観的パッケージ。スタートに必要なものは全て入ってます。",
    img: {
      src: "/img/ts/kantan2.png",
      alt: "chip",
      width: 900,
      height: 900,
    },
  },
];

const spec = {
  data: [
    { label: "型番", desc: "SP150" },
    { label: "照射範囲", desc: "90cm x 90cm" },
    {
      label: "スペクトル",
      desc: "3000-3200nm\n6000-6500nm\n650-665nm",
    },
    { label: "PPF", desc: "561μmol/s" },
    { label: "LEDチップ", desc: "322個\nSMD LED" },
    {
      label: "消費電力",
      desc: "134W±5%@AC120V\n139W±5%@AC240V",
    },
    { label: "サイズ", desc: "598mm x 80mm x 50mm\n1.9kg" },
  ],
  img: {
    src: "/img/sp150/size150.png",
    alt: "sp150 size",
    width: 1000,
    height: 683,
  },
};
