<script setup lang="ts">
import { MorphingText } from "~/components/ui/morphing-text";

const decorators = [
  {
    icon: "tabler:confetti",
    bgGradient: "from-teal-300 to-emerald-800",
    initialClasses: "-top-5 -left-4 rotate-x-30 rotate-y-10 -rotate-z-10",
    hoverClasses: "group-hover:-top-10 group-hover:-left-15 group-hover:rotate-x-15 group-hover:-rotate-z-20 group-hover:scale-80",
    morph: { coolDown: 3, morphTime: 2 },
    morphClass: "my-auto text-white *:text-3xl! *:sm:text-4xl! *:md:text-[42px]! *:font-title *:-translate-x-1/7! *:-translate-y-full! rotate-z-25",
  },
  {
    icon: "hugeicons:fireworks",
    bgGradient: "from-sky-300 to-indigo-800",
    initialClasses: "top-0 left-3 rotate-x-30 rotate-y-10 rotate-z-5",
    hoverClasses: "group-hover:-top-16 group-hover:left-10 group-hover:rotate-x-15 group-hover:rotate-z-10 group-hover:scale-80",
    morph: { coolDown: 2.5, morphTime: 1.5 },
    morphClass: "*:left-1/2 my-auto text-white *:text-3xl! *:sm:text-4xl! *:md:text-[42px]! *:font-title *:-translate-x-1/3! *:-translate-y-full! -rotate-z-30",
  },
  {
    icon: "tabler:balloon",
    bgGradient: "from-rose-400 to-red-800",
    initialClasses: "top-0 left-0 rotate-x-30 rotate-y-15 -rotate-z-5",
    hoverClasses: "group-hover:top-15 group-hover:rotate-x-15 group-hover:rotate-y-5 group-hover:-rotate-z-10 group-hover:scale-80",
    morph: { coolDown: 2, morphTime: 1 },
    morphClass: "*:top-1/2 *:left-1/2 my-auto text-white *:text-3xl! *:sm:text-4xl! *:md:text-[42px]! *:font-title *:-translate-x-1/2! *:-translate-y-1/2! rotate-z-15",
  },
];

const texts = [
  "Anniversary",
  "Birthday",
  "Christmas",
  "New Year",
];
</script>

<template>
  <div class="group relative perspective-1000 sm:flex-1 max-sm:w-3/4 w-5/6 max-w-2xs aspect-3/4">
    <div
      v-for="(dec, index) in decorators"
      :key="index"
      class="absolute flex justify-center items-center size-full rounded-xl shadow-lg transition-all duration-500 group-hover:scale-80"
      :class="[
        `bg-linear-to-br`,
        dec.bgGradient,
        dec.initialClasses,
        dec.hoverClasses,
      ]">
      <HomeHeroDecoratorIconGrid
        :icon="dec.icon"
        class="absolute size-full" />
      <ClientOnly>
        <MorphingText
          :texts
          :cool-down-time="dec.morph.coolDown"
          :morph-time="dec.morph.morphTime"
          :class="dec.morphClass" />
      </ClientOnly>
    </div>
  </div>
</template>
