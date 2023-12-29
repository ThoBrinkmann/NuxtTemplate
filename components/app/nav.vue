<template>
  <nav class="bg-primary-default rounded-xl">
    <div class="flex flex-wrap items-center max-w-screen-xl p-2 mx-auto mb-4">
      <div v-for="menuItem in menuData" :key="menuItem.label">
        <NuxtLink :to="menuItem.link">
          <button class="btn">{{ menuItem.label }}</button>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menuData = ref([
  {
    label: 'Form',
    link: '/formSample'
  },
  {
    label: 'Accordion',
    link: '/accordionSample'
  },
  {
    label: 'Funktion 3',
    link: '/'
  }
]);
</script>

<style scoped></style>
