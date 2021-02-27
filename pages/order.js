import Confirm from "../components/stripe/Confirm"
import OrderForm from "../components/stripe/OrderForm"
import PaymentForm from "../components/stripe/PaymentForm"
import Breadcrumb from "../components/stripe/Breadcrumb"
import CartBar from "../components/stripe/CartBar"
import { useCart } from "../utils/useCart.tsx"
import { useState, useEffect } from "react"

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
  const { items, cartTotal } = useCart()
  const [pay, setPay] = useState(labels[0]["label"])
  const [coupon, setCoupon] = useState({id: ""})
  const [form, setForm] = useState({ key: "ORDER", value: {}})

  // useEffect(() => {
  //   document.body.scrollTop = 0 // For Safari
  //   document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  // }, [form])

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
    setForm
  }

  return (
    <>
      <CartBar {...locals} />
      <Breadcrumb {...locals} />
      <Conditional {...locals} />
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
