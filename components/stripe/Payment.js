
import Image from "next/image"
import Logo from "../Logo"
import Confirm from "./Confirm"
import OrderForm from "./OrderForm"
import PaymentForm from "./PaymentForm"
import Breadcrumb from "./Breadcrumb"
import { Transition } from "@headlessui/react"
import { useState } from "react"

export default function Payment(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { formatter, items } = props
  const sum = items.reduce((v, x) => v + x.product.fields.price * x.qty, 0)
  const discount = 0

  return (
    <div>
      <div className="py-1 bg-black bg-opacity-80 text-center">
        <Logo className="text-gray-50" />
      </div>
      <div className="z-0 relative">
        <div className="relative z-10 bg-gray-50 bg-opacity-80 text shadow">
          <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
            {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="font-semibold text-indigo-500 text-sm inline-flex items-center focus:ring-transparent focus:outline-none"
            >
              <Cart />
              <span className="">
                {isOpen ? "注文概要を非表示にする" : "注文概要・クーポン入力"}
              </span>
              <Chev isOpen={isOpen} />
            </button>
            <span className="font-medium flex-grow text-right">
              {formatter.format(sum)}
            </span>
          </div>
        </div>

        <>
          <Transition
            show={isOpen}
            className="relative z-10 inset-x-0 transform shadow-lg border"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <div className="bg-gray-100">
              <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16 ">
                {items.map((v) => {
                  const { title, image, price } = v.product.fields
                  const { url, details } = image.fields.file
                  return (
                    <div
                      key={v.product.sys.id}
                      className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="flex md:h-full lg:flex-col ">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white text-white sm:h-12 sm:w-12">
                            <span className="border absolute -mt-10 left-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ">
                              {v.qty}
                            </span>

                            <Image
                              src={"https:" + url}
                              alt={title}
                              width={details.image.width}
                              height={details.image.height}
                            />
                          </div>
                        </div>
                        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {title}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {formatter.format(price)}
                            </p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 flex-grow text-right">
                          {formatter.format(price * v.qty)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="py-4 px-2 border">
                <div className="inline-flex w-full">
                  <label htmlFor="coupon" className="sr-only">
                    Coupon
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm w-full">
                    <div className="relative flex items-stretch flex-grow focus-within:z-10">
                      <input
                        type="text"
                        name="coupon"
                        id="coupon"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block rounded-none rounded-l-md w-full sm:text-sm border-gray-300"
                        placeholder="クーポン"
                      />
                    </div>
                    <button className="relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                      適用
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right py-4 px-2 border text-xs leading-5">
                <div className="grid grid-cols-2">
                  <p>小計</p>
                  <p className="text-right mr-2 font-semibold">{formatter.format(sum)}</p>
                </div>
                <div className="grid grid-cols-2">
                <p>配送料</p>
                  <p className="text-right mr-2 font-semibold">無料</p>
                </div>
                <div className="grid grid-cols-2">
                <p>クーポン割引</p>
                  <p className="text-right mr-2 font-semibold">{formatter.format(discount)}</p>
                </div>
              </div>
              <div className="text-right py-4 px-2 grid grid-cols-2 border text-sm font-bold">
                <p>合計</p>
                  <p className="text-right mr-2 text-md">{formatter.format(sum - discount)}</p>
              </div>
            </div>
          </Transition>
        </>
      </div>

      <Breadcrumb {...props} />
      <Conditional {...props} />
    </div>
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

const Chev = ({ isOpen }) => (
  <svg
    className="w-6 h-6 inline-block text-indigo-500 ml-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d={
        isOpen
          ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      }
      clipRule="evenodd"
    />
  </svg>
)

const Cart = () => (
  <svg
    className="-mt-1 w-6 h-6 inline-block text-indigo-500 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)