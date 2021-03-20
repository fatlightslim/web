import Image from "next/image"
import Link from "next/link"
import Countdown from "react-countdown"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeroMars from "./HeroMars"

export default function Hero({}) {
  return (
    <Carousel
    autoPlay
    infiniteLoop
    // dynamicHeight
    showStatus={false}
    showThumbs={false}
    >
      <Sale />
      <HeroMars />
      {/* <Sf4000card /> */}
    </Carousel>
  )
}

const Sale = () => (
  <div className="bg-gray-50">
    <Title />
    <div className="sm:flex">
      <div className="flex-shrink-0  sm:mr-4 sm:w-1/2">
        <Image
          src="/img/tengu.jpg"
          alt="tengu"
          className=""
          width={1200}
          height={849}
        />
      </div>
      <div className="mx-auto max-w-7xl w-full py-6 lg:pt-12 text-center lg:text-left">
        <div className="px-4  sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl ">
            <span className="sm:text-6xl dosis">MARS HYDRO</span>
            <span className="text-indigo-600">特集</span>
          </h1>
          <p className="my-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            人気の商品を期間限定で日替わりセール中。ビギナーにオススメのモデルから本格栽培用の定番モデルまでお得な価格でお届けします。
          </p>

          <Timer />

          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow ">
              <Link href="/sale/spring-2021">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  詳細を見る
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Timer = () => (
  <dl className="rounded-lg bg-white shadow-lg">
    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
        終了まで
      </dt>
      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
        <Countdown
          renderer={({ hours, minutes, seconds }) => (
            <span>
              {hours}
              <span className="text-xs px-1">時間</span>
              {minutes}
              <span className="text-xs px-1">分</span>
              {seconds}
              <span className="text-xs px-1">秒</span>
            </span>
          )}
          date={new Date().setHours(23, 59, 59, 999)}
        />
      </dd>
    </div>
  </dl>
)

export const Title = () => (

    <h2 className="text-2xl font-extrabold sm:text-4xl text-gray-50 py-2 noto text-center wahoo bg-black bg-opacity-80">
      諸行無常セール 令和三年春場所
    </h2>
)