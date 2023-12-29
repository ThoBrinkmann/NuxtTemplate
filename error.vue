<template>
  <div
    class="flex items-center justify-center min-h-screen from-primary-dark to-primary-darkAccent dark:from-primary-light dark:to-primary-lightAccent bg-gradient-to-br"
  >
    <div
      class="w-full max-w-lg px-10 py-8 mx-auto rounded-lg shadow-xl bg-secondary-light dark:bg-secondary-dark text-primary-light dark:text-primary-dark"
    >
      <div class="max-w-md mx-auto space-y-6">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div class="max-w-screen-sm mx-auto text-center">
            <h1
              class="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600 dark:text-primary-500"
            >
              {{ error.statusCode }}
            </h1>
            <p
              class="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl"
            >
              Da ist etwas schief gelaufen
            </p>
            <button
              @click="handleError"
              type="submit"
              class="text-primary-dark dark:text-primary-light bg-primary-light hover:bg-primary-lightAccent focus:ring-4 focus:outline-none focus:ring-primary-default font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-dark dark:hover:dark:bg-primary-darkAccent text-xl mt-4"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
});

const handleError = () => clearError({ redirect: '/' });
</script>
