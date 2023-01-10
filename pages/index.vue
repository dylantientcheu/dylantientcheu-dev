<template>
  <div class="w-full">
    <Hero />
    <ContentList v-slot="{ list }" path="/blog">
      <article v-for="article in list" :key="article._path" class="border-b border-dashed border-gray-300 mb-8 pb-6 dark:border-gray-800 hover:border-solid">
        <div class="flex mb-2 gap-4 items-center justify-between">
          <div>
            <span v-if="article.featured" class="rounded cursor-pointer text-sm tracking-widest p-2 text-orange-400 fire-cursor featured-tag uppercase cursivo">
              #Featured
            </span>
            <span v-for="tag in article.tags" :key="tag" class="rounded cursor-pointer text-sm text-slate tracking-widest p-2 transition-all duration-300 uppercase cursivo hover:bg-indigo-500 hover:text-white">
              #{{ tag }}
            </span>
          </div>
          <span class="text-sm text-slate cursivo">
            {{ article.date }}
          </span>
        </div>
        <NuxtLink :to="article._path" class="transition-all text-3xl duration-300 cursivo md:text-6xl hover:text-indigo-500">
          {{ article.title }}
        </NuxtLink>
        <p class="mt-4 text-slate text-base md:text-xl ">
          {{ article.description }}
        </p>
      </article>
      <p class="text-center tracking-widest text-indigo-300 cursivo">
        - End -
      </p>
    </ContentList>
  </div>
</template>

<style scoped>
  .fire-cursor {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='40' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🔥</text></svg>")
        16 0,
      auto;
  }
</style>
