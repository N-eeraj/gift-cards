<script setup lang="ts">
import {
  CreationStep,
  OCCASION_MAP,
  type Occasion,
} from "~/definitions";

const {
  selectedOccasion,
  setStep,
} = useCreate();

function handleOccasionSelection(occasion: Occasion) {
  setStep(CreationStep.TEMPLATE, {
    occasion,
    template: undefined,
  });
}
</script>

<template>
  <section class="flex flex-col justify-center items-center gap-y-3 lg:gap-y-4">
    <h3 class="font-title text-2xl lg:text-3xl text-center font-medium">
      Select the Occasion
    </h3>

    <ul class="flex flex-wrap justify-center-safe gap-4 max-w-xs sm:max-w-2xl">
      <li
        v-for="([slug, name]) in Object.entries(OCCASION_MAP)"
        :key="slug"
        class="w-full min-[420px]:w-fit">
        <Button
          :variant="selectedOccasion === slug ? 'primary' : 'secondary'"
          class="w-full"
          :class="{
            'bg-white hover:bg-white/90!': selectedOccasion !== slug,
          }"
          @click="handleOccasionSelection(slug as Occasion)">
          {{ name }}
        </Button>
      </li>
    </ul>
  </section>
</template>
