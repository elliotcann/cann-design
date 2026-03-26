'use client'

import { useCollectionPage } from '@/hooks/useCollectionPage'
import { spacesQuery, spaceCategoriesQuery } from '@/libs/queries'
import ContentCard from '@/components/ContentCard'
import FilterButtons from '@/components/FilterButtons'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function SpacesPage() {

    const { items, categories, activeCategory, setActiveCategory } = useCollectionPage(spacesQuery, spaceCategoriesQuery)

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {items.map((item) => (
                        <ContentCard key={item._id} {...item} href="/spaces" />
                    ))}

                    {/* Placeholder shown while more spaces are being added */}
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
