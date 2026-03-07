<script setup lang="ts">
const route = useRoute();
const template = computed(() => route.params.template);
const config = computed(() => route.params.config);
</script>

<template>
  {{ template }}
  {{ config }}
</template>
