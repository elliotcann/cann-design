"use client" // 👈 ADD THIS - makes the whole page interactive

import { useState, useEffect } from 'react' // 👈 ADD useEffect too
import { client } from '@/libs/sanity'
import { projectsQuery, categoriesQuery } from '@/libs/queries'
import ContentCard from '@/components/ContentCard'
import FilterButtons from '@/components/FilterButtons'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

type Category = {
    _id: string
    title: string
    slug: { current: string }
}

type Project = {
    _id: string
    title: string
    slug: { current: string }
    mainImage: any
    publishedAt: string
    excerpt: string
    categories: Category[]
}

export default function ProjectsPage() { // 👈 Remove "async" - no longer needed

    // Remember which category is selected. null = "All"
    const [activeCategory, setActiveCategory] = useState<string | null>(null)

    // Store the data we fetch from Sanity
    const [projects, setProjects] = useState<Project[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    // Fetch data when the page loads
    useEffect(() => {
        client.fetch(projectsQuery).then(data => setProjects(data))
        client.fetch(categoriesQuery).then(data => setCategories(data))
    }, [])

    // Which projects to show? If nothing selected, show all. Otherwise filter.
    const visibleProjects = activeCategory
        ? projects.filter(project =>
            project.categories?.some(cat => cat._id === activeCategory)
          )
        : projects

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

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.map((project) => (
                        <ContentCard key={project._id} {...project} href="/projects" />
                    ))}
                </div>

            </div>
            <BackToTop />
            <Footer />
        </main>
    )
}