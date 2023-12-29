<template>
  <div class="mt-4">
    <FormLabel v-if="label" :label="label" />
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
    <p v-if="helperText" class="mx-2 mb-2 text-sm text-secondary-default">
      {{ helperText }}
    </p>
    <p v-else class="mb-4"></p>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  helperText: String,
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' },
  modelValue: Object
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped></style>
