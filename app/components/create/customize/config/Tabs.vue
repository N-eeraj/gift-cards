<script setup lang="ts">
import {
  TAB_ITEMS,
  Tab,
} from "~/definitions/customize";

const modelValue = defineModel<Tab>({
  required: true,
});

const activeTabIndex = computed(() => TAB_ITEMS.findIndex(({ value }) => value === modelValue.value));

const tabSize = 100 / TAB_ITEMS.length;
</script>

<template>
  <ul
    class="relative flex items-center">
    <div
      class="absolute top-0 h-full bg-surface border-b-4 border-b-primary duration-200"
      :style="{
        width: `${tabSize}%`,
        left: `${tabSize * activeTabIndex}%`,
      }" />
    <li
      v-for="({ name, value }) in TAB_ITEMS"
      :key="value"
      class="flex-1">
      <button
        class="relative size-full px-4 py-2 z-10"
        :class="[
          value === modelValue ? 'text-primary' : 'text-foreground',
        ]"
        @click="modelValue = value">
        {{ name }}
      </button>
    </li>
  </ul>
</template>
