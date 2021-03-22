import "../styles/index.css"
import "video-react/dist/video-react.css"

import Router from "next/router";
import withGA from "next-ga";
import { UserProvider } from "@auth0/nextjs-auth0"
import { DefaultSeo } from "next-seo"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { CartProvider } from "react-use-cart"
import * as data from "../manifest.json"
const products = data.default

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  const props = {
    products,
    cartOpen,
    setCartOpen,
    menuOpen,
    setMenuOpen,
  }

  // const handleItemUpdate = (item) => {
  //   console.log(pageProps);
  // }
  const handleItemAdd = (item) => {
    setCartOpen(true)
  }

  return (
    <UserProvider>
      <CartProvider
        id="fatlightslim"
        onItemAdd={handleItemAdd}
        // onItemUpdate={handleItemUpdate}
      >
        <DefaultSeo
          title="植物用LEDライト専門店 FATLightSLIM"
          description="海外で人気の植物栽培用ライトを安心価格で安全にお届けします。ホビー用途から商用向けまでお取り扱い中！MARS HYDRO公式代理店。SPIDER FARMER公式代理店"
          openGraph={{
            type: "website",
            locale: "ja_JP",
            url: "https://fatlightslim.com/",
            site_name: "FATLightSLIM",
          }}
          twitter={{
            handle: "@fatlightslim",
            site: "@fatlightslim",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} {...props} />
      </CartProvider>
    </UserProvider>
  )
}

export default  withGA("UA-179895790-1", Router)(MyApp)
