import { NextSeo } from "next-seo"
import Confirm from "../../components/cart/Confirm"
import OrderForm from "../../components/cart/OrderForm"
import PaymentForm from "../../components/cart/PaymentForm"
import Breadcrumb from "../../components/cart/Breadcrumb"
import CartBar from "../../components/cart/CartBar"
import { useCart } from "react-use-cart"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Footer from "../../components/Footer"

const labels = [
  {
    label: "オンライン決済",
    desc:
      "各種クレジットカード, Apple Pay, Google Payが手数料無料でご利用いただけます.",
  },
  {
    label: "代金引換",
    desc:
      "国内配送のみ. 代引手数料がかかります. 佐川急便の代引きサービスでお届けします.",
  },
]
export default function Payment(props) {
  const router = useRouter()
  const { items, cartTotal } = useCart()
  const [pay, setPay] = useState(labels[0]["label"])
  const [coupon, setCoupon] = useState({ id: "" })
  const [form, setForm] = useState({ key: "ORDER", value: {} })

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/")
    }
  }, [])


  const locals = {
    ...props,
    items,
    cartTotal,
    labels,
    coupon,
    setCoupon,
    pay,
    setPay,
    form,
    setForm,
  }

  return items.length > 0 && (
    <>
      <NextSeo
        noindex
        title="注文フォーム"
        description=""
      />
    <div className="pb-20 border-b">
      <CartBar {...locals} />
      <Breadcrumb {...locals} />
      <Conditional {...locals} />
    </div>
      <Footer />
    </>
  ) 
}

const Conditional = (props) => {
  switch (props.form.key) {
    case "CONFIRM":
      return <Confirm {...props} />
    case "ORDER":
      return <OrderForm {...props} />
    case "PAYMENT":
      return <PaymentForm {...props} />
  }
}
