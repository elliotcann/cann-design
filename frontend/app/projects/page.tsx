"use client" // 👈 ADD THIS - makes the whole page interactive

import { useState, useEffect } from "react" // 👈 ADD useEffect too
import { client, urlFor } from '@/libs/sanity'
import { projectsQuery, categoriesQuery } from '@/libs/queries'
import Image from 'next/image'
import Link from 'next/link'
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

    // Button classes

    const buttonActive = "bg-white text-black text-sm tracking-wide font-bold py-2 px-4 rounded-full inline-block opacity-100 transition-opacity hover:opacity-75 duration-300 ease-in-out cursor-pointer border-2 border-black"

    const buttonInactive = "bg-black text-white text-sm tracking-wide font-bold py-2 px-4 rounded-full inline-block opacity-100 transition-opacity hover:opacity-75 duration-300 ease-in-out cursor-pointer"

    return (
        <main className="min-h-screen">
            <div className="h-24" />
            <div className="px-6 py-4">

                {/* FILTER BUTTONS */}
                <div className="flex gap-4 flex-wrap mb-6">

                    <button
                        onClick={() => setActiveCategory(null)}
                        className={activeCategory === null
                            ? buttonActive
                            : buttonInactive
                        }
                    >
                        All
                    </button>

                    {categories.map((category) => (
                        <button
                            key={category._id}
                            onClick={() => setActiveCategory(category._id)}
                            className={activeCategory === category._id
                                ? buttonActive
                                : buttonInactive
                            }
                        >
                            {category.title}
                        </button>
                    ))}

                </div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.map((project) => (
                        <Link key={project._id} href={`/projects/${project.slug.current}`}>
                            <div className="group cursor-pointer">
                                <div className="relative aspect-7/5 overflow-hidden mb-2">
                                    {project.mainImage && (
                                        <Image
                                            src={urlFor(project.mainImage).width(800).url()}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                </div>
                                <h2 className="text-md font-bold">{project.title}</h2>
                                <div className="flex gap-2 flex-wrap">
                                    {project.categories?.map((cat) => (
                                        <span key={cat._id} className="text-sm text-gray-400">
                                            {cat.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
            <BackToTop />
            <Footer />
        </main>
    )
}