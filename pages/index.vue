<template>
  <div class="w-full">
    <Hero />
    <ContentList v-slot="{ list }" path="/blog">
      <article v-for="article in list" :key="article._path" class="border-b border-dashed border-gray-300 mb-8 pb-6 dark:border-gray-800">
        <div class="flex gap-4 items-center">
          <NuxtLink :to="article._path" class="cursor-pointer text-sm text-slate tracking-widest uppercase cursivo">
            #{{ article.tag }}
          </NuxtLink>
          <span class="text-sm cursivo">
            {{ article.date }}
          </span>
        </div>
        <NuxtLink :to="article._path" class="text-3xl cursivo md:text-6xl">
          {{ article.title }}
        </NuxtLink>
        <p class="mt-4 text-slate text-base md:text-xl">
          {{ article.description }}
        </p>
      </article>
      <p class="text-center tracking-widest text-indigo-300 cursivo">
        - End -
      </p>
    </ContentList>
  </div>
</template>
