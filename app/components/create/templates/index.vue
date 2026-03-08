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

const hoveringTemplate = ref<Template | null>(null);
const timeoutRef = ref<ReturnType<typeof setTimeout> | null>(null);
function handleHoverTemplate(slug: Template) {
  if (timeoutRef.value) clearTimeout(timeoutRef.value);
  timeoutRef.value = setTimeout(() => {
    hoveringTemplate.value = slug;
  }, hoveringTemplate.value ? 0 : 1500);
}
function handleHoverLeave() {
  if (timeoutRef.value) clearTimeout(timeoutRef.value);
  timeoutRef.value = setTimeout(() => {
    hoveringTemplate.value = null;
  }, 500);
}
</script>

<template>
  <section class="flex flex-col justify-center items-center gap-y-3 lg:gap-y-4 px-2">
    <h3 class="font-title text-2xl lg:text-3xl text-center font-medium">
      Select a Template
    </h3>

    <ul class="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-12 w-full max-w-4xl">
      <li
        v-for="({ slug, name, theme }) in templateOptions"
        :key="slug">
        <button
          class="group flex flex-col items-center gap-y-2 w-full max-w-2xs mx-auto duration-300"
          :class="[
            (hoveringTemplate && hoveringTemplate !== slug) && 'grayscale-60 blur-xs'
          ]"
          @click="handleTemplateSelection(slug as Template)"
          @pointerenter="handleHoverTemplate(slug as Template)"
          @pointerleave="handleHoverLeave">
          <CreateTemplatesPreview
            :theme="theme"
            class="w-full group-hover:scale-105 duration-300" />
          <strong class="text-lg font-medium">
            {{ name }}
          </strong>
        </button>
      </li>
    </ul>
  </section>
</template>
