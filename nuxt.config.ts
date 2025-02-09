export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,

	modules: [
		"@nuxt/ui",
		"@nuxtjs/google-fonts",
		"@nuxtjs/fontaine",
		"nuxt-umami",
		"@nuxt/image",
		"@nuxt/content",
		"@vueuse/nuxt",
	],

	icon: {
		provider: "server",
	},

	umami: {
		enabled: true,
		id: "6d8618be-7142-4a0b-a14f-41501951a1cf",
		host: "https://analytics.eu.umami.is",
	},

	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			htmlAttrs: {
				lang: "en",
				class: "h-full",
			},
			bodyAttrs: {
				class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
			},
		},
	},

	content: {
		build: {
			markdown: {
				highlight: {
					theme: "github-dark",
				},
			},
		},
	},

	googleFonts: {
		display: "swap",
		families: {
			Inter: [400, 500, 600, 700, 800, 900],
		},
	},

	compatibilityDate: "2025-02-08",
});
