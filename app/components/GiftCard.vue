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
    class="relative flex flex-col justify-center items-center gap-y-6 w-full max-w-xs aspect-3/4 p-4 bg-linear-to-br rounded-lg"
    :class="[
      cardTemplate.theme.background.from,
      cardTemplate.theme.background.to,
    ]">

    <div
      v-if="printIcon"
      class="absolute size-full grid items-center p-4"
      :class="[
        size === PrintSize.SM ? 'grid-cols-8' : 'grid-cols-6',
      ]">
      <Icon
        v-for="index in size === PrintSize.SM ? 48 : 24"
        :key="index"
        :name="printIcon"
        class="m-auto"
        :class="[
          cardTemplate.theme.foreground.text,
          size,
        ]"
        :style="{
          opacity: `${visibility}%`,
        }" />
    </div>

    <h2
      v-if="title"
      class="bg-linear-to-tl bg-clip-text text-transparent font-title text-4xl md:text-[42px] text-center font-semibold"
      :class="[cardTemplate.theme.foreground.from, cardTemplate.theme.foreground.to]">
      {{ title }}
    </h2>

    <h3
      v-if="name"
      class="bg-linear-to-tl bg-clip-text text-transparent font-title text-3xl md:text-4xl font-semibold"
      :class="[cardTemplate.theme.foreground.from, cardTemplate.theme.foreground.to]">
      {{ name }}
    </h3>

    <p
      v-if="message"
      class="text-lg md:text-xl wrap-anywhere"
      :class="cardTemplate.theme.foreground.text">
      {{ message }}
    </p>
  </div>
</template>
