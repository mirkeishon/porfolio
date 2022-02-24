export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    orderings: [
      {
        title: "Date",
        name: "date",
        by: [{ field: "publishedAt", direction: "asc"}]
      }
    ],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        }
      },
      {
        name: 'demo',
        title: 'Demo',
        type: 'string',
      },
      {
        name: 'code',
        title: 'Code',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'tag',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }
    ]
  }