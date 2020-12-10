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
import { createCheckout } from "../../../scripts/shopify";

export default function MarsHydroSp150(props) {
  const product = products[1];
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
      <Size spec={spec} />
      <Delivery />
      <Refund />
      <ScrollTrigger
        onEnter={({ progress, velocity }) => {
          setVisible(true);
        }}
        onExit={() => setVisible(false)}
      >
        <CompareTable
          visible={visible}
          url={url}
          main={products[1]}
          left={products[0]}
          right={products[2]}
        />
      </ScrollTrigger>
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
    lead:
      "これまでの赤色・青色LEDの機能に加えて強力な白色LEDを追加することで太陽光のような理想のライトに近づきました。",
    img: {
      src: "/img/sp150/spectrum-150.png",
      alt: "スペクトル",
      width: 899,
      height: 899,
    },
  },
  {
    lead:
      "軽くてシンプルな本体でどこにでも掛けられる。ひとり暮らしの部屋でも簡単設置。見た目はシンプルだけど、明るさにきっと驚きます。",
    img: {
      src: "/img/sp150/multi2.png",
      alt: "harvest",
      width: 893,
      height: 853,
    },
  },
  {
    lead: "IP65準拠の防水性能。高湿度な栽培環境にも耐えうる設計です。",
    img: {
      src: "/img/sp150/waterproof.png",
      alt: "ppfd",
      width: 891,
      height: 900,
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
    bg: {},
  },
  {
    lead:
      "全ての植物、全ての成長ステージにぴったりの光。その秘訣は322個のSMD LEDチップ。もう冬や梅雨にも大丈夫です。",
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
      src: "/img/sp3000/commercial.png",
      alt: "commercial",

      width: 1000,
      height: 1000,
    },
  },
  {
    lead: "直観的な設置方法。スタートに必要なものは全て入ってます。",
    img: {
      src: "/img/sp150/kantan.png",
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