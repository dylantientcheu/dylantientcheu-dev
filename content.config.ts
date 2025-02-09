import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		articles: defineCollection({
			type: "page",
			source: "articles/**/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string(),
				published: z.string(),
				slug: z.string(),
			}),
		}),
		projects: defineCollection({
			type: "data",
			source: "projects/**/*.json",
			schema: z.object({
				name: z.string(),
				url: z.string(),
				description: z.string(),
				status: z.string(),
				thumbnail: z.string(),
			}),
		}),
	},
});
