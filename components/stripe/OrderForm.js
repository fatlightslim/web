import { fetchPostJSON } from "../../utils/api-helpers"
// import { DevTool } from "@hookform/devtools"
import { useForm, Controller } from "react-hook-form"
import { useEffect, forwardRef, useState } from "react"
import { ExCircle, ChevRight } from "../Svg"

function isEmpty(obj) {
  return !Object.keys(obj).length
}

export default function OrderForm({ setForm, items, form, initialForm }) {
  const {
    getValues,
    control,
    setValue,
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm({
    // mode: "onChange",
  })

  useEffect(() => {
    const { customer } = form.value
    if (customer) {
      Object.keys(customer).forEach((v) => {
        setValue(v, customer[v])
      })
    }
  }, [])

  const onSubmit = (customer) => {
    fetchPostJSON("/api/orders", {
      customer,
      items,
      _id: form.value._id,
      status: "draft",
    }).then((value) => {
      setForm({ key: "PAYMENT", value })
    })
  }

  const onError = (errors, e) => {
    console.log(errors)
    // Object.keys(values).forEach((v) => {
    //   console.log(values[v]);
    //   setValue(v, values[v])
    // })
  }

  const getZip = async (value) => {
    let r = await fetch("https://api.zipaddress.net/?zipcode=" + value)
    r = await r.json()
    if (r.data) {
      setValue("zip", value)
      setValue("pref", r.data["pref"])
      setValue("addr1", r.data["address"])
    }
  }

  const values = getValues()
  const fields = {
    delivery1: [
      {
        defaultValue: values.zip,
        en: "zip",
        ja: "郵便番号",
        ref: {
          required: true,
          pattern: {
            value: /^\d{3}-?\d{4}$/,
            message: "正しい郵便番号を入力してください。",
          },
        },
        onChange: (e) => e.target.value.length > 6 && getZip(e.target.value),
        onBlur: (e) => getZip(e.target.value),
        wrapper: "w-1/2 flex-1 min-w-0",
        round: "rounded-tl-md",
      },
      {
        defaultValue: values.pref,
        en: "pref",
        ja: "都道府県",
        wrapper: "flex-1 min-w-0",
        round: "rounded-tr-md",
        ref: { required: true },
      },
    ],
    delivery2: [
      {
        defaultValue: values.addr1,
        en: "addr1",
        ja: "住所",
        ref: { required: true },
      },
      {
        defaultValue: values.addr2,
        en: "addr2",
        ja: "建物名・部屋番号",
        ref: {},
        round: "rounded-b-md",
      },
    ],
    contact: [
      {
        defaultValue: values.email,
        en: "email",
        ja: "メールアドレス",
        round: "rounded-t-md",
        ref: {
          required: "必須項目",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "正しいメールアドレスを入力してください",
          },
        },
      },
      {
        defaultValue: values.name,
        en: "name",
        ja: "氏名",
        ref: { required: true },
      },
      {
        defaultValue: values.tel,
        en: "tel",
        ja: "電話番号",
        round: "rounded-b-md",
        ref: { required: true },
      },
    ],
  }

  const Fields = ({ group }) => {
    // const ref = React.createRef()
    return fields[group].map((v) => {
      const { en, ja, ref, round = "rounded-none", wrapper = "", ...rest } = v
      // console.log(register);
      const attr = {
        name: en,
        id: en,
        placeholder: ja,
        ref: register(ref),
        type: "text",
        className: `${round} ${
          errors[en]
            ? "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 z-10"
            : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
        } relative block w-full bg-transparent focus:z-10 sm:text-sm`,
      }
      return (
        <div className={wrapper} key={en}>
          <label htmlFor={en} className="sr-only" children={en} />
          <input {...rest} {...attr} />
        </div>
      )
    })
  }

  const Fieldset = ({ children, text }) => (
    <fieldset className="mt-6">
      <legend
        className="block text-sm font-medium text-gray-700"
        children={text}
      />
      <div className="mt-1 rounded-md shadow-sm -space-y-px">{children}</div>
    </fieldset>
  )

  const Button = ({ icon, label, color, ...props }) => (
    <button
      {...props}
      className={`${color} w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10`}
    >
      {label}
      {icon}
    </button>
  )

  return (
    <div className="px-4 max-w-xl mx-auto">
      <h3
        className={`${
          isEmpty(errors) ? "text-gray-600" : "text-red-500"
        } text-center pt-12 pb-6 font-bold`}
        children="配送情報を入力してください。"
      />

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="bg-white">
          <Fieldset text="お届け先情報">
            <div className="flex -space-x-px">
              <Fields group="delivery1" />
            </div>
            <Fields group="delivery2" />
          </Fieldset>

          <Fieldset text="ご連絡先情報">
            <Fields group="contact" />
          </Fieldset>
        </div>

        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Button
              type="submit"
              label="支払情報確認"
              icon={<ChevRight />}
              color="text-white bg-indigo-600 hover:bg-indigo-700"
            />
          </div>

          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Button
              onClick={() => setForm(initialForm)}
              color="text-indigo-600 bg-white hover:bg-gray-50 "
              label="戻る"
            />
          </div>
        </div>
        {/* <DevTool control={control} /> */}
      </form>
    </div>
  )
}
