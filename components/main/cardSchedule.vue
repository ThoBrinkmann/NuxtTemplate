<template>
  <div
    class="flex flex-col m-2 my-4 border rounded-lg shadow-md border-secondary-default hover:scale-105"
  >
    <div
      class="grid grid-cols-[15%_60%_25%] items-center bg-gradient-to-l from-tertiary-1 to-tertiary-f1 p-2 text-primary-light dark:text-primary-dark"
    >
      <div class="flex flex-col items-center border-r-4 boarder-primary-light">
        <div class="overflow-hidden text-3xl font-semibold">
          {{ date.toLocaleDateString('de-DE', { day: 'numeric' }) }}
        </div>
        <div class="overflow-hidden text-sm font-semibold uppercase">
          {{ date.toLocaleDateString('de-DE', { weekday: 'short' }) }}
        </div>
      </div>
      <div class="px-4 text-2xl font-bold tracking-tight">{{ title }}</div>
      <div>t.b.d.</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  date: Date
});
</script>

<style></style>
