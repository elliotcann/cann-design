import { createClient } from '@sanity/client';
import imageUrlBuilder, { createImageUrlBuilder } from '@sanity/image-url';

// Connects Next.js frontend to Sanity.io studio
export const client = createClient({
    projectId: 'b9nvsyw4', // Unique sanity project ID
    dataset: 'production', // Which dataset to use - we only have one
    useCdn: true, // Content Delivery Network
    apiVersion: '2024-01-01' // Tells sanity which version of the API to use
})

// Sanity stores images as reference and not URLs. This converts references into usable URLs Next.js <Image /> can display
const builder = imageUrlBuilder(client)

// This function we will call in our components: urlFor(project.mainImage).width(800).url()
export function urlFor(source: any) {
    return builder.image(source)
}

