'use client'

import { useArticle } from '@/hooks/useArticle'
import { educationBySlugQuery } from '@/libs/queries'
import ArticlePage from '@/components/ArticlePage'

export default function EducationPostPage() {
    const article = useArticle(educationBySlugQuery)
    if (!article) return null
    return <ArticlePage article={article} />
}
