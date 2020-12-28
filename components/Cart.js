import Image from "next/image"
import { useState } from "react"
import { Minus, Plus } from "./Svg"
import { products } from "../data/products"

export default function Cart({
  cartOpen,
  setCartOpen,
  checkout,
  updateQuantityInCart,
  removeLineItemInCart,
}) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = (n = 1, lineItemId) => {
    const val = Number(quantity) + n

    if (Number.isInteger(val) && val >= 1) {
      setQuantity(val)
      updateQuantityInCart(lineItemId, val)
    }
  }

  const Header = () => (
    <div className="">
      <div className="flex items-start justify-between p-4 sm:p-6 shadow bg-gray-900">
        <h2
          id="slide-over-heading"
          className="text-lg font-medium text-gray-50"
        >
          ショッピングカート
        </h2>
        <div className="ml-3 h-7 flex items-center">
          <button
            onClick={() => setCartOpen(false)}
            className=" rounded-md text-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Close panel</span>
            {/* Heroicon name: x */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )

  const formatJpy = (data) =>
    new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(data)

  const RemoveItem = ({lineItemId}) => (
    <div className="absolute top-0 right-0 -mt-2 pr-2">
      <button
        onClick={() => removeLineItemInCart(lineItemId)}
        type="button"
        className="bg-red-500 rounded-full p-1 text-white focus:outline-none "
      >
        <span className="sr-only">Close</span>
        {/* Heroicon name: x */}
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )

  const List = ({ variant, title, id, ...rest }) => {
    const splitted = title.split(" ")
    const name = splitted[2]
    const brand = splitted[0] + " " + splitted[1]

    return (
      <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <RemoveItem lineItemId={id} />

        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">
                {name}
              </h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                {brand}
              </span>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">
              大阪より即日配送
            </p>
          </div>
          <div className="w-10 h-10  flex-shrink-0">
            <Image {...products[0].img} alt="" />
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="w-0 flex-1 flex">
              <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-lg text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                {formatJpy(parseInt(variant.price) * quantity)}
                <span className="text-xs text-center ml-3 text-gray-400">
                  税込
                  <br />
                  送料込
                </span>
              </div>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                <Counter id={id} quantity={quantity} />
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }

  const Counter = ({ id, quantity }) => (
    <div className="flex items-center">
      <div className="flex-shrink  px-2 bg-white">
        <button type="button" onClick={() => increaseQuantity(-1, id)}>
          <Minus width={16} height={16} />
        </button>
        <input
          type="number"
          max={99}
          min={1}
          className="text-center align-text-bottom font-bold"
          value={quantity}
          // onChange={(e) => handleQuantity(e.target.value, id)}
          // onBlur={() => handleBlur(id, quantity)}
        />
        <button type="button" onClick={() => increaseQuantity(1, id)}>
          <Plus width={16} height={16} />
        </button>
      </div>
    </div>
  )

  const Actions = () => (
    <div className="flex-shrink-0 px-4 py-4 flex justify-end">
      <button
        onClick={() => setCartOpen(false)}
        type="button"
        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        買い物を続ける
      </button>
      <button
        type="submit"
        className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        ご購入手続きへ
      </button>
    </div>
  )

  const Card = () => (
    <div className="bg-white overflow-hidden shadow rounded-lg mx-2">
      <div className="px-4 py-4 sm:p-6 text-xs font-medium">
        <p className="text-lg">7日間の返品保証をお約束します。</p>
        万が一ご満足いただけない場合は全額返金させていただきます。
      </div>
    </div>
  )

  const Overlay = () => (
    <div
      className={`absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500 ${
        cartOpen ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    />
  )

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${cartOpen ? "z-50" : "z-30"}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Overlay />
        <section
          className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
          aria-labelledby="slide-over-heading"
        >
          <div
            className={`w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ${
              cartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col pb-6 shadow-xl overflow-y-scroll bg-gray-50">
              <Header />
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                {checkout.lineItems.length > 0 ? (
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div className="h-full " aria-hidden="true">
                      <div className="flex-1 flex flex-col text-base">
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {checkout.lineItems.map((v, i) => {
                            // console.log(v);
                            return <List {...v} key={i} />
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>empty</p>
                )}
              </div>
              <Card />
              <Actions />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
