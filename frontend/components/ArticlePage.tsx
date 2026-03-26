import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/libs/sanity'
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

export type ArticleData = {
    title: string
    mainImage: any
    excerpt: string
    body: (ImageBlock | TextBlock)[]
}

export default function ArticlePage({ article }: { article: ArticleData }) {

    // Sanity body content is a mixed array of images and text blocks.
    // We split them here so images can be displayed in a grid and text in columns.
    const bodyImages = article.body?.filter(
        (block): block is ImageBlock => block._type === 'image'
    ) ?? []

    const bodyText = article.body?.filter(
        (block): block is TextBlock => block._type === 'block'
    ) ?? []

    return (
        <main className="min-h-screen flex flex-col">

            {article.mainImage && (
                <div className="relative w-full h-screen">
                    <Image
                        src={urlFor(article.mainImage).width(1600).url()}
                        alt={article.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="px-6 py-12 flex flex-col gap-12">

                <div>
                    <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
                    {article.excerpt && (
                        <div className="prose prose-2xl max-w-none">
                            <p>{article.excerpt}</p>
                        </div>
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
                            </div>
                        ))}
                    </div>
                )}

                {bodyText.length > 0 && (
                    // prose classes apply @tailwindcss/typography styles to the rich text Sanity returns
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
