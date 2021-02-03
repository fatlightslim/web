import { fetchPostJSON } from "../utils/api-helpers"
import { DevTool } from "@hookform/devtools"
import { useForm } from "react-hook-form"
import { ExCircle, ChevRight } from "./Svg"

export default function Confirm({ setForm, items }) {

  const onSubmit = (customer) => {
    fetchPostJSON("/api/orders", { customer, items }).then((value) => {
      setForm({ key: "PAYMENT", value })
    })
  }

  const onError = (errors, e) => {
    console.log(errors)
  }

  return (
    <div className="px-4 max-w-xl mx-auto pb-48">
      <h3 className="text-center py-8 font-bold text-gray-600">
        配送先情報を入力してください。
      </h3>

    </div>
  )
}
