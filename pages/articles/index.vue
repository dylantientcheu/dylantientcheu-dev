<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="blog" :description="description" />
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
  title: "Blog | Dylan Tientcheu",
  description,
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryCollection("articles").order("published", "DESC").all()
);
</script>
