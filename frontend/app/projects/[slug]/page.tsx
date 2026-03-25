"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { client, urlFor } from '@/libs/sanity'
import { projectBySlugQuery } from '@/libs/queries'
import { PortableText } from '@portabletext/react'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import CloseButton from '@/components/CloseButton'

// --- TYPES ---
// These describe the shape of the data coming back from Sanity

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

type Project = {
    title: string
    mainImage: any
    excerpt: string
    publishedAt: string
    body: BodyBlock[]
}

export default function ProjectPage() {

    // useParams reads the [slug] from the URL
    const { slug } = useParams()

    const [project, setProject] = useState<Project | null>(null)

    useEffect(() => {
        // Pass the slug as a variable into the query
        client.fetch(projectBySlugQuery, { slug }).then(data => setProject(data))
    }, [slug])

    // Show nothing while data is loading
    if (!project) return null

    // --- SEPARATE IMAGES AND TEXT FROM THE BODY ARRAY ---
    // Remember: body is a mixed array of text blocks and image blocks
    // We split them here so we can render them in different places

    const bodyImages = project.body?.filter(
        (block): block is ImageBlock => block._type === 'image'
    ) ?? []

    const bodyText = project.body?.filter(
        (block): block is TextBlock => block._type === 'block'
    ) ?? []

    return (
        <main className="min-h-screen flex flex-col">

            {/* MAIN IMAGE */}
            {project.mainImage && (
                <div className="relative w-full aspect-7/5">
                    <Image
                        src={urlFor(project.mainImage).width(1600).url()}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="px-6 py-12 flex flex-col gap-12">

                {/* TITLE + EXCERPT */}
                <div>
                    <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
                    {project.excerpt && (
                        <div className="prose prose-lg max-w-none">
                            <p>{project.excerpt}</p>
                        </div>
                    )}
                </div>

                

                {/* IMAGE GRID */}
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

                {/* BODY TEXT */}
                {bodyText.length > 0 && (
                    <div className="prose prose-lg max-w-none md:columns-2 md:gap-8">
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