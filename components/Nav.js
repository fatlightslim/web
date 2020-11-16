import Link from "next/link"
import Logo from "./Logo"

const style = {
  normal:
    "px-4 py-2 text-gray-400 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded",
  btn:
    "text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer",
}
const links = [
  {
    name: "Home",
    href: "/",
    style: style.normal,
  },
  {
    name: "Products",
    href: "/products",
    style: style.normal,
  },
  {
    name: "Landing",
    href: "/landing",
    style: style.normal,
  },
  {
    name: "Minji",
    href: "/minji",
    style: style.normal,
  },
  {
    name: "Okada",
    href: "/okada",
    style: style.normal,
  },
  {
    name: "Abiru",
    href: "/abiru",
    style: style.normal,
  },
  {
    name: "Login",
    href: "/",
    style: style.normal,
  },
  {
    name: "Signup for free",
    href: "/",
    style: style.btn,
  },
]

function MainMenu() {
  return (
    <ul className="flex flex-row">
      {links.map((v, i) => {
        return i > 5 ? null : (
          <li key={i} className="">
            <Link href={v.href}>
              <a className={v.style}>{v.name}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function SecondMenu() {
  return (
    <ul className="flex flex-row">
      {links.map((v, i) => {
        return i < 6 ? null : (
          <li key={i} className="">
            <Link href={v.href}>
              <a className={v.style}>{v.name}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function Nav() {
  return (
    <nav className="p-4 nav-section w-full bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between flex-content-center items-center py-2 lg:py-0 px-0 lg:px-0">
          <Logo className="text-gold" />
          <div className="hidden md:block">
            <MainMenu />
          </div>
          <div className="hidden md:block">
            <SecondMenu />
          </div>

          <div className="hamburger-menu px-2 py-1 block md:hidden rounded border border-gray-500 uppercase">
            Menu
          </div>
          <div className="navbar mobile-nav px-0 mx-0 hidden md:hidden fixed top-0 left-0 w-full bg-white h-screen fixed z-50 p-3">
            <div className="flex flex- justify-between px-3 py-2">
              <Logo />
              <div className="close-menu flex items-center content-center justify-center px-2 py-1 bg-black rounded px-x py-1 text-white uppercase">
                Close
              </div>
            </div>
            <ul className="flex flex-col text-center mt-2 pt-2 w-full">
              <li className="active w-full">
                <a
                  className="w-full font-bold text-lg border-t border-gray-200 block py-3"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="w-full">
                <a
                  className="w-full text-lg border-t border-gray-200 block py-3"
                  href="features.html"
                >
                  Features
                </a>
              </li>
              <li className="w-full">
                <a
                  className="w-full text-lg border-t border-gray-200 block py-3"
                  href="pricing.html"
                >
                  Pricing
                </a>
              </li>
              <li className="w-full">
                <a
                  className="w-full text-lg border-t border-gray-200 block py-3"
                  href="contact.html"
                >
                  Contact
                </a>
              </li>
              <li className="w-full">
                <a
                  className="w-full text-lg border-t border-gray-200 block py-3"
                  href="login.html"
                >
                  Login
                </a>
              </li>
              <li className="signup py-4 border-t border-gray-200 p-4">
                <a className={style.btn} href="signup.html">
                  Signup for free
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
