<template>
  <section class="bg-secondary-lightAccent dark:bg-secondary-darkAccent rounded-xl">
    <div class="max-w-screen-xl mx-auto mb-4 p-2 items-center">
      <div
        class="relative inline-block z-10 decoration-transparent text-xl font-bold text-primary-light dark:text-primary-dark pl-2 pr-4">
        {{ title }}
        <div
          class="absolute z-20 bg-gradient-to-r from-tertiary-1 to-tertiary-f1 bottom-0 left-0 h-1/2 w-full rounded-xl"></div>
        <div class="absolute z-30 bottom-0 left-0 pl-2 pr-4">
          {{ title }}
        </div>
      </div>
      <slot> </slot>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: String,
  });
</script>

<style lang="scss" scoped></style>
