import { fetchPostJSON } from "../utils/api-helpers"
// import { DevTool } from "@hookform/devtools"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { ExCircle, ChevRight } from "./Svg"

export default function OrderForm({ setForm, items, form, initialForm }) {
  const { setValue, register, handleSubmit, errors } = useForm({
    mode: "onChange",
  })

  useEffect(() => {
    // console.log(form);
    const { customer } = form.value
    if (customer) {
      Object.keys(customer).forEach((v) => {
        setValue(v, customer[v])
      })
    }
  }, [])

  const onSubmit = (customer) => {
    fetchPostJSON("/api/orders", { customer, items, _id: form.value._id }).then(
      (value) => {
        setForm({ key: "PAYMENT", value })
      }
    )
  }

  const onError = (errors, e) => {
    console.log(errors)
  }

  const getZip = async (value) => {
    let r = await fetch("https://api.zipaddress.net/?zipcode=" + value)
    r = await r.json()
    if (r.data) {
      setValue("pref", r.data["pref"])
      setValue("addr1", r.data["address"])
    }
  }

  return (
    <div className="px-4 max-w-xl mx-auto">
      <h3 className="text-center py-12 font-bold text-gray-600">
        配送情報を入力してください。
      </h3>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <fieldset className="bg-white">
            <legend className="block text-sm font-medium text-gray-700">
              お届け先情報
            </legend>
            <div className="mt-1 rounded-md shadow-sm -space-y-px">
              <div className="flex -space-x-px">
                <div className="w-1/2 flex-1 min-w-0">
                  <label htmlFor="zip" className="sr-only">
                    zip
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-tl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                    placeholder="郵便番号"
                    onChange={(e) =>
                      e.target.value.length > 6 && getZip(e.target.value)
                    }
                    onBlur={(e) => getZip(e.target.value)}
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^\d{3}-?\d{4}$/,
                        message: "正しい郵便番号を入力してください。",
                      },
                    })}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <label htmlFor="pref" className="sr-only">
                    pref
                  </label>
                  <input
                    type="text"
                    name="pref"
                    id="pref"
                    className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-tr-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                    placeholder="都道府県"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="addr1" className="sr-only">
                  addr1
                </label>
                <input
                  type="text"
                  name="addr1"
                  id="addr1"
                  className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none  bg-transparent focus:z-10 sm:text-sm border-gray-300"
                  placeholder="住所"
                  ref={register({ required: true })}
                />
              </div>
              <div>
                <label htmlFor="addr2" className="sr-only">
                  addr2
                </label>
                <input
                  type="text"
                  name="addr2"
                  id="addr2"
                  className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none  bg-transparent focus:z-10 sm:text-sm border-gray-300"
                  placeholder="建物名・部屋番号"
                  ref={register}
                />
              </div>
              <div>
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                  ref={register}
                >
                  <option>日本</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="block text-sm font-medium text-gray-700">
              ご連絡先情報
            </legend>
            <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`${
                    errors.email
                      ? "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  }  relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm `}
                  placeholder="メールアドレス"
                  ref={register({
                    required: "必須項目",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "正しいメールアドレスを入力してください",
                    },
                  })}
                />
                {/* {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExCircle className="h-5 w-5 text-red-500" />
                  </div>
                )} */}
              </div>
              <div>
                <label htmlFor="tel" className="sr-only">
                  TEL
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="tel"
                    id="tel"
                    className={`${
                      errors.tel
                        ? "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                        : "focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                    } relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm`}
                    placeholder="電話番号"
                    ref={register({ required: true })}
                  />
                  {errors.tel && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ExCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              支払情報確認
              <ChevRight />
            </button>
          </div>

          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              onClick={() => setForm(initialForm)}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              戻る
            </button>
          </div>
        </div>
        {/* <DevTool control={control} /> */}
      </form>
    </div>
  )
}
