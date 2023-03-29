// 1. Import utilities from `astro:content`
import { z, defineCollection, image } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date().optional(),
  }),
});

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    when: z.string().optional(),
    screenshot: image().optional(),
    screenshotAlt: z.string().optional(),
    link: z.string().optional()
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
  'work': workCollection,
};