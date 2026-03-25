"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { client } from '@/libs/sanity'
import { spaceBySlugQuery } from '@/libs/queries'
import ArticlePage, { ArticleData } from '@/components/ArticlePage'

export default function SpacePage() {

    const { slug } = useParams()
    const [space, setSpace] = useState<ArticleData | null>(null)

    useEffect(() => {
        client.fetch(spaceBySlugQuery, { slug }).then(data => setSpace(data))
    }, [slug])

    if (!space) return null

    return <ArticlePage article={space} />
}
