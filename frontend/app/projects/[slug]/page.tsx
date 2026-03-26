'use client'

import { useArticle } from '@/hooks/useArticle'
import { projectBySlugQuery } from '@/libs/queries'
import ArticlePage from '@/components/ArticlePage'

export default function ProjectPage() {
    const article = useArticle(projectBySlugQuery)
    if (!article) return null
    return <ArticlePage article={article} />
}
