<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/blog', limit: 10, sort: [{ date: -1 }] }

function makeLongDate(timestamp: number) {
  const date = new Date(timestamp * 1000)
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date)
}
</script>

<template>
  <div class="w-full">
    <Tags open text="Hero" />
    <Hero />
    <Tags text="Hero" />

    <ContentList v-slot="{ list }" :query="query" path="/blog">
      <Tags open text="Blog" />
      <article
        v-for="article in list"
        :key="article._path"
        class="border-b border-dashed border-gray-300 mb-8 pb-6 dark:border-gray-800 hover:border-solid"
      >
        <div class="flex mb-2 gap-4 items-center justify-between">
          <div>
            <span
              v-if="article.featured"
              class="rounded cursor-pointer text-sm tracking-widest p-2 text-orange-400 fire-cursor featured-tag uppercase cursivo"
            >
              #Featured
            </span>
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="rounded cursor-pointer text-sm text-slate tracking-widest p-2 transition-all duration-300 uppercase cursivo hover:bg-indigo-500 hover:text-white"
            >
              #{{ tag }}
            </span>
          </div>
          <span class="text-sm text-slate cursivo">
            {{ makeLongDate(article.date) }}
          </span>
        </div>
        <NuxtLink
          :to="article._path"
          class="transition-all text-3xl duration-300 break-keep cursivo md:text-6xl hover:text-indigo-500"
        >
          {{ article.title }}
        </NuxtLink>
        <p class="mt-4 text-slate text-base break-keep md:text-xl">
          {{ article.description }}
        </p>
      </article>
      <Tags text="Blog" />
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
