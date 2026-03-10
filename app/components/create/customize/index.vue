<script setup lang="ts">
import {
  Occasion,
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
  <section class="flex flex-col justify-evenly items-center md:items-start md:flex-row gap-x-10 gap-y-8 w-full px-2">
    <GiftCard
      v-if="title && selectedOccasion && selectedTemplate"
      :title
      :name
      :message
      :pattern
      :size
      :visibility
      :occasion="selectedOccasion"
      :template="selectedTemplate" />

    <CreateCustomizeConfig />
  </section>
</template>
