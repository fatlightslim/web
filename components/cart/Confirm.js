import { fetchPostJSON, cleanUp, calcFee } from "../../utils/api-helpers"
import { useState } from "react"
import { Spin, Lock } from "../Svg"
import { useRouter } from "next/router"
import { useCart } from "react-use-cart"

export default function Confirm({ setForm, form, coupon, setCartOpen, labels, pay  }) {
  const router = useRouter()
  const { items, cartTotal, totalItems } = useCart()
  const { addr1, addr2, pref, name, tel, zip, email } = form.value.customer
  const [loading, setLoading] = useState(false)
  const fee = labels[0]["label"] === pay ? 0 : calcFee(cartTotal)
  const coupon_off = coupon.amount_off || 0
  const delivery = 0
  const total = cartTotal + fee + delivery - coupon_off

  const onSubmit = () => {
    const { _id, customer } = form.value
    setLoading(true)
    setCartOpen(false)

    fetchPostJSON("/api/orders", {
      _id,
      customer,
      items: cleanUp(items),
      status: "cod",
      charge: {
        delivery,
        discount: coupon_off,
        deliveryFee: fee,
        subTotal: cartTotal,
        tax: 0,
        total,
        pay: "cod",
      },
      url: window.location.origin,
    }).then((value) => {
      setLoading(false)
      router.push({
        pathname: "/order/success",
        query: { _id: value._id, price: total },
      })
    })
  }

  const onError = (errors, e) => {
    console.log(errors)
  }

  return (
    <div className="px-4 max-w-xl mx-auto">
      <h3 className="text-center py-8 font-bold text-gray-600">
        注文内容を確認してください。
      </h3>

      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="px-4 py-2 sm:p-MongoError: Updating the path '_ts' would create a conflict at 6 grid grid-cols-2">
          <p className="font-semibold text-sm">配送情報</p>
          <a
            onClick={(e) => setForm({ key: "ORDER", value: form.value })}
            href="#"
            className="text-right text-xs text-indigo-600 mt-1"
          >
            編集
          </a>
        </div>
        <div className="px-4 py-5 sm:p-6 text-sm">
          {zip}
          <br />
          {pref}
          {addr1}
          {addr2}
          <br />
          {email}
          <br />
          {name}
          <br />
          {tel}
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mt-4">
        <div className="px-4 py-2 sm:p-6 grid grid-cols-2">
          <p className="font-semibold text-sm">請求情報</p>
          {/* <p className="text-right text-xs text-indigo-600 mt-1">編集</p> */}
        </div>
        <div className="px-4 py-5 sm:p-6 text-sm leading-6">
          <div className="grid grid-cols-2">
            <span>商品金額計</span>
            <span className="text-right">
              &yen;{cartTotal.toLocaleString()}
            </span>
          </div>
          <div className="">
            <span>配送料</span>
            <span className="float-right">&yen;{0}</span>
          </div>
          <div className="">
            <span>代引手数料 &yen;({fee.toLocaleString()} x 消費税)</span>
            <span className="float-right">&yen;{fee.toLocaleString()}</span>
          </div>
          {coupon_off > 0 &&           <div className="">
            <span>割引</span>
            <span className="float-right">&yen;{coupon_off.toLocaleString()}</span>
          </div>}

          <hr className="my-4" />

          <div className="text-sm  font-bold">
            <span>お支払い金額</span>
            <span className="float-right text-lg -mt-1">
              &yen;{total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <button
            onClick={() => onSubmit()}
            type="button"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-md font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            // disabled={loading}
          >
            注文を確定する
            {loading ? (
              <Spin className="animate-spin ml-2 h-5 w-5 text-white" />
            ) : (
              <Lock />
            )}
          </button>
        </div>

        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <button
            onClick={() => setForm({ key: "PAYMENT", value: form.value })}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            戻る
          </button>
        </div>
      </div>
    </div>
  )
}
