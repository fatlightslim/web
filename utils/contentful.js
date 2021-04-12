const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const BLACKLIST = []//["sf1000", "sf2000"]

export function getImageFields(image) {
    return {
        alt: image.fields.title,
        src: 'https:' + image.fields.file.url,
        ...image.fields.file.details.image,
    }
}

export async function getImageFromContentful(id) {
    return await client.getAsset(id)
}

export async function getSinglePostFromContentful(params) {
    return client.getEntries({
        content_type: 'blog',
        'fields.url': params.slug,
    })
}

export async function getPostsFromContentful() {
    return client.getEntries({ content_type: 'blog' })
}
export async function getDataFromContentful(content_type) {
    return client.getEntries({ content_type })
}
