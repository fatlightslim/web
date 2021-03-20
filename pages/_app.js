import "../styles/index.css"
import "video-react/dist/video-react.css"

import { DefaultSeo } from "next-seo"
import { useRouter } from "next/router"
import * as gtag from "../scripts/gtag"
import { useState, useEffect } from "react"
import { CartProvider } from "../utils/useCart.tsx"

import * as data from "../manifest.json"
const products = data.default

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const initialForm = { key: null, value: {} }
  const [form, setForm] = useState(initialForm)
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on("routeChangeComplete", handleRouteChange)
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange)
  //   }
  // }, [router.events])

  useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [form])

  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  const props = {
    initialForm,
    products,
    cartOpen,
    setCartOpen,
    menuOpen,
    setMenuOpen,
    form,
    setForm,
  }

  return (
    <CartProvider>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} {...props} />
    </CartProvider>
  )
}

export default MyApp
