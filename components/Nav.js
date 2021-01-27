import Logo from "./Logo"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { products } from "../data/products"

export default function Nav({ router, setCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const CartOpen = () => (
    <button
      onClick={() => setCartOpen(true)}
      type="button"
      className="group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
    >
      <svg
        className="h-6 w-6 text-gray-50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    </button>
  )

  const MenuButton = () => (
    <button
      onClick={() => setMenuOpen(!!!menuOpen)}
      type="button"
      className={`${
        menuOpen ? "text-gray-900" : "text-gray-500"
      } group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none `}
    >
      <svg
        className="h-6 w-6 text-gray-50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d={!menuOpen ? "M4 8h16M4 16h16" : "M6 18L18 6M6 6l12 12"}
        />
      </svg>
    </button>
  )

  const FlayoutMenu = () => (
    <div className={`relative z-50`}>
      <div className="relative">
        <div className="max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8">
          <MenuButton />
          <Logo className="text-gray-50 mx-auto" />
          <CartOpen />
        </div>
      </div>
      <div
        className={`absolute z-50 inset-x-0 transform shadow-lg ${
          menuOpen
            ? "transition ease-out duration-200 opacity-100 translate-y-0 block"
            : "transition ease-in duration-150 opacity-0 translate-y-1 hidden"
        }`}
      >
        <Menu />
        <Actions />
      </div>
    </div>
  )
  let className = "py-1 bg-black bg-opacity-80 z-30"
  if (router && router.pathname === "/") {
    className += " fixed top-0 w-full z-40"
  }
  return (
    <div className={className}>
      <FlayoutMenu />
    </div>
  )
}

const Menu = () => (
  <div className="bg-white mt-1">
    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
      {products.map((v, i) => (
        <List {...v} key={v.shortTitle} index={i} />
      ))}
    </div>
  </div>
)

const List = ({ shortTitle, descForMenu, href, img, index }) => {
  let className =
    "-m-3 p-3 flex flex-col justify-between sm:rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 border-b border-dotted sm:border-none last:border-none"
  if (index === products.length - 1) {
    className += " border-none"
  }

  return (
    <Link href={href}>
      <a className={className}>
        <div className="flex md:h-full lg:flex-col md:text-center">
          <div className="w-16 sm:w-32 md:mx-auto">
            <Image {...img}  />
          </div>
          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
            <div>
              <p className="text-base font-bold text-gray-900 dosis">
                MARS HYDRO {shortTitle}
              </p>
              <p className="mt-1 text-sm text-gray-500">{descForMenu}</p>
            </div>

            {/* <Link href={href}>
          <a
            className="float-left mt-1 mr-2 px-2 py-1 border border-transparent text-white text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            購入
          </a>
        </Link> */}
            <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
              さらに詳しく <span aria-hidden="true">→</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

const actions = [
  // { label: "全ての商品を見る" },
  { label: "よくある質問", link: "/faq" },
  { label: "お問い合わせ", link: "/contact" },
]

const Actions = () => (
  <div className="bg-gray-50">
    <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
      {actions.map((v) => (
        <ActionMenu {...v} key={v.label} />
      ))}
    </div>
  </div>
)

const ActionMenu = ({ label, link }) => (
  <div className="flow-root">
    <Link href={link}>
      <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
        {/* Heroicon name: play */}
        <svg
          className="flex-shrink-0 h-6 w-6 text-gray-400"
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
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-3">{label}</span>
      </a>
    </Link>
  </div>
)
