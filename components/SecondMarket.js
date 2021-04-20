import Image from "next/image"
import { ChevRight } from "./Svg"
import Link from "next/link"


export default function SecondMarket() {
  return (
    <div className="relative z-10 bg-white overflow-hidden pb-24">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <a
            href="#"
            className="mb-4 inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
          >
            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
              送料無料
            </span>
            <span className="ml-4 text-sm">即日配送　</span>
            {/* <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" /> */}
          </a>
            <h1>
              {/* <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                2ndマーケット
              </span> */}
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">認定整備済製品</span>
                {/* <span className="block text-indigo-600">online business</span> */}
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              FATLightSLIM認定の整備プロセスを経て品質が保証された
              展示品や整備済製品を特別価格、1ヶ月の製品保証つきでご提供します。
              定番のMARS HYDROや人気沸騰中のSPIDER
              FARMERをお得に手に入れるチャンス！
              在庫限りの商品となりますので売り切れの場合はご容赦ください。
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="rounded-md shadow">
                <Link href="/products/secondmarket">
                  <a
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    aria-describedby="tier-standard"
                  >
                    整備済製品の一覧
                    <ChevRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y={72}
                width={640}
                height={640}
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg ">
              <Image
                src="/img/secondhand.jpg"
                alt=""
                width={970}
                height={473}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
