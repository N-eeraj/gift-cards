<script setup lang="ts">
import {
  PrintSize,
  PrintVisibility,
} from "~/definitions/customize";
import type { TemplateDef } from "~/definitions/templates";

interface Props {
  icon: string;
  size?: PrintSize | null;
  visibility?: PrintVisibility | null;
  color?: TemplateDef["theme"]["foreground"]["text"];
}
withDefaults(
  defineProps<Props>(),
  {
    size: PrintSize.MD,
    visibility: PrintVisibility.LIGHT,
    color: "text-white",
  }
);
</script>

<template>
  <div
    class="grid items-center p-4"
    :class="[
      size === PrintSize.SM ? 'grid-cols-8' : 'grid-cols-6',
    ]">
    <Icon
      v-for="index in size === PrintSize.SM ? 48 : 24"
      :key="index"
      :name="icon"
      class="m-auto"
      :class="[
        color,
        size,
      ]"
      :style="{
        opacity: `${visibility}%`,
      }" />
  </div>
</template>
