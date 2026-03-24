import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/libs/sanity'

type Category = {
    _id: string
    title: string
    slug: { current: string }
}

type ContentCardProps = {
    _id: string
    title: string
    slug: { current: string }
    mainImage: any
    categories: Category[]
    href: string // e.g. "/projects" or "/education"
}

export default function ContentCard({ title, slug, mainImage, categories, href }: ContentCardProps) {
    return (
        <Link href={`${href}/${slug.current}`}>
            <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="relative aspect-7/5 overflow-hidden mb-2">
                    {mainImage && (
                        <Image
                            src={urlFor(mainImage).width(800).url()}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    )}
                </div>
                <h2 className="text-md font-bold line-clamp-2">{title}</h2>
                <div className="flex gap-2 flex-wrap">
                    {categories?.map((cat) => (
                        <span key={cat._id} className="text-sm text-gray-400">
                            {cat.title}
                        </span>
                    ))}
                </div>
            </motion.div>
        </Link>
    )
}
