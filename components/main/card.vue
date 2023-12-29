<template>
  <a
    href="#"
    class="flex flex-col items-center bg-secondary-light border border-secondary-default rounded-lg md:flex-row md:max-w-xl hover:bg-secondary-dafault dark:border-secondary-default dark:bg-secondary-dark shadow-md m-2 hover:scale-105">
    <img
      class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      src="https://www.alfen.de/wp-content/uploads/2023/12/IMG_2141-scaled.jpeg"
      alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary-light dark:text-primary-dark">
        {{ title }}
      </h5>
      <p class="mb-3 font-normal text-secondary-dark dark:text-secondary-light">
        <slot></slot>
      </p>
    </div>
  </a>
</template>

<script setup>
  const props = defineProps({
    title: String,
  });
</script>

<style lang="scss" scoped></style>
