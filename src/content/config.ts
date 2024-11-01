import { defineCollection, z } from 'astro:content'

export const collections = {
  commands: defineCollection({
    schema: z.object({
      title: z.string(),
      category: z.string(),
      command: z.string(),
      description: z.string(),
      usage: z.string(),
      examples: z.array(
        z.object({
          cmd: z.string(),
          desc: z.string()
        })
      ),
      notes: z.array(z.string())
    })
  })
}
