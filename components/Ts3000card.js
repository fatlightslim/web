
import Image from "next/image"
import Link from "next/link"


export default function Ts3000card({
  data = {
    header: "ベストセラー",
    title: {
      1: "再購入率",
      2: "No.1の",
      3: "大人気商品",
      //   3: "お届けします。",
      color: "#f9cf53",
    },
    img: {
      src: "/img/ts/ts3000main.png",
      alt: "TS3000",
      width: 679,
      height: 400,
    },
    desc: {
      1: "FATLightSLIMの商品の中で二台目の注文が一番多い！定番ベストセラーをご紹介します。丈夫な本体と明るさ抜群のLEDチップで収穫量増大。ハイスペックの高性能だけど電気代は心配なし。アメリカのAmazonでは大好評のレビューが2,000件以上！ぜひ、チェックしてみてくだ",
      2: "さい。",
    },
    button: "TS3000の詳細ページへ",
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    bg: "from-pink-700  to-white",
  },
}) {
  return (
    <section className="md:py-4 md:px-2 bg-gray-200">
      <div
        className={`text-blue-900 md:rounded-3xl max-w-screen-xl mx-auto `}
        style={{ background: '#AFCBD8' }}
      >
        <div className="grid md:grid-cols-2 mx-auto gap-0">
          <div className="md:col-span-1 p-8 ">
            <Header {...data} />
            <LeftCol {...data} />
          </div>

          <div className="md:col-span-1">
            <div className="p-2">
              <Image
                src={data.img.src}
                width={data.img.width}
                height={data.img.height}
                alt={data.img.alt}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Header = ({ header }) => (
  <header className="dosis pb-8">
    <h3 className="text-xl font-bold">{header}</h3>
  </header>
)

const LeftCol = ({ title, desc, button }) => (
  <>
    <p className="text-5xl md:text-6xl font-extrabold leading-none tracking-normal whitespace-nowrap">
      
        {title[1]}
      <br />
      <span style={{ fontSize: "115%", color: title.color }}> 
      {title[2]}
      </span>
      <br />
      <span className="whitespace-nowrap">{title[3]}</span>
    </p>
    <p className="py-8 max-w-lg lg:mb-4  text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <Link href="/products/marshydro/ts">
      <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)