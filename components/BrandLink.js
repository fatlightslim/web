import Link from "next/link"
import Image from "next/image"
import { ChevRight } from "./Svg"

export default function BrandLink({ brand, products }) {
  const { fc6500: mars, sf7000: spider } = products
  return (
    <div className="">
      <div className="py-8">
        <div className={`${brand === 'spiderfarmer' ? mars.fields.color.gradient : spider.fields.color.gradient} bg-gradient-to-r overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4`}>
          {brand === "spiderfarmer" ? <Spider /> : <Mars />}
          <div className="">
            {brand === "spiderfarmer" ? <SpiderImage /> : <MarsImage />}
          </div>
        </div>
      </div>
    </div>
  )
}
const Mars = () => (

  <div className="pt-8 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
    <div className="lg:self-center">
      <h2 className="text-center">
        <span className="text-6xl font-extrabold text-gray-50">日本上陸</span>
      </h2>
      <p className="mt-4 font-medium dosis text-lg leading-6 text-gray-50">
        業界に激震！今もっとも勢いのあるLEDブランドSPIDER FARMER 大ヒット中！
        大学等の研究機関にも採用される信頼の性能。ジャストなサイズにマストな機能を搭載した人気モデルを全国どこでも送料無料でお届けします。
      </p>

      <Link href="/products/spiderfarmer/all">
        <a className="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-bold bg-transparent text-green-600 hover:bg-indigo-50">
          SPIDER FARMER 商品ページへ
          <ChevRight />
        </a>
      </Link>
    </div>
  </div>
)
const MarsImage = () => (
  <Image
    src="/img/sf7000/sf7000main.png"
    alt="Spider Farmer"
    width={1296}
    height={1065}
  />
)
const SpiderImage = () => (
  <Image
    src="/img/sf7000/sf7000main.png"
    alt="Spider Farmer"
    width={1296}
    height={1065}
  />
)
const Spider = () => (
  <div className="pt-8 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
    <div className="lg:self-center text-gray-50">
      <h2 className="dosis text-center text-5xl font-extrabold ">
        SPIDER FARMER
        <span className="block">日本上陸</span>
      </h2>
      <p className="mt-4 font-medium dosis text-lg leading-6 ">
        業界に激震！今もっとも勢いのあるLEDブランドSPIDER FARMER 大ヒット中！
        大学等の研究機関にも採用される信頼の性能。ジャストなサイズにマストな機能を搭載した人気モデルを全国どこでも送料無料でお届けします。
      </p>

      <Link href="/products/spiderfarmer/all">
        <a className="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-bold bg-transparent text-green-600 hover:bg-indigo-50">
          SPIDER FARMER 商品ページへ
          <ChevRight />
        </a>
      </Link>
    </div>
  </div>
)
