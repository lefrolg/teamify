<script setup>

defineProps({
  title: String,
  subtitle: String,
  stats: String,
  color: String,
})

</script>

<template>
  <div :class="color" class="flex flex-col items-center justify-center">
    <div class="text-[22px] font-bold text-surface-950">{{ title }}</div>
    <div class="text-md text-surface-950">{{ subtitle }}</div>
    <div class="text-sm text-surface-700 mt-1">{{ stats }}</div>
  </div>

</template>

<style scoped>

</style>