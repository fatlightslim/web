import { ChevRight } from "../Svg"
import Link from "next/link"
import Image from "next/image"
import { getImageFields } from "../../utils/contentful"

export default function Happy420(props) {
  const { sf7000, sp3000, sp150 } = props.products
  const campaign = [sf7000, sp3000, sp150]
  // console.log(campaign);
  return (
    <div className="overflow-hidden bg-gray-900 text-gray-300 -mt-32 pt-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16">
        <div className="sm:mb-24 xl:mb-32 lg:flex">
          <div className="flex-none relative z-10 flex flex-col items-start lg:pt-10 max-w-screen-sm mx-auto lg:max-w-2xl lg:mx-0 lg:pr-20 mb-12 sm:mb-16 lg:mb-0">
            <h1 className="order-1 text-3xl sm:text-5xl sm:leading-none font-extrabold tracking-tight text-white mb-4">
              <span className="text-indigo-400">まとめ買い</span> キャンペーン
            </h1>
            <p className="text-sm font-semibold tracking-wide uppercase mb-4">
              期間限定
            </p>
            <p className="order-1 leading-relaxed mb-8">
              多くのリクエストありがとうございます！お客様のご要望にお応えして、複数台購入時の割引セールを<span className="font-bold text-red-400">期間限定&amp;特別価格</span>でご提供させていただきます。
              対象モデルを複数台ご購入時にクーポンコード「
              <span className="font-bold text-green-400">HAPPY420</span>
              」を入力していただくことで、<span className="font-bold text-yellow-400">一台につき&yen;5,000OFF</span>！ 大学など研究期間でのご利用から本格的な設備構築をご検討中のプロ農家様！この機会にぜひご利用ください。
              <span className="font-bold text-pink-400">送料無料・3年保証・7日間返品無料</span>でお届けいたします。
            </p>
          </div>
          <Beam />

          <div className="mx-auto mb-20 sm:mb-0 sm:w-1/2">
            <Image
              src="/img/tengu.jpg"
              alt="tengu"
              className=""
              width={800}
              height={566}
            />
          </div>
        </div>
          {/* <h2 className="text-3xl font-extrabold text-white mb-8 sm:-mt-12" >対象モデル</h2> */}

        <div className="relative max-w-screen-sm mx-auto lg:mx-0 lg:max-w-none grid lg:grid-cols-3 gap-10 lg:gap-8 text-sm">
          {campaign.map((v) => {
            const { fields, sys } = v
            const { name, url, image, title, lead } = fields
            return (
              <div key={sys.id} className="flex space-x-6">
                <div className="w-48 h-48">
                  <Image {...getImageFields(image)} />
                </div>
                <div>
                  <h2 className="font-semibold text-white mb-2">{title}</h2>
                  <p className="leading-normal mb-6">{lead.desc}</p>

                  <Link href={url}>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      対象モデルをチェック
                      <ChevRight />
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Beam = () => (
  <div className="relative max-w-screen-sm mx-auto lg:max-w-none lg:-ml-12 lg:mr-0 xl:-ml-6">
    <img
      // src="/img/beams.jpg"
      src="https://tailwindui.com/img/beams.jpg"
      alt=""
      className="absolute top-[-20%] sm:top-[-40%] transform translate-x-[-34%] w-[40.312rem] sm:w-[60.5rem] max-w-none"
    />
    {/* <svg
      viewBox="0 0 900 589"
      className="w-[135%] sm:w-[56.25rem] overflow-visible relative lg:absolute lg:top-0 lg:left-0 mx-auto lg:mx-0 mb-[-17%] sm:-mb-44 lg:mb-0"
    >
      <defs>
        <filter id="hero-drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation={20} />
          <feOffset dx={0} dy={10} result="offsetblur" />
          <feFlood floodColor="rgba(0,0,0,0.25)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hero-drop-shadow-2">
          <feGaussianBlur in="SourceAlpha" stdDeviation={6} />
          <feOffset dx={0} dy={3} result="offsetblur" />
          <feFlood floodColor="rgba(0,0,0,0.2)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hero-gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="white" />
          <stop offset="80%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="black" stopOpacity={0} />
        </linearGradient>
        <mask id="hero-mask">
          <rect
            x={-32}
            y={-32}
            width={964}
            height={653}
            fill="url(#hero-gradient)"
          />
        </mask>
        <clipPath id="one">
          <rect width={560} height={265} rx={6} />
          <rect width={308} height={218} x={592} rx={6} />
          <rect width={236} height={241} x={592} y={250} rx={6} />
          <rect width={476} height={356} x={84} y={297} rx={6} />
        </clipPath>
      </defs>
      <g mask="url(#hero-mask)">
        <rect
          width={777}
          height={605}
          x="68.5"
          y="-15.5"
          rx={6}
          stroke="rgba(128, 135, 149, 0.2)"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <line
          vectorEffect="non-scaling-stroke"
          x1={576}
          x2={576}
          y1={-15}
          y2={605}
          stroke="rgba(128, 135, 149, 0.2)"
        />
        <line
          vectorEffect="non-scaling-stroke"
          x1="68.5"
          x2={576}
          y1={281}
          y2={281}
          stroke="rgba(128, 135, 149, 0.2)"
        />
        <line
          vectorEffect="non-scaling-stroke"
          x1={576}
          x2="845.5"
          y1={234}
          y2={234}
          stroke="rgba(128, 135, 149, 0.2)"
        />
        <g filter="url(#hero-drop-shadow)">
          <g filter="url(#hero-drop-shadow-2)">
          </g>
        </g>
      </g>
    </svg> */}
  </div>
)
