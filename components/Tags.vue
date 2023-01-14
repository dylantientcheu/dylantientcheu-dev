<script setup lang="ts">
interface Props {
  text: string
  open?: boolean
  selfClose?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  selfClose: false,
})
</script>

<template>
  <p v-if="!props.selfClose" class="tags cursivo">
    &lt;<span v-if="!props.open">{{ "/" }}</span> {{ props.text }} &gt;
  </p>
  <p v-else class="tags cursivo">
    &lt; {{ props.text }} /&gt;
  </p>
</template>
