import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import PrintObject from "../../components/PrintObject"
import useSWR from "swr"
import { fetchGetJSON } from "../../utils/api-helpers"

const ResultPage = () => {
  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/sessions/${router.query.session_id}` : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading...</div>

  const { client_reference_id } = data

  return (
    <Layout title="Checkout Payment Result | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Thank you.</h1>
        <h2>Your order number is { client_reference_id }</h2>
        <h3>Thank you. You will be received an email soon. If you don't receive, contact us.</h3>
        <PrintObject content={data ?? "loading..."} />
      </div>
    </Layout>
  )
}

export default ResultPage
