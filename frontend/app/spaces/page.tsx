"use client"

import { useState, useEffect } from 'react'
import { client } from '@/libs/sanity'
import { spacesQuery, spaceCategoriesQuery } from '@/libs/queries'
import ContentCard from '@/components/ContentCard'
import FilterButtons from '@/components/FilterButtons'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

type Category = {
    _id: string
    title: string
    slug: { current: string }
}

type Space = {
    _id: string
    title: string
    slug: { current: string }
    mainImage: any
    publishedAt: string
    excerpt: string
    categories: Category[]
}

export default function SpacesPage() {

    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [spaces, setSpaces] = useState<Space[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        client.fetch(spacesQuery).then(data => setSpaces(data))
        client.fetch(spaceCategoriesQuery).then(data => setCategories(data))
    }, [])

    const visibleSpaces = activeCategory
        ? spaces.filter(space =>
            space.categories?.some(cat => cat._id === activeCategory)
          )
        : spaces

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

                {/* SPACES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {visibleSpaces.map((space) => (
                        <ContentCard key={space._id} {...space} href="/spaces" />
                    ))}

                    {/* COMING SOON PLACEHOLDER */}
                    <div className="group cursor-default">
                        <div className="relative aspect-7/5 overflow-hidden mb-2 bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Coming Soon</span>
                        </div>
                        <h2 className="text-md font-bold text-gray-300">More Spaces</h2>
                    </div>

                </div>

            </div>
            <BackToTop />
            <Footer />
        </main>
    )
}
