export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  content: {
    defaultLocale: 'en',
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai',
      },
    },
  },
  unocss: {
    preflight: true,
  },
  experimental: {
    reactivityTransform: true,
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
