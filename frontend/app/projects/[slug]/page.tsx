"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { client } from '@/libs/sanity'
import { projectBySlugQuery } from '@/libs/queries'
import ArticlePage, { ArticleData } from '@/components/ArticlePage'

export default function ProjectPage() {

    const { slug } = useParams()
    const [project, setProject] = useState<ArticleData | null>(null)

    useEffect(() => {
        client.fetch(projectBySlugQuery, { slug }).then(data => setProject(data))
    }, [slug])

    if (!project) return null

    return <ArticlePage article={project} />
}
