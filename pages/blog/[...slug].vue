<script lang="ts" setup>

</script>

<template>
  <ContentDoc :path="$route.path">
    <template #default="{ doc }">
      <ContentRenderer :value="doc" class="text-lg prose lg:text-2xl " />
    </template>
  </ContentDoc>
</template>

<style scoped>
:deep(h1) {
  @apply text-center !big-title;
  font-family: "VG5000" !important;
}

:deep(h2,h3,h4,h5,h6) {
  font-family: "VG5000" !important;

}

:deep(hr) {
  @apply border-b border-dashed border-0 border-gray-300 my-3 dark:border-gray-800;
}

:deep(code, kbd, samp, pre) {
    font-family: 'DM Mono';
    font-size: 1em;
}
</style>
