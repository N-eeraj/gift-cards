<script setup lang="ts">
definePageMeta({
  hideNavbar: true,
});

const route = useRoute();
const template = computed(() => route.params.template);
const config = computed(() => route.params.config);
</script>

<template>
  {{ template }}
  {{ config }}
</template>
