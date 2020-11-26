import Link from "next/link"
import Logo from "./Logo"

export default function Nav() {
  return (
    <nav className="bg-gray-900 bg-opacity-90 text-center py-2">
      <Logo className="text-gold" />
      <Link href="/products/mars-hydro-sp3000">
      <a>sp3000</a>
      </Link>
    </nav>
  )
}
