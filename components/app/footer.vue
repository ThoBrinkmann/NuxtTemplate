<template>
  <footer class="bg-primary-default rounded-xl">
    <div
      class="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between"
    >
      <span class="text-sm sm:text-center"
        >© {{ new Date().getFullYear() }} TB
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
        <li v-for="entry in footerMenu" :key="entry.menuName">
          <NuxtLink :to="entry.link" class="hover:underline me-4 md:me-6">
            <span>{{ entry.menuName }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const footerMenu = ref([
  {
    menuName: 'Abount',
    link: '/'
  },
  {
    menuName: 'Impressum',
    link: '/'
  },
  {
    menuName: 'Contact',
    link: '/'
  }
]);
</script>

<style scoped></style>
