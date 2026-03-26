'use client'

import { useState, useEffect } from 'react'
import { client } from '@/libs/sanity'

// Shared types for all collection items (projects, education, spaces)
export type Category = {
    _id: string
    title: string
    slug: { current: string }
}

export type CollectionItem = {
    _id: string
    title: string
    slug: { current: string }
    mainImage: any
    excerpt: string
    categories: Category[]
}

// Fetches a Sanity collection and its categories, then filters by the active category.
// Pass in the GROQ queries for the items and categories specific to each collection.
export function useCollectionPage(itemsQuery: string, categoriesQuery: string) {
    const [allItems, setAllItems] = useState<CollectionItem[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [activeCategory, setActiveCategory] = useState<string | null>(null)

    // Fetch both items and their categories when the page first loads
    useEffect(() => {
        client.fetch(itemsQuery).then(data => setAllItems(data))
        client.fetch(categoriesQuery).then(data => setCategories(data))
    }, [])

    // Show all items unless a category filter is active
    const items = activeCategory
        ? allItems.filter(item =>
            item.categories?.some(cat => cat._id === activeCategory)
          )
        : allItems

    return { items, categories, activeCategory, setActiveCategory }
}
