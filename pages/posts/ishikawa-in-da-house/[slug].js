import Layout from "../../../components/LayoutBlog"
import { getImageFields, client } from "../../../scripts/contentful"
import { useRouter } from "next/router"

export default function BlogPage({ blog }) {
  console.log(blog.items[0])
  const post = blog.items[0]
  return (
    <Layout>
      <h1>{post.fields.title}</h1>

        {post.fields.body.content.map((v, i) => {
            
           return <p className="mt-3 text-base text-gray-500">{v.content[0].value}</p>
        })}
    </Layout>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await client.getEntries({ content_type: "blog" })

  // Get the paths we want to pre-render based on posts
  const paths = posts.items.map((post) => {
    console.log(post.fields.url)
    return { params: { slug: post.fields.url } }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log(params.slug)
  return {
    props: {
      blog: await client.getEntries({
        content_type: "blog",
        "fields.url": params.slug,
      }),
    },
  }
}
