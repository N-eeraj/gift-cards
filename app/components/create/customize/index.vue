<script setup lang="ts">
import {
  Occasion,
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

const title = computed(() => {
  switch (selectedOccasion.value) {
    case Occasion.ANNIVERSARY:
      return "Happy Anniversary";
    case Occasion.BIRTHDAY:
      return "Happy Birthday";
    case Occasion.CHRISTMAS:
      return "Merry Christmas";
    case Occasion.WISHES:
      return "Best Wishes";
    default:
      return null;
  }
});
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
