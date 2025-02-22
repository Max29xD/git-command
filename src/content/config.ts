import { defineCollection, z } from 'astro:content'

export const Categories = [
  'basics',
  'branching',
  'remote',
  'history',
  'changes',
  'collaboration',
  'maintenance',
  'debugging',
  'configuration',
  'advanced'
] as const

export const Difficulties = ['beginner', 'intermediate', 'advanced'] as const

export const Levels = ['basic', 'advanced'] as const

export type Category = (typeof Categories)[keyof typeof Categories]
export type Difficulty = (typeof Difficulties)[keyof typeof Difficulties]
export type Level = (typeof Levels)[keyof typeof Levels]

export const collections = {
  commands: defineCollection({
    schema: z.object({
      title: z.string(),
      category: z.enum(Categories),
      command: z.string(),
      description: z.string(),
      usage: z.string(),
      difficulty: z.enum(Difficulties),
      examples: z.array(
        z.object({
          cmd: z.string(),
          desc: z.string(),
          level: z.enum(Levels).optional()
        })
      ),
      notes: z.array(z.string()),
      warnings: z.array(z.string()).optional(),
      related: z.array(z.string()).optional(),
      tips: z.array(z.string()).optional()
    })
  })
}
