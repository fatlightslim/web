import Confirm from "./Confirm"
import OrderForm from "./OrderForm"
import PaymentForm from "./PaymentForm"
import Breadcrumb from "./Breadcrumb"
import CartBar from "./CartBar"

export default function Payment(props) {
  return (
    <>
      <CartBar {...props} />
      <Breadcrumb {...props} />
      <Conditional {...props} />
    </>
  )
}

const Conditional = (props) => {
  switch (props.form.key) {
    case "DONE":
      return <Done {...props} />
    case "CONFIRM":
      return <Confirm {...props} />
    case "ORDER":
      return <OrderForm {...props} />
    case "PAYMENT":
      return <PaymentForm {...props} />
  }
}
