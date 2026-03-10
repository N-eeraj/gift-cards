<script setup lang="ts">
import {
  OCCASION_TITLES,
} from "~/definitions";

const {
  selectedOccasion,
  selectedTemplate,
} = useCreate();

const {
  name,
  message,
  pattern,
  size,
  visibility,
} = useCreateCustomize();

const title = computed<typeof OCCASION_TITLES[keyof typeof OCCASION_TITLES]>(() => OCCASION_TITLES[selectedOccasion.value!]);
</script>

<template>
  <section class="flex flex-col sm:flex-row items-center sm:items-start gap-x-10 gap-y-6">
    <GiftCard
      v-if="title && selectedOccasion && selectedTemplate"
      :title
      :name
      :message
      :pattern
      :size
      :visibility
      :occasion="selectedOccasion"
      :template="selectedTemplate"
      class="w-full" />

    <CreatePreviewOptions />
  </section>
</template>
