import Logo from "./Logo"
import Confirm from "./Confirm"
import OrderForm from "./OrderForm"
import PaymentForm from "./PaymentForm"
import Breadcrumb from "./Breadcrumb"
import { Transition } from "@headlessui/react"
import { useState } from "react"

export default function Payment(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { formatter, items } = props
  const sum = items.reduce((v, x) => v + x.product.fields.price, 0)

  return (
    <div>
      <div className="py-1 bg-black bg-opacity-80 text-center">
        <Logo className="text-gray-50" />
      </div>
      <div className="z-0 relative">
        <div className="relative z-10 bg-gray-100 bg-opacity-80 text shadow">
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
            <span className="font-medium ml-8">{formatter.format(sum)}</span>
          </div>
        </div>

        <>
          <Transition
            show={isOpen}
            className="relative z-10 inset-x-0 transform shadow-lg"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <div className="bg-white">
              <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                <a
                  href="#"
                  className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: chart-bar */}
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
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                      <div>
                        <p className="text-base font-medium text-gray-900">
                          Analytics
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                        Learn more <span aria-hidden="true">→</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: cursor-click */}
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
                            strokeWidth={2}
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                      <div>
                        <p className="text-base font-medium text-gray-900">
                          Engagement
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                        Learn more <span aria-hidden="true">→</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: shield-check */}
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
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                      <div>
                        <p className="text-base font-medium text-gray-900">
                          Security
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Your customers' data will be safe and secure.
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                        Learn more <span aria-hidden="true">→</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="flex md:h-full lg:flex-col">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: view-grid */}
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
                            strokeWidth={2}
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                      <div>
                        <p className="text-base font-medium text-gray-900">
                          Integrations
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                        Learn more <span aria-hidden="true">→</span>
                      </p>
                    </div>
                  </div>
                </a>
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
      fillrule="evenodd"
      d={
        isOpen
          ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      }
      cliprule="evenodd"
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
