<template>
  <div class="flex flex-row flex-wrap py-4">
    <!-- left main screen -->
    <main role="main" class="w-full sm:w-2/3 md:w-3/4 px-2">
      <MainSection title="Aktvitäten">
        <div class="flex flex-row flex-wrap py-4">
          <MainCard title="Überschrift">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </MainCard>
          <MainCard title="Überschrift 2"> zweite Aktivität </MainCard>
          <MainCard title="Überschrift 3"> dritte Aktivität </MainCard>
        </div>
      </MainSection>
      <MainSection title="Termine">
        <MainCardSchedule title="1. Termin" :date="new Date()" />
        <MainCardSchedule title="2. Termin" :date="new Date()" />
        <MainCardSchedule title="3. Termin" :date="new Date()" />
      </MainSection>
      <MainSection title="Überschrift">
        <p>text</p>
      </MainSection>
    </main>
    <div class="w-full sm:w-1/3 md:w-1/4 px-2">
      <MainSection title="Links 1">
        <p>text</p>
      </MainSection>
      <MainSection title="Links 2">
        <p>text</p>
      </MainSection>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

console.log(colorMode);
</script>

<style scoped></style>
