<script setup lang="ts">
import {
  CreationStep,
  Template,
  TEMPLATES,
  type Occasion,
} from "~/definitions";

const {
  selectedOccasion,
  setStep,
} = useCreate();

function handleTemplateSelection(template: Template) {
  setStep(CreationStep.CUSTOMIZE, { template });
}

const templateOptions = TEMPLATES[selectedOccasion.value as Occasion];
</script>

<template>
  <section class="flex flex-col justify-center items-center gap-y-3 lg:gap-y-4 px-2">
    <h3 class="font-title text-2xl lg:text-3xl text-center font-medium">
      Select a Template
    </h3>

    <ul class="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 w-full max-w-4xl">
      <li
        v-for="({ slug, name }) in templateOptions"
        :key="slug">
        <button
          class="flex flex-col items-center w-full"
          @click="handleTemplateSelection(slug as Template)">
          {{ name }}
        </button>
      </li>
    </ul>
  </section>
</template>
