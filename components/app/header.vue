<template>
  <header class="mb-4 bg-primary-default rounded-xl">
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/assets/img/TB.png" class="h-12" alt="TB Logo" />
        <span class="self-center font-semibold whitespace-nowrap">Title</span>
      </NuxtLink>

      <div>
        <NuxtLink to="/admin">
          <button class="px-4 py-1 btn">
            <Icon name="mdi:account-cog" size="2em" />
          </button>
        </NuxtLink>
        <NuxtLink to="/login">
          <button class="px-4 py-1 btn">
            <Icon name="mdi:user" size="2em" />
          </button>
        </NuxtLink>
        <button class="px-4 py-1 btn" @click="toggleDarkMode()">
          <Icon name="mdi:theme-light-dark" size="2em" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();
function toggleDarkMode() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark';
  } else {
    colorMode.preference = 'light';
  }
}
</script>

<style scoped></style>
