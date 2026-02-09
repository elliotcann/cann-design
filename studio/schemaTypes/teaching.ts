// This defines what fields a teaching post will have

export default {
    name: 'teaching',
    title: 'Teaching',
    type: 'document',
    fields: [
        {
            name: 'title',
            titel: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
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
        },
        {
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
        },
        {
            name: 'excerpt',
            title: 'Short Description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'body',
            title: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: {hotspot: true},
                    fields: [
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
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