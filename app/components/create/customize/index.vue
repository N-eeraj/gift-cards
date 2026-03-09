<script setup lang="ts">
const {
  selectedOccasion,
  selectedTemplate,
} = useCreate();
</script>

<template>
  <section class="flex flex-col justify-evenly items-center md:items-start md:flex-row gap-x-10 gap-y-8 w-full px-2">
    <GiftCard
      v-if="selectedOccasion && selectedTemplate"
      :occasion="selectedOccasion"
      :template="selectedTemplate" />

    <CreateCustomizeConfig class="" />
  </section>
</template>
