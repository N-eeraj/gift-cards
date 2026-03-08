<script setup lang="ts">
import { MorphingText } from "~/components/ui/morphing-text";

const texts = [
  "Anniversary",
  "Birthday",
  "Christmas",
  "New Year",
];
</script>

<template>
  <div class="flex items-center justify-center sm:flex-1 max-sm:w-3/4 w-5/6 max-w-2xs aspect-3/4">
    <div class="relative size-full p-0.75 rounded-lg shadow-lg shadow-primary/40 overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200%] aspect-square bg-linear-to-br from-primary via-30% via-primary/25 to-80% to-primary/80 animate-[spin_4s_ease-in-out_infinite]" />
      <div class="relative flex justify-center items-center size-full bg-surface rounded-md z-1">
        <ClientOnly>
          <MorphingText
            :texts
            :cool-down-time="2"
            class="*:top-1/2 *:left-1/2 my-auto text-primary *:text-3xl! *:sm:text-4xl! *:md:text-[42px]! *:font-title *:-translate-x-1/2! *:-translate-y-1/2! -rotate-z-30" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
