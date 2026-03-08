<script setup lang="ts">
interface Props {
  icon: string;
}
defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-6 items-center p-4">
    <Icon
      v-for="index in 24"
      :key="index"
      :name="icon"
      class="text-4xl text-white/15" />
  </div>
</template>
