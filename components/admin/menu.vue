<template>
  <aside>
    <h1 class="">Admin Menu</h1>
    <ul>
      <li
        v-for="entry in adminMenu"
        :key="entry.link">
        <div :class="{ hidden: entry.menuName != metaData.menuName }">
          <b class="top_layer_back"></b>
          <b class="top_layer_up"></b>
          <b class="bottom_layer_back"></b>
          <b class="bootom_layer_up"></b>
        </div>
        <NuxtLink
          :to="entry.link"
          :class="{ active: entry.menuName === metaData.menuName }">
          <Icon
            class=""
            :name="entry.icon" />
          <span class="font-bold block">{{ entry.menuName }}</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
  const { meta: metaData } = useRoute();

  const adminMenu = ref([
    {
      icon: "mdi:home",
      menuName: "admin",
      link: "/admin",
    },
    {
      icon: "mdi:account-circle",
      menuName: "function1",
      link: "/admin/function1",
    },
    {
      icon: "mdi:wrench",
      menuName: "function2",
      link: "/admin/function2",
    },
  ]);
</script>

<style scoped></style>
