'use client'

import { useCollectionPage } from '@/hooks/useCollectionPage'
import { educationQuery, educationCategoriesQuery } from '@/libs/queries'
import ContentCard from '@/components/ContentCard'
import FilterButtons from '@/components/FilterButtons'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function EducationPage() {

    const { items, categories, activeCategory, setActiveCategory } = useCollectionPage(educationQuery, educationCategoriesQuery)

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <ContentCard key={item._id} {...item} href="/education" />
                    ))}
                </div>

            </div>
            <BackToTop />
            <Footer />
        </main>
    )
}
