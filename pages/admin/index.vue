<template>
  <!-- Admin Menu -->
  <AdminMenu />
  <!-- Admin content -->
  <AdminContent :title="metaData.title">
    <p>Inhalt der Seite</p>
  </AdminContent>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  title: 'Dashboard',
  menuName: 'admin',
  role: ['admin'],
  redirectDestination: '/'
});
const { meta: metaData } = useRoute();
</script>

<style lang="scss" scoped></style>
