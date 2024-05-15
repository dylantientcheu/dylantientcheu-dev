<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a :href="bookmark.url" target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2  min-w-0">
          <UAvatar :src="getThumbnail(bookmark.url)" :alt="bookmark.label" :ui="{ rounded: 'rounded-md' }" />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-base font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "awesome things I've found on the internet.";
useSeoMeta({
  title: "Bookmarks | Dylan Tientcheu",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "Icônes - All icons in one place with an awesome search engine",
    url: "https://icones.js.org/",
  },
  {
    id: 2,
    label: "Supabase - Open source Firebase alternative",
    url: "https://www.supabase.com/",
  },
  {
    id: 3,
    label: "Clearbit - Logo API",
    url: "https://clearbit.com/logo",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
