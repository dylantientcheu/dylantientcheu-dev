<template>
  <div class="mx-auto lg:w-1/2">
    <h1 class="font-black mt-4 mb-0 text-gray-400 text-4xl">
    <div>
      # <span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">Summary</span>
    </div>
    </h1>

    <p mt-4>
      Hello! I am Dylan Tientcheu, a <b class="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">software engineer</b> based in Paris and in love with everything software, dx, data and infrastructure.
    </p>
    <p mt-2>
      When I do not code, I ball, travel and eat foreign food or talk with strangers.
    </p>
    <p mt-8>
      You can find me on <a class="cursivo" href="https://github.com/blurdylan">Github</a>, <a class="cursivo" href="https://www.linkedin.com/in/dylan-tientcheu/">LinkedIn</a> and <a class="cursivo" href="https://www.instagram.com/dylantientcheu/">Instagram</a>.
    </p>
    <h1 class="font-black mt-12 mb-4 text-gray-400 text-4xl">
      # <span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">My craft</span>
    </h1>

    <TransitionGroup v-if="projects" appear name="list" class="grid md:gap-2 md:grid-cols-2" tag="div">
        <a v-for="(project, index) in projects" :key="project.name" :href="project.url" target="_blank" class="font-normal no-underline">
          <Project
            :icon="project.icon"
            :name="project.name"
            :tools="project.tools"
            :description="project.description"
          />
        </a>
    </TransitionGroup>

    <h1 class="font-black mt-12 mb-4 text-gray-400 text-4xl">
      # <span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">Blog & memos</span>
    </h1>
    <p mt-4>
      I write about my experiences and thoughts on <a class="cursivo" href="https://blog.logrocket.com/author/dylan-tientcheu/">Logrocket</a>, <a class="cursivo" href="https://medium.com/@blurdylan">Medium</a> and <a class="cursivo" href="https://twitter.com/dylantientcheu">Twitter</a>.
    </p>
    <h1 class="font-black mt-12 mb-0 text-gray-400 text-4xl">
      # <span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">Get in touch</span>
    </h1>
    <p mt-4>
      Hit me up at <a class="" href="mailto:hi@dylantientcheu.dev">hi@dylantientcheu.dev</a>
    </p>
  </div>
</template>

<script setup lang="ts">
const projects = ref([])

onMounted(() => {
  const projectsList = [{
    name: 'Fireman',
    description: 'The most comprehensive Firestore ORM for web and admin server',
    url: 'http://fireman-fns.netlify.com',
    icon: 'i-carbon-building-insights-1',
    tools: ['i-logos-nodejs-icon', 'i-logos-firebase', 'i-logos-vitest'],
  },
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
  }]
  projectsList.forEach(project => {
    projects.value.push(project)
  })
})

</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
