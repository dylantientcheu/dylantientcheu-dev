export default defineNuxtConfig({
  target: 'static',
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxtjs/color-mode'],
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
