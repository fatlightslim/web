import { Timer, Title } from "../../components/Hero"
import { products } from "../../data/products"
import Layout from "../../components/Layout"
import Image from "next/image"

export default function Sale({}) {
  return (
    <Layout>
      <Title />

      <MarsHydro />
      <Timer />

      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                他店より1円でも高い場合はご相談ください。
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                当店は全国一律送料無料でお届けします。万が一商品にご満足いただけない場合は、7日間の返品保証
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {products.map((v) =>
                v.header === "SPIDER FARMER" ? null : (
                  <Product key={v.shortTitle} {...v} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const Product = ({ img, shortTitle, price, desc }) => (
  <div className="mb-8 max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
      <div className="sm:flex">
        <div className="sm:flex-shrink mr-8  mb-8 sm:mb-0">
          <div className="w-48 mx-auto">
          <Image {...img} />
          </div>
        </div>
      <div className="sm:flex-1">
        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {shortTitle}
        </h3>
        <p className="mt-6 text-base text-gray-500">
          {desc[1]}
          {desc[2]}
        </p>
      </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center">
          <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
            What's included
          </h4>
          <div className="flex-1 border-t-2 border-gray-200" />
        </div>
        <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              {/* Heroicon name: solid/check-circle */}
              <svg
                className="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Private forum access</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
      <p className="text-lg leading-6 font-medium text-gray-900">
        <span className="line-through">
          &yen; {price.regular.toLocaleString()}
        </span>
      </p>
      <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
        <span>&yen; {price.sale.toLocaleString()}</span>
        {/* <span className="ml-3 text-xl font-medium text-gray-500">USD</span> */}
      </div>
      <p className="mt-4 text-sm">
        <span href="#" className="font-medium text-gray-500">
          税込・送料込
        </span>
      </p>
      <div className="mt-6">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
          >
            カートに追加
          </a>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <a href="#" className="font-medium text-gray-900 underline">
          詳しく見る
        </a>
      </div>
    </div>
  </div>
)

const MarsHydro = () => (
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
