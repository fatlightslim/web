export default function Minjida () {


  return (
  <>
  {/* This example requires Tailwind CSS v2.0+ */}
  <div className="bg-gray-50 pt-12 sm:pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          한 눈에 명확하게 알 수 있는 압도적인 수치
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          전기요금, 배송비, 품질 그 어떤 것도 놓치지 않았습니다.
        </p>
      </div>
    </div>
    <div className="mt-10 pb-12 bg-white sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                  電気代
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  20%↓
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                  全国送料
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                 ￥0
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                  Amazon レビュー
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  2000+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
  }