import Image from "next/image"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import PrintObject from "../../components/stripe/PrintObject"
import useSWR from "swr"
import { fetchGetJSON } from "../../utils/api-helpers"
import { Pattern } from "../../components/Svg"

const ResultPage = () => {
  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  // const { data, error } = useSWR(
  //   router.query.session_id ? `/api/sessions/${router.query.session_id}` : null,
  //   fetchGetJSON
  // )

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>Loading...</div>

  // const { client_reference_id } = data
  const client_reference_id = "#09j0asd83"

  return (
    <Layout title="Checkout Payment Result | Next.js + TypeScript Example">
      <div className="relative bg-gray-50 overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <Pattern />
          </div>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <Image
                width={6028}
                height={4024}
                className="relative rounded-lg shadow-lg"
                src="/img/male-hand-writing-thank-you-sign.jpg"
                alt=""
              />
            </div>
          </div>

          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
                <span className="block xl:inline">ご注文ありがとうございます。</span>
                <span className="block text-indigo-600 xl:inline">
                  {client_reference_id}
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* <PrintObject content={data ?? "loading..."} /> */}
    </Layout>
  )
}

export default ResultPage
