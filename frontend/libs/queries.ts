// GROQ is Sanity's own query language. It is like asking Sanity a question
// It looks a bit like JSON but works more like a search filter

// --- FETCH ALL PROJECTS ---
// This query fetches every published project for your grid page
export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    categories[]-> {
        _id,
        title,
        slug
    }
}`

// --- FETCH A SINGLE PROJECT ---
// This query fetches ONE project by its slug for the individual article page
// The $slug part is a variable - you pass in the actual slug when you call it
export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    body[]{
        ...,
        _type == "image" => {
            ...,
            asset->
        }    
    },
    categories[]-> {
        _id,
        title,
        slug
    }
}`

// --- FETCH ALL EDUCATION POSTS ---
// This query fetches every education post ordered by publication date (descending)
export const educationQuery = `*[_type == "education"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    categories[]-> {
        _id,
        title,
        slug
    }
}`

// --- FETCH ALL CATEGORIES ---
// This fetches every category for your filter buttons at the top of the grid
export const categoriesQuery = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
}`