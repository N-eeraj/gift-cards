<script setup lang="ts">
import {
  Template,
  Occasion,
  TEMPLATES,
} from "~/definitions";
import {
  type TemplateDef,
} from "~/definitions/templates";

interface Props {
  occasion: Occasion;
  template: Template;
}
const props = defineProps<Props>();

const cardTemplate = computed<TemplateDef>(() => (
  TEMPLATES[props.occasion]
    .find(({ slug }) => slug === props.template)!
));
</script>

<template>
  <div
    class="w-full max-w-xs aspect-3/4 bg-linear-to-br rounded-lg"
    :class="[
      cardTemplate.theme.background.from,
      cardTemplate.theme.background.to,
    ]">
  </div>
</template>