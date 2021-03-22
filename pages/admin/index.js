import Layout from "../../components/admin/AdminLayout"
import OrderList from "../../components/admin/OrderList"
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import useSWR from "swr"
const fetcher = async (uri) => {
  const response = await fetch(uri)
  return response.json()
}
// stats, seo, orders,
export default withPageAuthRequired(function Admin({}) {
  const { user, error, isLoading } = useUser()
  const { data } = useSWR("/api/orders", fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  // if (error) return <div>oops... {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>

  return (
    <Layout>
      <OrderList orders={data} />
    </Layout>
  )
})

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/orders`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
