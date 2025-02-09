<template>
  <div class="space-y-6">
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      hello
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      i'm Dylan, i work as a software & product engineer at <NuxtLink
        class="p-1 bg-blue-600 rounded-md text-white cursor-pointer hover:bg-transparent hover:text-blue-600 hover:underline transition-all cursivo"
        href="https://algolia.com" target="_blank" external>
        <UIcon aria-hidden="true" name="simple-icons:algolia" class="w-4 h-4 mr-1 flex-shrink-0 translate-y-[3px]" /> <span
          class="">algolia</span>
      </NuxtLink>. i specialize in cooking experiences for the web, going from
      the backend to the frontend.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      find me on <NuxtLink
        class="border-b border-dashed hover:border-solid border-b-gray-600 text-gray-900 dark:text-gray-400 hover:border-b-gray-900 dark:hover:text-white hover:text-black font-medium"
        to="https://github.com/dylantientcheu" target="_blank" external>
        <UIcon aria-hidden="true" name="lucide:github" class="w-4 h-4 mr-1" />GitHub
      </NuxtLink>
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
