<script setup lang="ts">
interface Props {
  name: string
  description: string
  url?: string
  icon: string
  tools?: string[]
}

const props = defineProps<Props>()
toRefs(props)

</script>

<template>
  <div>
    <div class="rounded cursor-pointer flex my-2 opacity-95 gap-2 md:p-2 md:pb-2 hover:bg-gray-100 hover:opacity-100 dark:hover:bg-dark-700">
      <div class="icon">
        <p class="text-5xl" :class="icon" />
      </div>
      <div>
        <p class="font-bold">
          {{ name }}
        </p>
        <p class="text-sm text-gray-400">
          {{ description }}
        </p>
        <div v-if="tools" class="flex mt-2 gap-3 items-center">
          <a v-for="tool in tools" :key="tool" :class="tool" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: normal;
}
</style>
