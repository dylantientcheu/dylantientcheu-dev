<template>
  <div>
    <h2 class="uppercase text-base font-semibold text-gray-400 mb-6">
      RECENT BLOG
    </h2>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 ">
      <UButton label="All Articles &rarr;" to="/articles" variant="link" color="gray" />
    </div>
  </div>
</template>

<script setup>
const { data: articles } = await useAsyncData("articles", () =>
  queryCollection("articles")
    .order("published", "DESC")
    .limit(3)
    .all()
);

</script>
