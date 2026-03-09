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

    <div class="flex flex-col items-center gap-y-2 p-6 sm:max-w-md mx-auto">
      <div class="sm:space-y-1">
        <h3 class="flex items-center gap-x-2">
          <Icon
            name="twemoji:party-popper"
            class="text-2xl" />
          <h3 class="font-title text-3xl md:text-4xl font-bold">
            Congratulations
          </h3>
          <Icon
            name="twemoji:party-popper"
            class="text-2xl rotate-y-180" />
        </h3>
        <h4 class="text-lg md:text-xl text-foreground-light font-semibold text-center">
          You have created your card
        </h4>
      </div>

      <p class="text-center text-sm md:text-base text-foreground-light/75 leading-relaxed">
        Now you can share this as a gift to your loved ones and brighten their day.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-x-4 gap-y-2.5 w-full mt-4">
        <Button class="flex justify-center items-center gap-x-2 max-sm:w-full">
          <Icon
            name="lucide:image-down" />
          <span class="text-sm">
            Download as Image
          </span>
        </Button>
        <Button class="flex justify-center items-center gap-x-2 max-sm:w-full">
          <Icon
            name="lucide:share-2" />
          <span class="text-sm">
            Share as URL
          </span>
        </Button>
      </div>
    </div>
  </section>
</template>
