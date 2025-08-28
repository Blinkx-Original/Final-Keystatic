// keystatic.config.ts
import { config, collection, fields, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud' },
  cloud: {
    // This comes from Keystatic Cloud → your project page
    project: 'TEAM_NAME/PROJECT_NAME'
  },

  ui: { brand: { name: 'Astro + Keystatic' } },

  singletons: {
    site: singleton({
      label: 'Site Settings',
      path: 'content/site',
      schema: {
        title: fields.text({ label: 'Site Title', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true })
      }
    })
  },

  collections: {
    posts: collection({
      label: 'Posts',
      path: 'content/posts/*',
      slugField: 'slug',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        slug: fields.slug({ name: { field: 'title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        content: fields.mdx({ label: 'Content' })
      }
    })
  }
});
