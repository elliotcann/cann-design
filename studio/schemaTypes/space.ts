// This defines what fields a space will have in Sanity

export default {
    name: 'space',
    title: 'Spaces',
    type: 'document',
    fields: [
        {   // SPACE TITLE
            name: 'title',
            title: 'Space Title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {   // SPACE URL
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'This will be the URL for the space (e.g. cann.design/spaces/my-space)',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        },
        {   // SPACE THUMBNAIL
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {   // SPACE CATEGORY
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'category',
                    },
                },
            ],
            description: 'Select categories for this space',
        },
{   // SPACE SHORT DESCRIPTION
            name: 'excerpt',
            title: 'Short Description',
            type: 'text',
            description: 'A brief description shown on the spaces page',
            rows: 3,
        },
        {   // SPACE MAIN CONTENT
            name: 'body',
            title: 'Content',
            type: 'array',
            description: 'The full space content',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    options: { hotspot: true },
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
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
}
