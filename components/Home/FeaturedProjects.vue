<template>
  <div>
    <h2 class="uppercase text-base font-semibold text-gray-400 mb-6">
      KITCHEN
    </h2>
    <div class="space-y-4">
      <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
    </div>
    <div class="flex items-center justify-center mt-6 ">
      <UButton class="cursivo" label="head to the kitchen &rarr;" to="/kitchen" variant="link" color="gray" />
    </div>
  </div>
</template>

<script setup>
const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").limit(3).all()
);
</script>
