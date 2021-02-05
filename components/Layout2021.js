import { withRouter } from "next/router"
import { useState, useEffect, useReducer } from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import Cart from "./Cart"
import AddToCartBar from "./AddToCartBar"
import Payment from "./Payment"

const APP_KEY = "fatlightslim_cart"

const formatter = new Intl.NumberFormat("ja", {
  style: "currency",
  currency: "JPY",
})

function Layout({ product, children, router }) {
  const initialForm = { key: null, value: {} }
  const [form, setForm] = useState(initialForm)
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    const appState = localStorage.getItem(APP_KEY)
    if (appState) setItems(JSON.parse(appState))

  }, [])

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [form])

  const updateQtyInCart = (id, qty) => {
    const copied = items.filter((v) => v.product.sys.id !== id)
    const target = items.filter((v) => v.product.sys.id === id)
    target[0]["qty"] = qty
    setItems([...copied, target[0]])
  }

  const removeItemInCart = (id) => {
    const copied = items.filter((v) => v.product.sys.id !== id)
    setItems([...copied])
  }

  const addItem = (product, qty = 1) => {
    setCartOpen(true)
    const copied = items.filter((v) => v.product.sys.id !== product.sys.id)
    setItems([...copied, { product, qty }])
  }

  const locals = {
    formatter,
    product,
    items,
    addItem,
    cartOpen,
    setCartOpen,
    form,
    setForm,
    updateQtyInCart,
    removeItemInCart,
    initialForm
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {!form.key && <Nav {...locals} />}
          {!["/", "/payment"].includes(router.pathname) && (
            <AddToCartBar {...locals} />
          )}
          {form.key ? (
            <Payment {...locals} />
          ) : (
            <>
              {children}
              <Cart {...locals} />
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default withRouter(Layout)
