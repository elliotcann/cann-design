"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { client } from '@/libs/sanity'
import { educationBySlugQuery } from '@/libs/queries'
import ArticlePage, { ArticleData } from '@/components/ArticlePage'

export default function EducationPostPage() {

    const { slug } = useParams()
    const [post, setPost] = useState<ArticleData | null>(null)

    useEffect(() => {
        client.fetch(educationBySlugQuery, { slug }).then(data => setPost(data))
    }, [slug])

    if (!post) return null

    return <ArticlePage article={post} />
}
