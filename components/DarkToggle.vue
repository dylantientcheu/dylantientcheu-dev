<script setup lang='ts'>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="!outline-none" @click="toggleDark()">
    <div v-if="isDark" class="text-gray-500 i-carbon-moon  hover:text-black dark:hover:text-white" />
    <div v-else class="text-gray-500 i-carbon-sun  hover:text-black dark:hover:text-white" />
  </button>
</template>
