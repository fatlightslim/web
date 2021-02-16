import { Transition } from "@headlessui/react"

export default function Cart2({
  cartOpen,
  setCartOpen,
}) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/*
Background overlay, show/hide based on slide-over state.

Entering: "ease-in-out duration-500"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "ease-in-out duration-500"
  From: "opacity-100"
  To: "opacity-0"
    */}
        {/* <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" /> */}

        <Transition
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          show={cartOpen}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <section
            className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
            aria-labelledby="slide-over-heading"
          >
            {/*
  Slide-over panel, show/hide based on slide-over state.

  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-full"
    To: "translate-x-0"
  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-0"
    To: "translate-x-full"
*/}

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
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      id="slide-over-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Panel title
                    </h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button onClick={() => setCartOpen(false)} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Close panel</span>
                        {/* Heroicon name: outline/x */}
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div
                      className="h-full border-2 border-dashed border-gray-200"
                      aria-hidden="true"
                    />
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </Transition>
          </section>
        </Transition>
      </div>
    </div>
  )
}
