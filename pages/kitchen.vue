<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="kitchen" :description="description" />
    <div class="space-y-4">
      <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
    </div>
  </main>
</template>

<script setup>
const description = "see... this is what i've cooked.";
useSeoMeta({
  title: "Kitchen | Dylan Tientcheu",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
