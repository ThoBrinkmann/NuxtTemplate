<template>
  <div class="admin_content">
    <div
      class="container bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light font-semibold text-lg p-2 rounded-xl mb-4">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
  });
</script>

<style lang="scss" scoped></style>
