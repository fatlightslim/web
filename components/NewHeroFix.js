import Image from "next/image"
const bg =
  "https://cdn.shopify.com/s/files/1/0470/9089/2956/files/hero.jpg?v=1610334052"

export default function NewHeroFix(params) {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between lg:justify-start"
              aria-label="Global"
            ></nav>
          </div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
              <h1 className="mt-3 text-3xl sm:text-4xl xl:text-5xl font-semibold font-display text-white sm:mt-6 ">
                <div style={{ width: 130 }} className="mt-8 sm:ml-2 lg:hidden">
                  <Image
                    src="/img/amazon_PNG11-768x280.png"
                    alt="amazon.com,アメリカAmazon"
                    width={300}
                    height={109}
                  />
                </div>
                <div
                  style={{ width: 220 }}
                  className="xl:-mt-20 ml-2 hidden lg:block"
                >
                  <Image
                    src="/img/amazon_PNG11-768x280.png"
                    alt="amazon.com,アメリカAmazon"
                    width={300}
                    height={109}
                  />
                </div>
                <span className="block -mt-4 mb-2">全米No. 1 ベストセラー</span>
                <span className="block mb-4">植物育成用LEDライト</span>

                <span className="dosis font-bold text-gold text-180 ">
                  MARS HYDRO
                </span>
              </h1>
              <p className="mt-2 text-xl text-gray-300 sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl xl:pr-4">
                太陽光のように強力なLEDライトで収穫量が段違いに向上します！ホビー用途から商業用途まで室内栽培の本場アメリカで大人気のベストセラー植物用ライトです。
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 scroll-bg">
        <Image
          src={bg}
          alt="landing"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          width={1601}
          height={2558}
        />
      </div>
    </div>
  )
}
