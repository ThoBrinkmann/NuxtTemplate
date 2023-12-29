<template>
  <div
    v-for="(element, index) in accordionConfig.elements"
    :key="element.title"
  >
    <button
      @click="toggleElements(index)"
      class="flex items-center justify-between w-full gap-3 px-3 py-1 text-xl font-medium border border-l border-r focus:ring-1 focus:ring-primary-default border-secondary-dark dark:border-secondary-light rtl:text-right"
      :class="{
        'rounded-t-xl': index === 0,
        'border-b-1': index === accordionConfig.elements.length - 1,
        'bg-secondary-default text-secondary-light hover:bg-secondary-default hover:text-secondary-light hover:dark:text-secondary-dark':
          element.active,
        'bg-secondary-lightAccent text-secondary-darkAccent dark:bg-secondary-darkAccent hover:bg-secondary-default hover:text-secondary-light hover:dark:text-secondary-dark':
          !element.active
      }"
    >
      <span>{{ element.title }}</span>
      <Icon
        v-if="element.active"
        name="material-symbols:expand-less"
        size="2em"
      />
      <Icon v-else name="material-symbols:expand-more" size="2em" />
    </button>
    <div :class="{ hidden: !element.active }">
      <div
        class="p-5 border-l border-r border-secondary-dark dark:border-secondary-light bg-secondary-lightAccent dark:bg-secondary-darkAccent"
        :class="{
          'border-b': index === accordionConfig.elements.length - 1
        }"
      >
        <p class="mb-2">
          <slot :name="element.name"> </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  accordionConfig: Object
});

function toggleElements(index) {
  console.log(index);
  console.log(props.accordionConfig);
  props.accordionConfig.elements[index].active =
    !props.accordionConfig.elements[index].active;
  if (props.accordionConfig.toggleElements) {
    props.accordionConfig.elements.forEach((element, x) => {
      if (x != index) element.active = false;
    });
  }
}
</script>

<style lang="scss" scoped></style>
