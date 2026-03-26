'use client'

import { useArticle } from '@/hooks/useArticle'
import { spaceBySlugQuery } from '@/libs/queries'
import ArticlePage from '@/components/ArticlePage'

export default function SpacePage() {
    const article = useArticle(spaceBySlugQuery)
    if (!article) return null
    return <ArticlePage article={article} />
}
