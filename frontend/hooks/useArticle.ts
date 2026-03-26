'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { client } from '@/libs/sanity'
import { ArticleData } from '@/components/ArticlePage'

// Reads the slug from the URL, fetches the matching article, and returns it.
// Returns null while the fetch is in flight.
export function useArticle(query: string): ArticleData | null {
    const { slug } = useParams()
    const [article, setArticle] = useState<ArticleData | null>(null)

    useEffect(() => {
        client.fetch(query, { slug }).then(data => setArticle(data))
    }, [slug])

    return article
}
