import Image from "next/image"

export default function NewHero(params) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 lg:bg-gray-300">
      <div
        className="hidden lg:block absolute  scroll-bg"
        style={{
          height: "400%",
          width: "400%",
          top: "-25%",
          left: "-100%",
          backgroundSize: "800px auto",
          backgroundImage: 'url("/img/hero.jpg")',
        }}
      >
        {/* <Image
          src="/img/hero.jpg"
          alt="hero"
          layout="fill"
          objectFit="scale-down"
          // className="object-cover"
          // className="object-center object-cover pointer-events-none"
          // objectPosition="100% -25%"
          // sizes="800px auto"
          // width={1601}
          // height={2558}
        /> */}
      </div>

      <div
        className="relative min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-20 lg:pl-8 lg:pr-8 bg-no-repeat"
        style={{
          backgroundImage: 'url("/img/angled-background.svg")',
          backgroundSize: "100% auto",
          backgroundPosition: "-5px -5px",
        }}
      >
        <div>
          <div className="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold font-display text-white sm:mt-6 xl:text-6xl">
              <>
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
              </>
            </h1>
            <p className="mt-2 text-xl text-gray-300 sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl xl:pr-4">
              太陽光のように強力なLEDライトで収穫量が段違いに向上します！ホビー用途から商業用途まで室内栽培の本場アメリカで大人気のベストセラー植物用ライトです。
            </p>
            {/* <div className="mt-6 sm:flex sm:mt-8 xl:mt-12">
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-gray-900 bg-white shadow-sm hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150 xl:text-lg xl:py-4"
              >
                Explore
              </a>
              <a
                href="/"
                className="mt-4 sm:ml-4 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150 xl:text-lg xl:py-4"
              >
                Get early access →
              </a>
            </div> */}
          </div>
          <div className="mt-8 sm:mt-12 relative h-64 overflow-hidden bg-gray-300 lg:hidden">
          <div
              className="absolute scroll-bg"
              style={{
                height: "800%",
                width: "400%",
                top: "-50%",
                backgroundSize: "400px auto",
                backgroundImage: 'url("/img/hero.jpg")',
              }}
            />
              {/* <Image
                src="/img/hero.jpg"
                alt="hero"
                layout="fill"
                objectFit="scale-down"
          // objectPosition="100% -25%"
          // sizes="800px auto"
          // width={1601}
          // height={2558}
              /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
