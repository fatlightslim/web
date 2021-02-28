export function getImageFields(image) {
  return {
    alt: image.fields.title,
    src: 'https:' + image.fields.file.url,
    ...image.fields.file.details.image,
  }
}

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getSinglePostFromContentful(params) {
  return client.getEntries({
    content_type: 'blog',
    'fields.url': params.slug,
  })
}

export async function getPostsFromContentful() {
  return client.getEntries({ content_type: 'blog' })
}

export async function getProductsFromContentful() {
  const res = await client.getEntries({
    content_type: 'product',
    order: 'sys.createdAt',
  })
  return {
    products: {
      sf2000: res.items[8],
      sf1000: res.items[7],
      sf7000: res.items[6],
      sf4000: res.items[4],
      fc6500: res.items[5],
      sp6500: res.items[3],
      ts: res.items[2],
      sp150: res.items[1],
      sp3000: res.items[0],
    },
  }
}
