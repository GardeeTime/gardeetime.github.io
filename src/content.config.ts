import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      company: z.string(),
      role: z.string().optional(),
      startDate: z.string(),
      endDate: z.string().optional(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      status: z
        .enum(["shipped", "in-progress", "poc", "concept", "ongoing"])
        .default("ongoing"),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string().url(),
          })
        )
        .default([]),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimonials" }),
  schema: z.object({
    quote: z.string(),
    author: z.string().optional(),
    role: z.string(),
    company: z.string().optional(),
    context: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { work, testimonials };
