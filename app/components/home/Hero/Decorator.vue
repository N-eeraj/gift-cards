<script setup lang="ts">
import { MorphingText } from "~/components/ui/morphing-text";
import { PrintSize } from "~/definitions/customize";

const decorators = [
  {
    icon: "tabler:confetti",
    bgGradient: "from-teal-300 to-emerald-800",
    initialClasses: "-top-5 -left-4 rotate-x-30 rotate-y-10 -rotate-z-10",
    hoverClasses: "group-hover:-top-10 group-hover:-left-15 group-hover:rotate-x-15 group-hover:-rotate-z-20 group-hover:scale-80",
    morphClass: "my-auto text-white *:text-3xl! *:sm:text-4xl! *:md:text-[42px]! *:font-title *:-translate-x-1/7! *:-translate-y-full! rotate-z-25",
    size: PrintSize.MD,
  },
  {
    icon: "hugeicons:fireworks",
    bgGradient: "from-sky-300 to-indigo-800",
    initialClasses: "top-0 left-3 rotate-x-30 rotate-y-10 rotate-z-5",
    hoverClasses: "group-hover:-top-16 group-hover:left-10 group-hover:rotate-x-15 group-hover:rotate-z-10 group-hover:scale-80",
    morphClass: "*:left-1/2 my-auto text-white *:text-3xl! *:sm:text-4xl! *:md:text-[42px]! *:font-title *:-translate-x-1/3! *:-translate-y-full! -rotate-z-30",
    size: PrintSize.SM,
  },
  {
    icon: "tabler:balloon",
    bgGradient: "from-rose-400 to-red-800",
    initialClasses: "top-0 left-0 rotate-x-30 rotate-y-15 -rotate-z-5",
    hoverClasses: "group-hover:top-15 group-hover:rotate-x-15 group-hover:rotate-y-5 group-hover:-rotate-z-10 group-hover:scale-80",
    morphClass: "*:top-1/2 *:left-1/2 my-auto text-white *:text-3xl! *:sm:text-4xl! *:md:text-[42px]! *:font-title *:-translate-x-1/2! *:-translate-y-1/2! rotate-z-15",
    size: PrintSize.LG,
  },
];

const TEXTS = [
  "Anniversary",
  "Bakrid",
  "Birthday",
  "Christmas",
  "Diwali",
  "Easter",
  "Eid",
  "New Year",
  "Onam",
  "Valentine",
  "Wedding",
] as const;
</script>

<template>
  <div class="group relative perspective-1000 sm:flex-1 max-sm:w-3/4 w-5/6 max-w-2xs aspect-3/4">
    <div
      v-for="(decorator, index) in decorators"
      :key="index"
      class="absolute flex justify-center items-center size-full rounded-xl shadow-lg transition-all duration-500 group-hover:scale-80"
      :class="[
        `bg-linear-to-br`,
        decorator.bgGradient,
        decorator.initialClasses,
        decorator.hoverClasses,
      ]">
      <GiftCardIconsGrid
        :icon="decorator.icon"
        :size="decorator.size"
        class="absolute size-full" />

      <ClientOnly>
        <MorphingText
          :texts="TEXTS.slice(index * 3).concat(TEXTS.slice(0, index * 3))"
          :cool-down-time="2"
          :class="decorator.morphClass" />
      </ClientOnly>
    </div>
  </div>
</template>
