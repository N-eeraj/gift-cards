<script setup lang="ts">
import {
  type TemplateDef,
} from "~/definitions/templates";

type Props = Pick<TemplateDef, "theme">;
defineProps<Props>();
</script>

<template>
  <div class="relative aspect-3/4 p-5">
    <div
      class="absolute top-1/2 left-1/2 size-full p-3.5 bg-linear-to-br -translate-x-1/2 -translate-y-1/2 rounded-lg"
      :class="[theme.background.from, theme.background.to]">
      <div class="relative size-full rounded-lg overflow-hidden">
        <div
          class="absolute top-1/2 left-1/2 h-[200%] aspect-square bg-linear-to-l -translate-x-1/2 -translate-y-1/2 animate-spin"
          :class="[theme.foreground.from, theme.foreground.to]" />
      </div>
    </div>

    <div
      class="relative flex flex-col justify-center items-center gap-y-20 size-full pt-5 bg-linear-to-br rounded z-10"
      :class="[theme.background.from, theme.background.to]">
      <div class="flex-1 flex flex-col justify-end">
        <h2
          class="font-title text-5xl font-semibold bg-linear-to-tl bg-clip-text text-transparent -rotate-15"
          :class="[theme.foreground.from, theme.foreground.to]">
          Title
        </h2>
      </div>
      <p
        class="flex-2 px-2 lg:px-4 text-sm"
        :class="theme.foreground.text">
        Share a fun message to make someone’s day extra special!
      </p>
    </div>
  </div>
</template>
