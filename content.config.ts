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
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })
    }),
    about: defineCollection({
      type: 'page',
      source: 'about.md',
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })    }),

    company: defineCollection({
      type: 'page',
      source: 'company.md',
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })
    }),
    service: defineCollection({
      type: 'page',
      source: 'service.md',
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })
    }),
    news: defineCollection({
      type: 'page',
      source: 'news.md',
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })
    }),
    technology: defineCollection({
      type: 'page',
      source: 'technology.md',
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })
    }),
    contact: defineCollection({
      type: 'page',
      source: 'contact.md',
      schema: z.object({
        feature: z.string(),
        date: z.date(),
        project: z.string()
      })
    })
  }
})
