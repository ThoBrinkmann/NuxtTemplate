<template>
  <div class="p-4 bg-primary-light">
    <AppHeader />
    <div class="grid grid-cols-[18%_82%] w-full">
      <slot></slot>
    </div>
    <AppFooter />
  </div>
</template>

<script setup></script>

<style>
html {
  font-family: 'Nunito';
}
</style>
