<template>
  <div class="p-4 bg-primary-light">
    <AppHeader />
    <AppNav />
    <main class="p-4 mb-4 bg-secondary-light dark:bg-secondary-dark rounded-xl">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script setup></script>

<style>
html {
  font-family: 'Nunito';
}
</style>
