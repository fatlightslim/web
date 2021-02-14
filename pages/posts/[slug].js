import Image from "next/image"
import Layout from "../../components/LayoutBlog"
import { getImageFields, client } from "../../scripts/contentful"

export default function BlogPage({ blog }) {
  const post = blog.items[0]
  return (
    <Layout {...post.fields}>
      <div className="text-base">
      {post.fields.body.content.map((v, i) => {
        switch (v.nodeType) {
          case "paragraph":
            return (
              <p key={i}>
                {v.content.map((x, i) =>
                  x.marks &&
                  x.marks.length > 0 &&
                  x.marks[0].type === "bold" ? (
                    <strong key={i} >{x.value}</strong>
                  ) : x.value === "" ? (
                    <br key={i} />
                  ) : (
                    x.value
                  )
                )}
              </p>
            )
          case "heading-1":
            return <h1>{v.content.map((x) => x.value)}</h1>
          case "heading-2":
            return <h2>{v.content.map((x) => x.value)}</h2>
          case "heading-3":
            return <h3>{v.content.map((x) => x.value)}</h3>
          case "embedded-asset-block":
            return <Image {...getImageFields(v.data.target)} />
        }
      })}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await client.getEntries({ content_type: "blog" })

  // Get the paths we want to pre-render based on posts
  const paths = posts.items.map((post) => {
    return { params: { slug: post.fields.url } }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      blog: await client.getEntries({
        content_type: "blog",
        "fields.url": params.slug,
      }),
    },
  }
}
