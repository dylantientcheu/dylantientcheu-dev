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
    <div class="rounded cursor-pointer flex bg-gray-50 my-1 opacity-95 p-4 transition-all dark:bg-dark-800 hover:bg-gray-100 hover:shadow-xl hover:shadow-light-200 dark:hover:bg-dark-500 dark:hover:shadow-dark-400 ">
      <div class="md:pb-2">
        <p class="font-bold text-xl">
          {{ name }}
        </p>
        <p class="text-sm text-gray-400">
          {{ description }}
        </p>
        <div v-if="tools" class="flex mt-2 gap-3 items-center">
          <i v-for="tool in tools" :key="tool" :class="tool" />
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
