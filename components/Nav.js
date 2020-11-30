import Link from "next/link"
import Logo from "./Logo"

export default function Nav({visible}) {
  let className = "bg-black bg-opacity-80 text-center py-2 animate__animated fixed top-0 w-full z-50 "
  if (!visible) {
    className += "animate__slideInDown display-block"
  } else {
    className += "animate__slideOutUp display-none"
  }
  return (
    <nav className={className}>
      <Logo className="text-gray-50" />
      {/* <Link href="/products/mars-hydro-sp3000">
      <a>sp3000</a>
      </Link> */}
    </nav>
  )
}
