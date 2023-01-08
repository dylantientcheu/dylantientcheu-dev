<script lang="ts" setup>

</script>

<template>
  <ContentDoc :path="$route.path" class="prose">
    <template #default="{ doc }">
      <ContentRenderer :value="doc" />
    </template>
  </ContentDoc>
</template>

<style>
h1 {
  @apply text-center big-title;
  font-family: "VG5000" !important;
}

h2,h3,h4,h5,h6 {
  font-family: "VG5000" !important;

}

p {
  @apply my-3;
}

hr {
  @apply border-b border-dashed border-0 border-gray-300 my-3 dark:border-gray-8;
}
</style>
