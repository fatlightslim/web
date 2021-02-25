import { getImageFields } from "../../scripts/contentful"
import { useForm } from "react-hook-form"
import Image from "next/image"
import Logo from "../Logo"
import { ExCircle, CartSvg, SolidCheck } from "../Svg"
import { Transition } from "@headlessui/react"
import { useState } from "react"
import { fetchPostJSON, calcFee } from "../../utils/api-helpers"

export default function CartBar(props) {
  const { cartTotal, coupon } = props
  const discount = coupon.amount_off || 0
  const [isOpen, setIsOpen] = useState(false)

  const Title = () => (
    <div className="relative z-10 bg-gray-50 bg-opacity-80 text shadow">
      <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="font-semibold text-indigo-500 text-sm inline-flex items-center focus:ring-transparent focus:outline-none"
        >
          <CartSvg />
          <span className="">
            {isOpen ? "注文概要を非表示にする" : "注文概要・クーポン入力"}
          </span>
          <Chev isOpen={isOpen} />
        </button>
        <span className="font-medium flex-grow text-right">
          &yen;{(cartTotal - discount).toLocaleString()}
        </span>
      </div>
    </div>
  )

  const Chev = () => (
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

  return (
    <>
      <div className="py-1 bg-black bg-opacity-80 text-center">
        <Logo className="text-gray-50" />
      </div>

      <div className="z-0 relative sm:hidden">
        <Title />
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
          <Details {...props} />
        </Transition>
      </div>
    </>
  )
}

export const Details = ({
  initialData,
  coupon,
  setCoupon,
  cartTotal,
  labels,
  items,
  paymentMethod,
}) => {
  const [error, setError] = useState(false)
  const discount = coupon.amount_off || 0
  const fee = calcFee(cartTotal)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => getCoupnFromStripe(data)

  const COUPON_NOT_SET = coupon.name !== undefined

  const getCoupnFromStripe = async (data) => {
    const r = await fetchPostJSON("/api/coupon", { id: data.coupon })
    if (r.statusCode === 404) {
      setCoupon(initialData)
      setError(true)
    } else {
      setCoupon(r)
      setError(false)
    }
  }

  const Total = () => {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left py-4 mt-4 px-2 text-xs leading-5">
          <div className="grid grid-cols-2">
            <p>小計</p>
            <p className="text-right mr-2 font-semibold text-sm">
              &yen;{cartTotal.toLocaleString()}
            </p>
          </div>
          <div className="grid grid-cols-2">
            <p>配送料</p>
            <p className="text-right mr-2 font-semibold">無料</p>
          </div>
          <div className="grid grid-cols-2">
            <p>クーポン割引</p>
            <p className="text-right mr-2 font-semibold text-sm">
              &yen;{discount.toLocaleString()}
            </p>
          </div>
          {paymentMethod !== labels[[0]].label && <div className="grid grid-cols-2">
            <p>代引手数料</p>
            <p className="text-right mr-2 font-semibold text-sm">
              &yen;{fee ? fee.toLocaleString() : 0}
            </p>
          </div>}
        </div>

        <div className="w-full border-t border-gray-300" />

        <div className="text-left py-4 px-2 grid grid-cols-2 text-sm font-bold">
          <p>合計</p>
          <p className="text-right mr-2 text-sm">
            &yen;
            {paymentMethod === labels[[0]].label
              ? (cartTotal - discount).toLocaleString()
              : (cartTotal + fee - discount).toLocaleString()}
          </p>
        </div>
      </div>
    )
  }

  const Summary = () => (
    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 ">
      {items.map((v) => {
        const { title, image, price } = v.fields
        return (
          <div
            key={v.sys.id}
            className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
          >
            <div className="flex ">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white text-white sm:h-12 sm:w-12">
                  <Image {...getImageFields(image)} />
                </div>
              </div>
              <div className="ml-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">{title}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    &yen;{price.toLocaleString()} x {v.qty}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500 flex-grow text-right">
                &yen;{(price * v.qty).toLocaleString()}
              </p>
            </div>
            <div className="mt-4 w-full border-t border-gray-300" />
          </div>
        )
      })}
    </div>
  )

  const Coupon = () => (
    <div className="max-w-7xl mx-auto px-4">
      <div className="inline-flex w-full">
        <label htmlFor="coupon" className="sr-only">
          Coupon
        </label>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-1 flex rounded-md shadow-sm w-full"
        >
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              ref={register}
              disabled={COUPON_NOT_SET}
              type="text"
              name="coupon"
              id="coupon"
              className="focus:ring-indigo-500 focus:border-indigo-500 block rounded-none rounded-l-md w-full sm:text-sm border-gray-300  disabled:bg-green-200"
              placeholder="クーポン"
              defaultValue={coupon.id}
            />
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            適用
            {/* <span className="-mr-1 ml-1">
              {COUPON_NOT_SET && <SolidCheck />}
            </span> */}
          </button>
        </form>
        {error && (
          <span className="text-red-500 text-xs">
            <ExCircle className="h-4 w-4 inline-block -mt-1 mr-1" />
            クーポンコードが正しくありません。
          </span>
        )}
      </div>
    </div>
  )

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-center py-6 font-bold">注文概要</h3>
      <Summary />
      <Coupon />
      <Total />
    </div>
  )
}
