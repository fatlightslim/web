import { fetchPostJSON } from "../utils/api-helpers"
import { useState } from "react"
import { Spin, Lock } from "./Svg"

export default function Confirm({ setForm, items, form, formatter }) {
  const { addr1, addr2, pref, name, tel, zip, email } = form.value.customer
  const [loading, setLoading] = useState(false)

  const sum = items.reduce((v, x) => v + x.product.fields.price * x.qty, 0)

  let fee = 300
  if (sum > 10000 && sum <= 30000) {
    fee = 400
  } else if (sum > 30000 && sum <= 100000) {
    fee = 600
  } else if (sum > 100000 && sum <= 300000) {
    fee = 1000
  } else if (sum > 300000 && sum <= 500000) {
    fee = 2000
  } else if (sum > 500000 && sum <= 600000) {
    fee = 6000
  } else if (sum > 600000) {
    fee = 10000
  }

  const onSubmit = (customer) => {
    setLoading(true)
    fetchPostJSON("/api/orders", {
      _id: form.value._id,
      customer,
      items,
      status: "cod",
    }).then((value) => {
      setForm({ key: "DONE", value })
      setLoading(false)
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
            <span className="text-right">{formatter.format(sum)}</span>
          </div>
          <div className="">
            <span>配送料 (無料キャンペーン中)</span>
            <span className="float-right">{formatter.format(0)}</span>
          </div>
          <div className="">
            <span>代引手数料 ({formatter.format(fee)} x 消費税)</span>
            <span className="float-right">{formatter.format(fee * 1.1)}</span>
          </div>

          <hr className="my-4" />

          <div className="text-sm  font-bold">
            <span>お支払い金額</span>
            <span className="float-right text-lg -mt-1">
              {formatter.format(sum + fee * 1.1)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <button
            onClick={() => onSubmit()}
            type="button"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-md font-bold rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            注文を確定する
            {loading ? <Spin /> : <Lock />}
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
