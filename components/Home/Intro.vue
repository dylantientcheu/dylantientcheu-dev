<template>
  <div class="space-y-6">
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      hello
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      i'm Dylan, i work as a software & product engineer at <NuxtLink
        class="p-1 bg-blue-600 rounded-md text-white cursor-pointer hover:bg-transparent hover:text-blue-600 hover:shadow-xl transition-all cursivo">
        <Icon aria-hidden="true" name="simple-icons:algolia" class="w-4 h-4 mr-[0.5px]" /> algolia
      </NuxtLink>. i specialize in cooking experiences for the web, going from
      the backend to the frontend.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      find me on <NuxtLink
        class="border-b border-dashed hover:border-solid border-b-gray-600 text-gray-900 dark:text-gray-400 hover:border-b-gray-900 dark:hover:text-white hover:text-black font-medium"
        to="https://github.com/dylantientcheu" target="_blank" external>
        <Icon aria-hidden="true" name="lucide:github" class="w-4 h-4 mr-1" />GitHub
      </NuxtLink>
      and
      <NuxtLink
        class="border-b border-dashed hover:border-solid border-b-gray-600 text-gray-900 dark:text-gray-400 hover:border-b-gray-900 dark:hover:text-white hover:text-black font-medium"
        to="https://twitter.com/dylantientcheu" target="_blank" external>
        <Icon aria-hidden="true" name="lucide:twitter" class="w-4 h-4 mr-1" />Twitter
      </NuxtLink>.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Dylan Tientcheu",
  description:
    "69x Software Engineer.",
});
</script>
