<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="cookbook" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "everything i capture. everything i learn. everything i share.";
useSeoMeta({
  title: "Cookbook | Dylan Tientcheu",
  description,
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>
