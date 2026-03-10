// No "use client" here! This is a SERVER component.
// That means Next.js fetches the data on the server BEFORE sending the page to the browser.
// Faster, better for SEO, and more secure.

import { client, urlFor } from '@/libs/sanity'
import { projectsQuery, categoriesQuery } from '@/libs/queries'
import Image from 'next/image'
import Link from 'next/link'

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
        <main className="min-h-screen bg-black text-white">

            {/* PAGE HEADER */}
            <div className="h-24" /> {/* Spacer for navbar */}
            <div className="px-8 py-12">
                <h1 className="text-5xl font-bold mb-12">Projects</h1>

                {/* CATEGORY FILTERS - we'll make these work in Stage 3 */}
                <div className="flex gap-4 flex-wrap mb-12">
                    <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                        All
                    </button>
                    {categories.map((category: Category) => (
                        <button
                            key={category._id}
                            className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project: Project) => (
                        
                        // Link wraps the whole card - clicking anywhere opens the project
                        <Link key={project._id} href={`/projects/${project.slug.current}`}>
                            <div className="group cursor-pointer">

                                {/* PROJECT IMAGE */}
                                <div className="relative aspect-square overflow-hidden mb-4">
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
                                <h2 className="text-xl font-bold">{project.title}</h2>

                                {/* CATEGORY TAGS */}
                                <div className="flex gap-2 mt-2 flex-wrap">
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
        </main>
    )
}