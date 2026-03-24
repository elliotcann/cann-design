"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { client, urlFor } from '@/libs/sanity'
import { PortableText } from '@portabletext/react'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import CloseButton from '@/components/CloseButton'

type ImageBlock = {
    _type: 'image'
    _key: string
    asset: any
    caption?: string
}

type TextBlock = {
    _type: 'block'
    _key: string
    children: { text: string }[]
}

type BodyBlock = ImageBlock | TextBlock

type EducationPost = {
    title: string
    mainImage: any
    excerpt: string
    publishedAt: string
    body: BodyBlock[]
}

const educationBySlugQuery = `*[_type == "education" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    body[]{
        ...,
        _type == "image" => {
            ...,
            asset->
        }
    },
    categories[]-> {
        _id,
        title,
        slug
    }
}`

export default function EducationPostPage() {

    const { slug } = useParams()

    const [post, setPost] = useState<EducationPost | null>(null)

    useEffect(() => {
        client.fetch(educationBySlugQuery, { slug }).then(data => setPost(data))
    }, [slug])

    if (!post) return null

    const bodyImages = post.body?.filter(
        (block): block is ImageBlock => block._type === 'image'
    ) ?? []

    const bodyText = post.body?.filter(
        (block): block is TextBlock => block._type === 'block'
    ) ?? []

    return (
        <main className="min-h-screen flex flex-col">

            <div className="h-32" />

            {post.mainImage && (
                <div className="relative w-full aspect-7/5">
                    <Image
                        src={urlFor(post.mainImage).width(1600).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="px-6 py-12 flex flex-col gap-12">

                <div>
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    {post.excerpt && (
                        <p className="text-gray-400">{post.excerpt}</p>
                    )}
                </div>

                {bodyImages.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bodyImages.map((img) => (
                            <div key={img._key} className="flex flex-col gap-2">
                                <div className="relative aspect-7/5 overflow-hidden">
                                    <Image
                                        src={urlFor(img).width(800).url()}
                                        alt={img.caption ?? ''}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {img.caption && (
                                    <p className="text-sm text-gray-400">{img.caption}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {bodyText.length > 0 && (
                    <div className="prose prose-invert max-w-none">
                        <PortableText value={bodyText} />
                    </div>
                )}

            </div>

            <CloseButton />
            <BackToTop />
            <Footer />
        </main>
    )
}
