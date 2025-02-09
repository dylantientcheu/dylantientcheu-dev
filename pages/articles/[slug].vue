<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
      <h1>{{ article.title }}</h1>
      <ContentRenderer :value="article" tag="article" />
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;

const { data: article } = await useAsyncData("article", () =>
  queryCollection("articles").where("slug", "==", slug).first()
);



useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  articleAuthor: "Dylan Tientcheu",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
