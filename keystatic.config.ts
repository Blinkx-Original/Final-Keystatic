import { config, collection, fields, singleton } from '@keystatic/core';
import { github } from '@keystatic/core/storage/github';

const repo = process.env.KEYSTATIC_GITHUB_REPO!;     // e.g. "owner/repo"
const branch = process.env.KEYSTATIC_GITHUB_BRANCH || 'main';

export default config({
  storage: github({
    repo,
    branch,
    auth: {
      clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID!,
      clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET!
    }
  }),

  ui: {
    brand: { name: 'Astro + Keystatic' }
  },

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
