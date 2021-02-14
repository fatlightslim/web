import { useEffect, useState, cloneElement } from "react"
import Cookies from "js-cookie"
import Nav from "./Nav"
import Head from "next/head"
import Footer from "./Footer"
import { client } from "../scripts/shopify"
import BuyButton from "./BuyButton"
import Cart from "./Cart"

// client.product.fetchAll().then((products) => {
//   // Do something with the products
//   console.log(products);
// });

export default function Layout({
  children,
  router,
  productId,
  productJson,
  className,
  data = {
    title: `植物用LEDライト専門店 ${process.env.site.name}`,
    desc:
      "海外で人気の植物栽培用ライトを安心価格で安全にお届けします。ホビー用途から商用向けまでお取り扱い中！MARS HYDRO公式代理店。中古LEDライトの買取も随時受付中。",
    href: process.env.url,
    color: "#006eff",
    img:
      "http://cdn.shopify.com/s/files/1/0470/9089/2956/files/Screen_Shot_2020-11-14_at_17.52.16_1200x1200.png?v=1605489192",
    og: {
      site_name: process.env.site.name,
      type: "website",
      url: process.env.site.url,
    },
    tw: {
      card: "summary_large_image",
    },
  },
}) {
  const [fixedHeader, setFixedHeader] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [checkout, setCheckout] = useState({ lineItems: [] })
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (productId) {
      const checkoutId = Cookies.get("checkoutId")
      if (checkoutId) {
        client.checkout.fetch(checkoutId).then((res) => {
          if (res) {
            setCheckout(res)
          } else {
        client.checkout.create().then((res) => {
          setCheckout(res)
          Cookies.set("checkoutId", res.id, { expires: 365 })
        })

          }
        })
      } else {
        client.checkout.create().then((res) => {
          setCheckout(res)
          Cookies.set("checkoutId", res.id, { expires: 365 })
        })
      }

      client.product.fetch(productId).then((res) => {
        setProduct(res)
      })
    }
    // client.product.fetchAll().then((products) => {
    //   // Do something with the products
    //   console.log(products);
    // });
  }, [])

  const addVariantToCart = (variantId, quantity) => {
    setCartOpen(true)

    const lineItemsToAdd = [{ variantId, quantity }]
    const checkoutId = checkout.id

    return client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => setCheckout(res))
  }

  const updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = checkout.id
    const lineItemsToUpdate = [{ id: lineItemId, quantity }]

    return client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => setCheckout(res))
  }

  const removeLineItemInCart = (lineItemId) => {
    const checkoutId = checkout.id

    return client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        setCheckout(res)
      })
  }

  const props = {
    Cart: {
      cartOpen,
      setCartOpen,
      checkout,
      updateQuantityInCart,
      removeLineItemInCart,
    },
    BuyButton: {
      fixedHeader,
      addVariantToCart,
      product,
      ...productJson,
    },
  }

  const additionalProps = { addVariantToCart, product }

  // const newChildren =
  //   children.length > 0
  //     ? children.map((v, i) => {
  //         return (
  //           <React.Fragment key={i}>
  //             {cloneElement(v, additionalProps)}
  //           </React.Fragment>
  //         )
  //       })
  //     : children

  const newChildren = React.Children.map(children, function (child) {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, additionalProps)
    }
    return child
  })

  return (
    // <div className="mx-auto">
    <>
      <Head>
        <title>
          {productJson && `${productJson.meta.title} | `}
          {data.title}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={data.color} />
        <meta
          name="description"
          content={(productJson && productJson.meta.description) || data.desc}
        />
        <link rel="canonical" href={data.href} />
        <meta property="og:site_name" content={data.og.site_name} />
        <meta property="og:url" content={data.og.url} />
        <meta property="og:title" content={data.title} />
        <meta property="og:type" content={data.og.type} />
        <meta property="og:description" content={data.desc} />

        <meta property="og:image" content={data.img} />
        <meta property="og:image:secure_url" content={data.img} />

        <meta name="twitter:card" content={data.tw.card} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.desc} />
      </Head>
      <div
        className={`${
          router && router.pathname === "/" ? "pt-10" : ""
        } ${className}`}
      >
        <Nav setCartOpen={setCartOpen} router={router} />
        {product && product.title !== "MARS HYDRO TSシリーズ" && (
          <BuyButton {...props.BuyButton} />
        )}
        {newChildren}
        <Footer />
        <Cart {...props.Cart} />
      </div>
    </>
  )
}
