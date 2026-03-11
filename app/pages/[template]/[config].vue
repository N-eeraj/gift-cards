<script setup lang="ts">
import {
  Occasion,
  OCCASION_TITLES,
  type Template,
} from '~/definitions';

const route = useRoute();
const cardTemplate = computed(() => route.params.template);
const cardConfig = computed(() => route.params.config);

interface CardTemplate {
  occasion: Occasion;
  template: Template;
}

const decryptedTemplate = computed<CardTemplate>(() => {
  const [
    occasion,
    template,
  ] = atob(cardTemplate.value as string ?? "")
    .split("::") as [Occasion, Template];
  return {
    occasion,
    template,
  };
});
const decryptedConfig = computed(() => {
  return(
    JSON.parse(atob(cardConfig.value as string ?? ""))
  );
});

const title = computed<typeof OCCASION_TITLES[keyof typeof OCCASION_TITLES]>(() => OCCASION_TITLES[decryptedTemplate.value.occasion!]);
</script>

<template>
  <main class="flex flex-col justify-center items-center gap-y-12 min-h-[calc(100svh-80px)] p-8 pb-2">
    <GiftCard
      v-if="title"
      :title
      :occasion="decryptedTemplate.occasion"
      :template="decryptedTemplate.template"
      :name="decryptedConfig.name"
      :message="decryptedConfig.message"
      :pattern="decryptedConfig.print.pattern"
      :size="decryptedConfig.print.size"
      :visibility="decryptedConfig.print.visibility"
      class="my-auto" />

    <NuxtLink
      to="/create"
      class="mt-auto font-title text-sm md:text-lg text-primary font-medium hover:underline">
      Create your own Gift Card
    </NuxtLink>
  </main>
</template>
