<script setup>
useHead({
  title: 'Dylan Tientcheu',
  script: [
    {
      src: 'https://cdn.splitbee.io/sb.js',
      async: true,
    },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Dylan Tientcheu | 10x Software Engineer',
    },
    { name: 'og:url', content: 'https://dylantientcheu.dev/' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: 'Dylan Tientcheu' },
    { name: 'og:description', content: '10x Software Engineer' },
    { name: 'og:image', content: 'https://dylantientcheu.dev/og.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@dylantientcheu' },
    { name: 'twitter:creator', content: '@dylantientcheu' },
    { name: 'twitter:title', content: 'Dylan Tientcheu' },
    { name: 'twitter:description', content: '10x Software Engineer' },
    { name: 'twitter:image', content: 'https://dylantientcheu.dev/og.png' },
  ],

  link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
})
</script>

<template>
  <nav class="md:px-8">
    <Header />
  </nav>
  <body class="flex flex-col antialiased md:place-content-center md:items-center md:justify-center">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </body>
</template>

<style>
@font-face {
  font-family: 'VG5000';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('assets/fonts/VG5000-Regular_web.ttf') format('truetype');
}

@font-face {
  font-family: 'VG5000';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('assets/fonts/VG5000-Regular_web.woff2') format('woff2');
}

html,
body,
#__nuxt {
  margin: 0;
  padding: 4px;
  font-family: "Jost", sans-serif;
  width: 100%;
}

html.dark {
  background: #000;
  color: #d3d3d3;
}

.cursivo {
  font-family: "VG5000";
}
</style>
