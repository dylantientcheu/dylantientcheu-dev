export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  content: {
    // Disable for security reason on CodeSandBox
    defaultLocale: 'en',
  },
  unocss: {
    preflight: true,
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  colorMode: {
    classSuffix: '',
  },
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer)
        config.build.rollupOptions.output.inlineDynamicImports = true
    },
  },
})
