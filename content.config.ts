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

  }
})
