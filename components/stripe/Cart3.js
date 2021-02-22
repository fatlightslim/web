import Image from "next/image"
import { useState } from "react"
import { Transition } from "@headlessui/react"
import { Cart, X, Close, Minus, Plus } from "../Svg"

export default function Cart3({
  cartOpen,
  setCartOpen,
  updateQtyInCart,
  removeItemInCart,
  setForm,
  items,
  form,
}) {
  const increaseQuantity = (n = 1, id) => {
    const val = items.filter((v) => v.product.sys.id === id)[0]["qty"] + n

    if (Number.isInteger(val) && val >= 1) {
      updateQtyInCart(id, val)
    }
  }

  const Header = () => (
    <div className="px-4 sm:px-6">
      <div className="flex items-start justify-between">
        <h2
          id="slide-over-heading"
          className="text-lg font-medium text-gray-900"
        >
          <Cart />
          ショッピングカート
        </h2>
        <div className="ml-3 h-7 flex items-center">
          <button
            onClick={() => setCartOpen(false)}
            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Close panel</span>
            <X />
          </button>
        </div>
      </div>
    </div>
  )

  const Body = () => (
    <div className="mt-6 relative flex-1 px-4 sm:px-6">
      <ul className="grid grid-cols-1 gap-1">
        {items && items.length > 0 ? (
          items.map((v) => {
            // console.log(v.sys.id);
            const id = v.product.sys.id
            return <List {...v.product.fields} key={id} id={id} qty={v.qty} />
          })
        ) : (
          <p>カートは空です。</p>
        )}
      </ul>
    </div>
  )

  const Actions = () => (
    <div className="flex-shrink-0 px-4 py-4 flex justify-center">
      <button
        onClick={() => setCartOpen(false)}
        type="button"
        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        買い物を続ける
      </button>
      <button
        onClick={() => setForm({ key: "ORDER", value: form.value })}
        className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        ご購入手続き
      </button>
    </div>
  )

  const RemoveItem = ({ id }) => (
    <div className="absolute top-0 right-0 -mt-2 -mr-1">
      <button
        onClick={() => removeItemInCart(id)}
        type="button"
        className="text-white focus:outline-none "
      >
        <span className="sr-only">Close</span>
        <Close />
      </button>
    </div>
  )

  const Img = ({ file }) => {
    return (
      <Image
        src={"https:" + file.url}
        width={file.details.image.width}
        height={file.details.image.height}
        alt={file.title}
        className="sm:rounded-lg"
      />
    )
  }

  const List = ({ brand, image, name, price, id, qty }) => {
    return (
      <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 my-2 relative">
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <RemoveItem id={id} />
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">
                {name}
              </h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                {brand}
              </span>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">
              {/* 大阪より即日配送 */}
              海外工場から発送
            </p>
          </div>
          <div className="w-10 h-10  flex-shrink-0">
            <Img {...image.fields} />
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="w-0 flex-1 flex">
              <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-lg text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                &yen;{(parseInt(price) * qty).toLocaleString()}
                <span className="text-xs text-center ml-3 text-gray-400">
                  税込
                  <br />
                  送料込
                </span>
              </div>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                <Counter id={id} qty={qty} />
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }

  const Counter = ({ id, qty }) => (
    <div className="flex items-center">
      <div className="flex-shrink  px-2 bg-white">
        <button type="button" onClick={() => increaseQuantity(-1, id)}>
          <Minus width={16} height={16} />
        </button>
        <span
          type="number"
          max={99}
          min={1}
          className="text-center align-text-bottom font-bold px-2 border-none"
          children={qty}
          // onChange={(e) => handleQuantity(e.target.value, id)}
          // onBlur={() => handleBlur(id, quantity)}
        />
        <button type="button" onClick={() => increaseQuantity(1, id)}>
          <Plus width={16} height={16} />
        </button>
      </div>
    </div>
  )
  const Card = () => (
    <div className="bg-gray-50 overflow-hidden shadow rounded-lg mx-4 relative mb-4">
      <div className="px-2 py-4 text-xs font-medium text-center">
        <p className="text-lg">7日間の返品保証をお約束します。</p>
        万が一ご満足いただけない場合は全額返金させていただきます。
      </div>
    </div>
  )
  return (
    <div
      className={`${cartOpen ? "fixed z-50" : ""} inset-0 overflow-hidden`}
    >
      <div
        className={`${
          cartOpen ? "absolute z-50" : ""
        }  inset-0 overflow-hidden`}
      >
        <section
          className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
          aria-labelledby="slide-over-heading"
        >
          <Transition
            className="w-screen max-w-md"
            show={cartOpen}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="h-full divide-y divide-gray-200 flex flex-col bg-gray-50 shadow-xl">
              <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                <Header />
                <Body />
              </div>
              <Actions />
              <Card />
            </div>
          </Transition>
        </section>
      </div>
    </div>
  )
}
