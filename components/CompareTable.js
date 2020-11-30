import Image from "next/image";
import { products } from "../data/products";
const data = products[0];

function Button(params) {
  return (
    <div className="mt-8">
      <div className="rounded-lg shadow-md">
        <a
          href="#"
          className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
          aria-describedby="tier-hobby"
        >
          詳細を見る
        </a>
      </div>
    </div>
  );
}

function Title({ title, price }) {
  return (
    <div className="bg-white px-6 py-10">
      <div>
        <h3
          className="text-center text-2xl font-medium text-gray-900"
          id="tier-hobby"
        >
          {title}
        </h3>
        <div className="mt-4 flex items-center justify-center">
          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
            <span className="mt-2 mr-2 text-4xl font-medium">&yen;</span>
            <span className="font-extrabold">{price}</span>
          </span>
        </div>
        <span className="text-xs block text-center font-medium text-gray-500">
          税込・送料込
        </span>
      </div>
    </div>
  );
}

function List({ text }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <svg
          className="flex-shrink-0 h-6 w-6 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p className="ml-3 text-base font-medium text-gray-500">{text}</p>
    </li>
  );
}

function Card({ children, bg, text }) {
  return (
    <div className="bg-white">
      <div className={`mx-auto -mt-8 text-center max-w-xs ${text}`}>
        <div
        // className={`bg-gradient-to-r ${bg.inner} lg:rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Img({ img }) {
  return (
    <Image
      src={img.src}
      width={img.width}
      height={img.height}
      alt={img.alt}
      className="sm:rounded-lg"
    />
  );
}

function Header(params) {
  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div className="text-center">
        <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
          Special Offer
        </h2>
        <p className="mt- text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {/* Special Offer */}
          今月のオファー
        </p>
        <p className="mt-3 max-w-4xl mx-auto text-sm text-gray-300 sm:mt-5 sm:text-md">
          為替・配送費の影響で価格が毎月変動することをご了承ください。最安値でご提供できるよう最大限努力いたします。
        </p>
      </div>
    </div>
  );
}

function Product({ title, price, index }) {
  let className =
    "mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3"
  if (index === "last") {
    className = "mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3"
  }
  return (
    <div className={className}>
      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
        <div className="flex-1 flex flex-col">
          <Title title={title} price={price} />
          <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            <ul className="space-y-4">
              {[
                "Pariatur quod similique",
                "Pariatur quod similique",
                "Pariatur quod similique",
              ].map((v, i) => {
                return <List key={i} text={v} />;
              })}
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductMain(params) {
  return (
    <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
      <div className="relative z-10 rounded-lg shadow-xl">
        <div
          className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-x-0 top-0 transform translate-y-px">
          <div className="flex justify-center transform -translate-y-1/2">
            <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
              一番人気
            </span>
          </div>
        </div>
        <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
          <div>
            <h3
              className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
              id="tier-growth"
            >
              SP3000
            </h3>
            <Card {...data}>
              <Img {...data} />
            </Card>
            <div className="mt-4 flex items-center justify-center">
              <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                <span className="mt-2 mr-2 text-4xl font-medium">&yen;</span>
                <span className="font-extrabold">79,800</span>
              </span>
            </div>
            <span className="text-xs block text-center font-medium text-gray-500">
              税込・送料込
            </span>
          </div>
        </div>
        <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
          <ul className="space-y-4">
            {[
              "2020年最新版LB301Bチップ搭載",
              "Pariatur quod similique",
              "Pariatur quod similique",
              "Pariatur quod similique",
              "Pariatur quod similique",
            ].map((v, i) => {
              return <List key={i} text={v} />;
            })}
          </ul>
          <div className="mt-10">
            <div className="rounded-lg shadow-md">
              <a
                href="#"
                className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                aria-describedby="tier-growth"
              >
                購入する
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CompareTable(params) {
  return (
    <div className="bg-gray-900 dosis">
      <Header />

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <Product title="SP150" price="29,800" />
              <ProductMain />
              <Product title="TSシリーズ" price="24,800~" index="last" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
