<script setup lang="ts">
interface Props {
  variant?: "primary" | "secondary"
}
withDefaults(
  defineProps<Props>(),
  {
    variant: "primary",
  },
)
</script>

<template>
  <button
    class=" px-5 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-300"
    :class="{
      'bg-primary text-white hover:bg-primary/90': variant === 'primary',
      'bg-surface text-primary hover:bg-white': variant === 'secondary',
    }">
    <slot />
  </button>
</template>
