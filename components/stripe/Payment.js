import Confirm from "./Confirm"
import OrderForm from "./OrderForm"
import PaymentForm from "./PaymentForm"
import Breadcrumb from "./Breadcrumb"
import CartBar from "./CartBar"
import { useCart } from "../../utils/useCart.tsx"

export default function Payment(props) {
  const { items, cartTotal } = useCart()
  const locals = {...props, items, cartTotal}
  return (
    <>
      <CartBar {...locals} />
      <Breadcrumb {...props} />
      <Conditional {...locals} />
    </>
  )
}

const Conditional = (props) => {
  switch (props.form.key) {
    // case "DONE":
    //   return <Done {...props} />
    case "CONFIRM":
      return <Confirm {...props} />
    case "ORDER":
      return <OrderForm {...props} />
    case "PAYMENT":
      return <PaymentForm {...props} />
  }
}
