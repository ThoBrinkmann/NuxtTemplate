<template>
  {{ accordionConfig.elements[0].name }}
  <Accordion :accordionConfig="accordionConfig">
    <template v-slot:table>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        quibusdam incidunt impedit aliquam eos neque. Commodi blanditiis quos,
        nisi totam dolorem hic adipisci eveniet similique suscipit, alias
        voluptatem, ullam quae.
      </p>
    </template>
    <template v-slot:data>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
        accusamus magnam laboriosam aspernatur. Commodi dicta expedita rerum,
        odit et consequatur! Voluptatibus quisquam ut laborum sint doloribus,
        accusamus veniam minus beatae?
      </p>
    </template>
  </Accordion>
</template>

<script setup>
const dynamicSlotName1 = ref('table');
const dynamicSlotName2 = ref('data');
const accordionConfig = ref({
  toggleElements: true,
  elements: [
    {
      name: 'table',
      title: 'Tabelle mit Daten',
      active: true
    },
    {
      name: 'data',
      title: 'Daten',
      active: false
    }
  ]
});
</script>

<style lang="scss" scoped></style>
