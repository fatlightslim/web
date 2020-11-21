import Link from "next/link"
import Logo from "./Logo"
import Image from "next/image"

const style = {
  md1:
    "px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
  md2:
    "ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
  sm1:
    "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
  sm2:
    "mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
}

export default function Nav({
  data = [
    {
      name: "Home",
      href: "/",
      className: {
        md: style.sm2,
        sm: style.sm2,
      },
    },
    {
      name: "Products",
      href: "/products",
      className: {
        md: style.sm2,
        sm: style.sm2,
      },
    },
    {
      name: "Landing",
      href: "/landing",
      className: {
        md: style.sm2,
        sm: style.sm2,
      },
    },
    {
      name: "Thanks",
      href: "/thanks",
      className: {
        md: style.sm2,
        sm: style.sm2,
      },
    },
  ],
}) {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {/* <!-- Icon when menu is closed. --> */}
              {/* <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Logo className="text-gold " />
            {/* <div className="flex"> */}
              {/* <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/v1/workflow-logo-on-dark.svg"
                alt="Workflow logo"
              /> */}
            {/* </div> */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {data.map((v) => {
                  return (
                    <Link key={v.name} href={v.href}>
                      <a className={v.className.md}>{v.name}</a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              {/* <!-- Heroicon name: bell --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* <!-- Profile dropdown --> */}
            {/* <div className="ml-3 relative">
              <div>
                <button
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3">
          {data.map((v) => {
            return (
              <Link key={v.name} href={v.href}>
                <a className={v.className.sm}>{v.name}</a>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
