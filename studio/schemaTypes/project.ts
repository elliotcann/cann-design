// This defines what fields a project will have in Sanity

export default {
    name: 'project', // An identifier that we can reference in our frontend code to display projects from Sanity
    title: 'Projects', // What will be seen by the end user in Sanity interface
    type: 'document', // The type of content that Sanity will know that we are using
    fields: [ // An array of all the entries that are necessary for a project to be published through Sanity
        {   // PROJECT TITLE
            name: 'title', // An identifier that we can reference in our fronedn code to display the title of the project from Sanity
            title: 'Project Title', // What will be seen by the end user in Sanity
            type: 'string', // This will be a string of text
            validation: (Rule: any) => Rule.required() // Tell the Sanity user that a Project Title must be included
        },
        {   // PROJECT URL
            name: 'slug', // A slug is a URL friendly version of text (e.g My Project becomes my-project)
            title: 'Slug',
            type: 'slug',
            description: 'This will be the URL for the project (e.g. cann.design/projects/my-project)',
            options: {
                source: 'title', // Sanity will autimatically generate a slug from the title field
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        },
        {   //PROJECT THUMBNAIL
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true, // Sanity will allow end user to select the focal point of an image to ensure it is never cropped out of the webpage
            },
        },
        {   // PROJECT CATEGORY
            name: 'catergories',
            title: 'Categories',
            type: 'array', // An array so we can use a list
            of: [
                    {
                        type: 'reference', // Each item in the list is a reference to another document
                        to: {
                            type: 'category', // Specifically references to documents of type 'category'
                        },
                    },
                ],
            description: 'Select categories for this project',
        },
        {   // PROJECT PUBLICATION DATE
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime', // Show when the project was completed/published
        },
        {   // PROJECT SHORT DESCRIPTION
            name: 'excerpt',
            title: 'Short Description',
            type: 'text', // Allows for multiline text - unlike a string which is single line text
            description: 'A brief description shown on the projects page',
            rows: 3, // Input will appear as 3 rows tall in the interface
        },
        {   // PROJECTS MAIN CONTENT (BLOG POST)
            name: 'body',
            title: 'Content',
            type: 'array', // This is a list... again
            description: 'The full article content',
            of: [ // This list can contain two types of content
                {
                    type: 'block' // Rich text blocks (paragraphs, headings, bold text, list, etc.)
                },
                {
                    type: 'image', // Images with optional captions
                    options: {hotspot: true},
                    fields: [
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                            description: 'Text to display below image'
                        },
                    ],
                },
            ],
        },
    ],
    // PROJECT PREVIEW IN SANITY
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            subtitle: 'publishedAt',
        },
    },
}