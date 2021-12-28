<template>
  <div class="mx-auto lg:w-1/2">
    <h1 class="font-black mt-4 mb-0 text-4xl">
      About <span ml-4 text-xs text-gray>summary about me</span>
    </h1>

    <p mt-4>
      Hi, I am Dylan Tientcheu, a software engineer based in Paris and in love with everything software, data and user interfaces.
    </p>
    <p mt-2>
      When I do not code I ball, basketball, travel, eat foreign food or talk with strangers. I enjoy learning new things and I am always looking for new ways to improve myself.
    </p>
    <p mt-8>
      You can find me on <a href="https://github.com/blurdylan">Github</a>, <a href="https://www.linkedin.com/in/dylan-tientcheu/">LinkedIn</a> and <a href="https://www.instagram.com/dylantientcheu/">Instagram</a>.
    </p>
    <h1 class="font-black mt-12 mb-4 text-4xl">
      Projects <span ml-4 text-xs text-gray>my craft</span>
    </h1>
    <ClientOnly>
      <div v-if="projects" class="flex flex-wrap">
        <a v-for="(project, index) in projects" :key="index" :href="project.url" class="font-normal no-underline md:w-1/2">
          <Project
            :icon="project.icon"
            :name="project.name"
            :tools="project.tools"
            :description="project.description"
          />
        </a>
      </div>
    </ClientOnly>
    <h1 class="font-black mt-12 mb-0 text-4xl">
      Contact <span ml-4 text-xs text-gray>Get in touch</span>
    </h1>
    <p mt-4>
      Hit me up at <a href="mailto:hi@dylantientcheu.dev">hi@dylantientcheu.dev</a>
    </p>
  </div>
</template>

<script setup lang="ts">
const projects = ref([
  {
    name: 'Manifesto',
    description: 'A PWA that helps generate a manifest for your own PWA',
    url: 'https://blurdylan.github.io/manifesto/',
    icon: 'i-carbon-box-medium',
    tools: ['i-logos-vue', 'i-logos-node-sass', 'i-logos-pwa'],
  },
  {
    name: 'Manifesto CLI',
    description: 'A CLI tool that helps generate a manifest for your PWA',
    url: 'https://github.com/blurdylan/manifesto-cli',
    icon: 'i-carbon-border-none',
    tools: ['i-logos-nodejs-icon', 'i-logos-terminal', 'i-logos-pwa'],
  },
  {
    name: 'Millenium',
    description: 'A Cameroonian real estate e-commerce website',
    url: 'http://www.milleniumpre.com/home',
    icon: 'i-carbon-building-insights-1',
    tools: ['i-logos-vue', 'i-logos-nuxt-icon', 'i-logos-nodejs-icon', 'i-logos-fastify', 'i-logos:zoho'],
  },
  {
    name: 'Wörter Vogel',
    description: 'German minimal dictionary - helps you find word gender, syllables and phonetics',
    url: 'https://github.com/blurdylan/worter-vogel',
    icon: 'i-carbon-notebook-reference',
    tools: ['i-logos-react'],
  },
  {
    name: 'LaMap Bot',
    description: 'A Telegram bot to play the popular LaMap card game with your friends',
    url: 'https://lamap-bot.vercel.app/',
    icon: 'i-carbon-augmented-reality',
    tools: ['i-logos-python', 'i-logos-postgresql', 'i-logos-telegram', 'i-logos-nextjs', 'i-logos-heroku'],
  },
])
</script>
