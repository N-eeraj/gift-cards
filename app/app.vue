<script setup lang="ts">
const route = useRoute();
const showNavbar = computed(() => !route.meta.hideNavbar);
</script>

<template>
  <Navbar v-if="showNavbar" />
  <NuxtPage />
</template>
