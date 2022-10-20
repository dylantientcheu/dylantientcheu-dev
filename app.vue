<script setup>
useHead({
  title: 'Dylan Tientcheu',
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
});
</script>

<template>
  <div class="p-4">
    <Header />
    <NuxtLayout cl>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Palanquin:wght@300;400;600;700;900&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Square+Peg");

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
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Jost", sans-serif;
  font-size: 1.1rem;
}

html.dark {
  background: #121212;
  color: #d3d3d3;
}

a {
  font-weight: 600;
  text-decoration: underline;
  @apply hover:text-orange-500;
}

.cursivo {
  font-family: "VG5000";
}

a.cursivo {
  font-family: "VG5000";
}
</style>
