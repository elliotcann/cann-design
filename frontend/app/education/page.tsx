"use client"

import { useState, useEffect } from 'react'
import { client } from '@/libs/sanity'
import { educationQuery } from '@/libs/queries'
import ContentCard from '@/components/ContentCard'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

type Category = {
    _id: string
    title: string
    slug: { current: string }
}

type EducationPost = {
    _id: string
    title: string
    slug: { current: string }
    mainImage: any
    publishedAt: string
    excerpt: string
    categories: Category[]
}

export default function EducationPage() {

    const [posts, setPosts] = useState<EducationPost[]>([])

    useEffect(() => {
        client.fetch(educationQuery).then(data => setPosts(data))
    }, [])

    return (
        <main className="min-h-screen flex flex-col">
            <div className="h-24" />
            <div className="flex-1 px-6 py-4">

                {/* EDUCATION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                    {posts.map((post) => (
                        <ContentCard key={post._id} {...post} href="/education" />
                    ))}
                </div>

            </div>
            <BackToTop />
            <Footer />
        </main>
    )
}
