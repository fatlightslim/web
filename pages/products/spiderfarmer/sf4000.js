import { products } from "../../../data/products";
import Layout from "../../../components/Layout";
import Delivery from "../../../components/Delivery";
import Refund from "../../../components/Refund";
import CardBanner from "../../../components/CardBanner";
import BlogBanner from "../../../components/BlogBanner";
import Contact from "../../../components/Contact";
import Video from "../../../components/Video";
import Sizepink from "../../../components/Sizepink";
import Optimal from "../../../components/Optimal";
import ProductFeatureWhite from "../../../components/ProductFeatureWhite";
import CompareTableSF4000 from "../../../components/CompareTableSF4000";

export default function SpiderfarmerSf4000({}) {

  const sf4000 = products[5];
  sf4000.bg.outer = "bg-white";
  const productId =
    process.env.products[
      sf4000["href"].split("/")[sf4000["href"].split("/").length - 1]
    ];
    console.log(productId);

  return (
    <Layout productJson={sf4000} productId={productId}>
      <CardBanner {...sf4000} />
      <ProductFeatureWhite feature={feature} />
      <Sizepink spec={spec} />
      <CompareTableSF4000
        main={products[5]}
        left={products[3]}
        right={products[4]}
      />
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

const feature = [
  {
    lead: "",
    img: {
      src: "/img/sf4000/sf4000led.png",
      alt: "SF4000",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "これまでの怪しい紫色LEDとは違うフルスペクトル。太陽光にもっとも近い光で成長スピードや収穫量にきっと驚きます。",
    img: {
      src: "/img/sf4000/sfspectrum3.png",
      alt: "スペクトル",
      width: 970,
      height: 1540,
    },
  },

  {
    lead:
      "SAMSUNG LM301Bの性能はピカイチ。1Wあたりの収穫量は業界トップレベルです。さらに、UL・CE公認のドライバーを使い、電気代は最大30%OFF",
    img: {
      src: "/img/sf4000/hardware.png",
      alt: "hardware",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      // "成長ステージ別の設置TIPをご紹介！簡単に高さを調節できるロープ付きで、成長ステージに合わせた栽培がもっとラクになります。",
      "全ての植物に有効に注がれる贅沢な光。全ての成長ステージに簡単に最適に光量をコントロール。",
    img: {
      src: "/img/sf4000/sftip.png",
      alt: "tip",
      width: 1000,
      height: 1000,
    },
  },
  {
    lead:
      "トップレベルの完全防水設計でどこにでも安心設置。さらに！ボディ自体が熱循環パネルになっていて、ファンがなくても熱くなることはありません。",
    img: {
      src: "/img/sf4000/sf4000w.png",
      alt: "heatsink",
      width: 800,
      height: 800,
    },
  },
  {
    lead:
      "RJ11ケーブルを利用することで、最大12台のライトを同時にコントロール。もちろん、FATLightSLIMの商品はRJ11ケーブル付き！",
    img: {
      src: "/img/sf4000/sf4000d.png",
      alt: "connect",
      width: 900,
      height: 900,
    },
  },
  {
    lead:
      "個人でのホビー用途から研究所や農園での専門的な栽培まで多くのお客様に幅広く支持されています。",
    img: {
      src: "/img/sf4000/sf4000c.png",
      alt: "commercial",
      width: 970,
      height: 600,
    },
  },
  {
    lead:
      "SPIDER FARMER社の製品は本物のSAMSUNG LM301Bチップのみ使用しています。類似品・詐欺商品等にはご注意ください。",
    img: {
      src: "/img/sf4000/sf4000n.png",
      alt: "chip",
      width: 970,
      height: 295,
    },
  },
];

const spec = {
  data: [
    { label: "型番", desc: "SF4000" },
    { label: "照射範囲", desc: "150cm x 150cm" },
    {
      label: "スペクトル",
      desc: "660-665nm\n3000K\n5000K\nIR760nm",
    },
    { label: "PPF", desc: "1217umol/s" },
    { label: "LEDチップ", desc: "1,212個\nSAMSUNG LM301B" },
    {
      label: "消費電力",
      desc: "3.787A@AC120V\n1.864A@AC240V\n1.641A@AC277V",
    },
    { label: "サイズ", desc: "648mm x 536mm x 59mm\n8.766kg" },
  ],
  img: {
    src: "/img/sf4000/sf4000size.png",
    alt: "sf4000 size",
    width: 1000,
    height: 627,
  },
};
