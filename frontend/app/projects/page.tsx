// No "use client" here! This is a SERVER component.
// That means Next.js fetches the data on the server BEFORE sending the page to the browser.
// Faster, better for SEO, and more secure.

import { client, urlFor } from '@/libs/sanity'
import { projectsQuery, categoriesQuery } from '@/libs/queries'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

// --- TYPESCRIPT TYPES ---
// These tell TypeScript exactly what shape our data will be
// Think of them like a blueprint - if Sanity sends something unexpected, TypeScript warns you

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

const buttonClass = "bg-black text-white text-sm tracking-wide font-bold py-2 px-4 rounded-full inline-block opacity-100 transition-opacity hover:opacity-75 duration-300 ease-in-out cursor-pointer"

// --- THE PAGE ---
// Notice it's async! Server components can be async which means
// you can use await directly inside them - no useEffect needed!
export default async function ProjectsPage() {

    // Fetch both at the same time using Promise.all
    // This is faster than fetching one after the other
    const [projects, categories] = await Promise.all([
        client.fetch(projectsQuery),     // Asks Sanity for all projects
        client.fetch(categoriesQuery),   // Asks Sanity for all categories
    ])

    return (
        <main className="min-h-screen">

            {/* PAGE HEADER */}
            <div className="h-24" /> {/* Spacer for navbar */}
            <div className="px-6 py-4">

                {/* CATEGORY FILTERS */}
                <div className="flex gap-4 flex-wrap mb-6">
                    <button className={buttonClass}>
                        All
                    </button>
                    {categories.map((category: Category) => (
                        <button
                            key={category._id}
                            className={buttonClass}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project: Project) => (
                        
                        // Link wraps the whole card - clicking anywhere opens the project
                        <Link key={project._id} href={`/projects/${project.slug.current}`}>
                            <div className="group cursor-pointer">

                                {/* PROJECT IMAGE */}
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

                                {/* PROJECT TITLE */}
                                <h2 className="text-md font-bold opacity-100 transition-opacity hover:opacity-75 duration-300 ease-in-out">{project.title}</h2>

                                {/* CATEGORY TAGS */}
                                <div className="flex gap-2 flex-wrap">
                                    {project.categories?.map((cat: Category) => (
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