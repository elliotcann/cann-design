"use client"

import { useState, useEffect } from 'react'
import { client } from '@/libs/sanity'
import { educationQuery, educationCategoriesQuery } from '@/libs/queries'
import ContentCard from '@/components/ContentCard'
import FilterButtons from '@/components/FilterButtons'
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

    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [posts, setPosts] = useState<EducationPost[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        client.fetch(educationQuery).then(data => setPosts(data))
        client.fetch(educationCategoriesQuery).then(data => setCategories(data))
    }, [])

    const visiblePosts = activeCategory
        ? posts.filter(post =>
            post.categories?.some(cat => cat._id === activeCategory)
          )
        : posts

    return (
        <main className="min-h-screen flex flex-col">
            <div className="h-24" />
            <div className="flex-1 px-6 py-4">

            <h2 className="text-bold text-lg py-4">We create and develop our own places and spaces to share. You can use them to stay in, host events or for commercial photography and filming</h2>                

                <FilterButtons
                    categories={categories}
                    activeCategory={activeCategory}
                    onChange={setActiveCategory}
                />

                {/* EDUCATION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visiblePosts.map((post) => (
                        <ContentCard key={post._id} {...post} href="/education" />
                    ))}
                </div>

            </div>
            <BackToTop />
            <Footer />
        </main>
    )
}
