<script setup lang="ts">
import { animate, stagger, timeline } from 'motion'

const projects = ref([])
const poppedIcons = ref([])

onMounted(() => {
  const projectsList = [
    {
      name: 'Fireman',
      description:
        'The most comprehensive Firestore helper functions for web and admin server',
      url: 'http://fireman-fns.netlify.com',
      icon: 'i-carbon-building-insights-1',
      tools: ['i-logos-nodejs-icon', 'i-logos-firebase', 'i-logos-mocha', 'i-logos-chai'],
    },
    {
      name: 'Manifesto',
      description: 'A PWA tool that helps generate a manifest for your own PWA',
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
      description:
        'German minimal dictionary - helps you find word gender, syllables and phonetics',
      url: 'https://github.com/blurdylan/worter-vogel',
      icon: 'i-carbon-notebook-reference',
      tools: ['i-logos-react'],
    },
    {
      name: 'LaMap Bot',
      description: 'A Telegram bot to play the popular LaMap card game with your friends',
      url: 'https://lamap-bot.vercel.app/',
      icon: 'i-carbon-augmented-reality',
      tools: [
        'i-logos-python',
        'i-logos-postgresql',
        'i-logos-telegram',
        'i-logos-nextjs',
        'i-logos-heroku',
      ],
    },
  ]
  projectsList.forEach((project) => {
    projects.value.push(project)
  })
})

function popTech(tools) {
  poppedIcons.value = tools
}

function unpopTech() {
  poppedIcons.value = []
}

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}

function enterTransition(el, done = () => { }) {
  timeline([
    [el, { opacity: 0, scale: 0.5, filter: 'blur(20px)' }, { duration: 0 }],
    [
      el,
      { opacity: 1, scale: 1, filter: 'blur(0px)' },
      { duration: 0.5, easing: 'ease-in-out' },
    ],
  ])
  animate(
    el,
    {
      x: `${randomNumber(-25, 25)}vw`,
      y: `${randomNumber(-25, 25)}vh`,
      z: -1,
      scale: randomNumber(1, 3),
      rotate: randomNumber(-20, 20),
      opacity: randomNumber(0.05, 0.4),
    },
    { duration: 0.5, delay: stagger(1), easing: 'ease-in-out' },
  )
}

function leaveTransition(el, done) {
  animate(
    el,
    { opacity: 0, scale: 0.5, filter: 'blur(20px)' },
    { duration: 0.5, easing: 'ease-in-out' },
  )
  // TODO: complete event
  setTimeout(() => {
    done()
  }, 500)
}
</script>

<template>
  <div class="mx-auto lg:w-1/2">
    <h1 class="font-black mt-4 mb-0 text-gray-400 text-4xl">
      <div><span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">> summary</span></div>
    </h1>

    <p mt-4>
      Hello! I am Dylan Tientcheu, a
      <b class="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">software engineer</b>
      based in Paris and in love with everything software, dx, data and infrastructure.
    </p>
    <p mt-2>
      When I do not code, I ball, travel and eat foreign food or talk with strangers.
    </p>
    <p mt-8>
      You can find me on
      <a class="cursivo" href="https://github.com/blurdylan" @mouseenter="popTech(['i-logos-github-icon'])" @mouseleave="unpopTech">Github</a>,
      <a class="cursivo" href="https://www.linkedin.com/in/dylan-tientcheu/" @mouseenter="popTech(['i-logos-linkedin-icon'])" @mouseleave="unpopTech">LinkedIn</a>
      and
      <a class="cursivo" href="https://www.instagram.com/dylantientcheu/" @mouseenter="popTech(['i-logos-instagram-icon'])" @mouseleave="unpopTech">Instagram</a>.
    </p>
    <h1 class="font-black mt-12 mb-4 text-gray-400 text-4xl">
      <span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">> my_craft</span>
    </h1>

    <TransitionGroup appear :css="false" @enter="enterTransition" @leave="leaveTransition">
      <i v-for="icon in poppedIcons" :key="icon" :class="[icon]" class="h-16 w-16 block absolute" />
    </TransitionGroup>

    <TransitionGroup v-if="projects" appear name="list" class="grid md:gap-2 md:grid-cols-2" tag="div">
      <a
        v-for="(project, index) in projects" :key="project.name" :href="project.url" target="_blank"
        class="font-normal no-underline"
      >
        <Project
          :icon="project.icon" :name="project.name" :tools="project.tools" :description="project.description"
          @mouseenter="popTech(project.tools)" @mouseleave="unpopTech"
        />
      </a>
    </TransitionGroup>

    <h1 class="font-black mt-12 mb-4 text-gray-400 text-4xl">
      <span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">> blog_and_memos</span>
    </h1>
    <p mt-4>
      I write about my experiences and thoughts on
      <a class="cursivo" href="https://blog.logrocket.com/author/dylan-tientcheu/">Logrocket</a>, <a
        class="cursivo" href="https://medium.com/@blurdylan" @mouseenter="popTech(['i-logos-medium-icon'])"
        @mouseleave="unpopTech"
      >Medium</a> and
      <a class="cursivo" href="https://twitter.com/dylantientcheu" @mouseenter="popTech(['i-logos-twitter'])" @mouseleave="unpopTech">Twitter</a>.
    </p>
    <h1 class="font-black mt-12 mb-0 text-gray-400 text-4xl">
      <span class="text-gray ml-4 top-2 text-6xl z-10 cursivo">> get_in_touch</span>
    </h1>
    <p mt-4>
      Hit me up at
      <a class="" href="mailto:hi@dylantientcheu.dev" @mouseenter="popTech(['i-logos-google-gmail'])" @mouseleave="unpopTech">hi@dylantientcheu.dev</a>
    </p>
  </div>
</template>

<style>
.list-move,
/* apply transition to moving elements */
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
