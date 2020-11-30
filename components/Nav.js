import Link from "next/link"
import Logo from "./Logo"

export default function Nav() {
  return (
    <nav className="bg-black bg-opacity-80 text-center py-2 fixed top-0 w-full z-50">
      <Logo className="text-gray-50" />
      {/* <Link href="/products/mars-hydro-sp3000">
      <a>sp3000</a>
      </Link> */}
    </nav>
  )
}
