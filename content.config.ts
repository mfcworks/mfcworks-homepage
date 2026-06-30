import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'posts/*.md',
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })
    }),
    news: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'news/*.md',
    }),
    about: defineCollection({
      type: 'page',
      source: 'about.md'
    }),

    company: defineCollection({
      type: 'page',
      source: 'company.md'
    }),
    service: defineCollection({
      type: 'page',
      source: 'service.md'
    }),
    news: defineCollection({
      type: 'page',
      source: 'news.md'
    }),
    technology: defineCollection({
      type: 'page',
      source: 'technology.md'
    }),
    contact: defineCollection({
      type: 'page',
      source: 'contact.md'
    })
  }
})
