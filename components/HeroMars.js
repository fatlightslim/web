import Image from "next/image"
export default function HeroMars({}) {
  return (
    <div className="relative bg-gray-50 ">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              <div className="w-1/2 mx-auto  lg:mx-0">
                <Image
                  src="/img/Amazon-logo-black.png"
                  alt="amazon.com,アメリカAmazon"
                  width={1479}
                  height={450}
                />
              </div>
              <span className="block">全米No. 1 ベストセラー</span>
              <span className="block text-indigo-600 mt-2 mb-1">
                植物育成用LEDライト
              </span>

              <span className="dosis text-6xl sm:text-7xl">MARS HYDRO</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              太陽光のように強力なLEDライトで収穫量が段違いに向上します！ホビー用途から商業用途まで室内栽培の本場アメリカで大人気のベストセラー植物用ライトです。
            </p>
            {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div> */}
          </div>
        </div>
        <div className="relative w-full h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-auto overflow-hidden">
          <Image
            width={1601}
            height={2558}
            className="absolute inset-0 w-full h-full object-cover"
            alt="hero"
            src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/hero.jpg?v=1610334052"
          />
        </div>
      </main>
    </div>
  )
}
