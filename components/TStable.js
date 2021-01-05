import Image from "next/image"
import { tsdata } from "../data/tsdata"
import Link from "next/link"

export default function TStable({ urls, addVariantToCart  }) {
  return (
    <div className="bg-gray-900 relative z-30">
      <div className="text-white max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="mt-12 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {[0, 1, 2].map((v) => {
            return <Product key={v} {...tsdata[v]} product={urls[v]} addVariantToCart={addVariantToCart}  />
          })}
        </div>
        <div className=" sm:mt-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
          {[3, 4].map((v) => {
            return <Product key={v} {...tsdata[v]} product={urls[v]} addVariantToCart={addVariantToCart} />
          })}
        </div>
      </div>
    </div>
  )
}

function Header(params) {
  return (
    <div className="sm:flex sm:flex-col sm:align-center">
      <h1 className="text-4xl font-extrabold text-white text-center">
        TSシリーズ製品仕様
      </h1>
      <p className="mt-5 text-xl text-gray-400 text-center">
        選べる５つのサイズ
      </p>
    </div>
  )
}
function Img({ img }) {
  return (
    <Image
      src={img.src}
      width={img.width}
      height={img.height}
      alt={img.alt}
      className="sm:rounded"
    />
  )
}

function Check() {
  return (
    <svg
      className="flex-shrink-0 h-5 w-5 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function List({ text }) {
  return (
    <li className="flex space-x-3">
      <Check />
      <span className="text-sm text-gray-500">{text}</span>
    </li>
  )
}

function Title({ product, img, shortTitle, price, short, addVariantToCart }) {
  return (
    <div className="p-6 dosis">
      <Img img={img} className="sm:rounded" />

      <h2 className="text-lg leading-6 font-medium text-gray-900">{shortTitle}</h2>
      <p className="mt-4 text-sm text-gray-500">{short}</p>
      <p className="mt-8">
        <span className="text-4xl font-extrabold text-gray-900">
          ¥{price.sale}
        </span>
        <span className="text-base font-medium text-gray-500 line-through">
          ¥{price.regular}
        </span>
      </p>
      <button
        onClick={() => addVariantToCart(product.id, 1)}
        className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
      >
        今すぐ購入
      </button>
    </div>
  )
}
function Product(props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 my-4 sm:my-0">
      <Title {...props} />
      <div className="pt-6 pb-8 px-6">
        <ul className="mt-6 space-y-4">
          {props.spec.map((v, i) => {
            return <List key={i} text={v} />
          })}
        </ul>
      </div>
    </div>
  )
}
