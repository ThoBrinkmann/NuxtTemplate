<template>
  <div class="mt-4">
    <FormLabel v-if="label" :label="label" />
    <div class="relative">
      <input
        :value="modelValue"
        :type="type"
        :id="label"
        class="bg-secondary-light border border-primary-light dark:border-primary-dark text-gray-900 text-base rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5 dark:bg-secondary-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-dark dark:focus:border-primary-dark"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
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
  modelValue: String
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped></style>
