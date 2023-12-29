<template>
  <form
    class="w-full p-4 mx-auto mb-4 shadow-md bg-secondary-lightAccent dark:bg-secondary-darkAccent rounded-xl"
    :class="small ? 'max-w-sm' : ''"
    @submit.prevent="submitForm"
  >
    <div
      class="block my-4 text-2xl font-bold text-center text-primary-light dark:text-primary-dark"
    >
      {{ label }}
    </div>

    <slot></slot>
  </form>
</template>

<script setup>
const props = defineProps({
  label: String,
  small: { type: Boolean, default: true }
});
</script>
