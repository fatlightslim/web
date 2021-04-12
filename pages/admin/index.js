import Layout from "../../components/admin/AdminLayout"
import OrderList from "../../components/admin/OrderList"
import { fetchGetJSON } from "../../utils/api-helpers"
// stats, seo, orders,
export default function Admin({data}) {

  return (
    <Layout>
      <OrderList orders={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const URL = process.env.URL || 'http://localhost:3000'
  return {
    props: { data: await fetchGetJSON(`${URL}/api/orders`) },
  }
}
