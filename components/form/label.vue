<template>
  <label
    :for="label"
    class="block mx-2 mb-1 text-base font-semibold text-gray-900 dark:text-gray-100"
    >{{ label }}</label
  >
</template>

<script setup>
const props = defineProps({
  label: String
});
</script>

<style lang="scss" scoped></style>
