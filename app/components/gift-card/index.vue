<script setup lang="ts">
import {
  Template,
  Occasion,
  TEMPLATES,
} from "~/definitions";
import {
  type TemplateDef,
} from "~/definitions/templates";
import {
  PATTERNS,
  PrintSize,
  type Pattern,
  type PrintVisibility,
} from "~/definitions/customize";

interface Props {
  title: string;
  name?: string | null;
  message?: string | null;
  occasion: Occasion;
  template: Template;
  pattern?: Pattern | null;
  size?: PrintSize | null;
  visibility?: PrintVisibility | null;
}
const props = defineProps<Props>();

const cardTemplate = computed<TemplateDef>(() => (
  TEMPLATES[props.occasion]
    .find(({ slug }) => slug === props.template)!
));

const printIcon = computed(() => {
  const selectedPattern = PATTERNS.find(({ value }) => value == props.pattern);
  if (!selectedPattern) return;
  return selectedPattern.icon;
});
</script>

<template>
  <div
    class="relative flex flex-col justify-center items-center gap-y-6 w-full max-w-xs aspect-3/4 p-4 bg-linear-to-br rounded-lg overflow-hidden"
    :class="[
      cardTemplate.theme.background.from,
      cardTemplate.theme.background.to,
    ]">

    <GiftCardIconsGrid
      v-if="printIcon"
      :icon="printIcon"
      :size
      :visibility
      :color="cardTemplate.theme.foreground.text"
      class="absolute size-[110%] -rotate-5 scale-110 animate-pulse" />

    <h2
      v-if="title?.trim()"
      class="bg-linear-to-tl bg-clip-text text-transparent font-title text-4xl md:text-[42px] text-center font-semibold z-10"
      :class="[cardTemplate.theme.foreground.from, cardTemplate.theme.foreground.to]">
      {{ title.trim() }}
    </h2>

    <h3
      v-if="name?.trim()"
      class="bg-linear-to-tl bg-clip-text text-transparent font-title text-3xl md:text-4xl text-center font-semibold z-10"
      :class="[cardTemplate.theme.foreground.from, cardTemplate.theme.foreground.to]">
      {{ name.trim() }}
    </h3>

    <p
      v-if="message?.trim()"
      class="max-w-5/6 mt-4 text-lg md:text-xl text-center wrap-anywhere z-10"
      :class="cardTemplate.theme.foreground.text">
      {{ message.trim() }}
    </p>
  </div>
</template>
