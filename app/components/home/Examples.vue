<script setup lang="ts">
import {
  Occasion,
  Template,
  OCCASION_TITLES,
} from "~/definitions";
import {
  Pattern,
  PrintSize,
  PrintVisibility,
} from "~/definitions/customize";
import {
  AppleCardCarousel,
  AppleCarouselItem,
} from "~/components/ui/apple-card-carousel";
const DEMO_CARDS = [
  {
    occasion: Occasion.BIRTHDAY,
    template: Template.BUBBLEGUM,
    name: "John Smith",
    pattern: Pattern.CAKE,
    size: PrintSize.MD,
    visibility: PrintVisibility.DARK,
    message: "Have an amazing day!"
  },
  {
    occasion: Occasion.WISHES,
    template: Template.CLEAR_SKY,
    name: "John Doe",
    pattern: Pattern.SPARKLES,
    size: PrintSize.SM,
    visibility: PrintVisibility.LIGHT,
    message: "Wishing you the best!"
  },
  {
    occasion: Occasion.ANNIVERSARY,
    template: Template.GOLDEN_IVORY,
    name: "Emma & Liam",
    pattern: Pattern.HEART,
    size: PrintSize.LG,
    visibility: PrintVisibility.DARK,
    message: "Cheers to many more years!"
  },
  {
    occasion: Occasion.CHRISTMAS,
    template: Template.ROYAL_GREEN,
    name: "Olivia",
    pattern: Pattern.STAR,
    size: PrintSize.MD,
    visibility: PrintVisibility.LIGHT,
    message: "Merry Christmas!"
  },
  {
    occasion: Occasion.WISHES,
    template: Template.CELESTIAL_SKY,
    name: "Noah",
    pattern: Pattern.FLOWERS,
    size: PrintSize.SM,
    visibility: PrintVisibility.DARK
  },
  {
    occasion: Occasion.BIRTHDAY,
    template: Template.NEON_GREEN,
    name: "Aiden",
    pattern: Pattern.CONFETTI,
    size: PrintSize.MD,
    visibility: PrintVisibility.LIGHT,
    message: "Celebrate in style!"
  },
  {
    occasion: Occasion.CHRISTMAS,
    template: Template.CRIMSON_GLOW,
    name: "Sophia",
    pattern: Pattern.FROST,
    size: PrintSize.LG,
    visibility: PrintVisibility.LIGHT,
    message: "Warm holiday wishes!"
  },
  {
    occasion: Occasion.WISHES,
    template: Template.FROZEN,
    name: "Lucas",
    pattern: Pattern.SPARKLES,
    size: PrintSize.MD,
    visibility: PrintVisibility.DARK
  },
  {
    occasion: Occasion.ANNIVERSARY,
    template: Template.IMPERIAL_PURPLE,
    name: "Mia & Ethan",
    pattern: Pattern.HEART,
    size: PrintSize.LG,
    visibility: PrintVisibility.LIGHT
  },
  {
    occasion: Occasion.BIRTHDAY,
    template: Template.STRAWBERRY_MARSHMALLOW,
    name: "Isabella",
    pattern: Pattern.CAKE,
    size: PrintSize.SM,
    visibility: PrintVisibility.DARK,
  },
  {
    occasion: Occasion.WISHES,
    template: Template.COSMIC,
    name: "James",
    pattern: Pattern.STAR,
    size: PrintSize.MD,
    visibility: PrintVisibility.LIGHT,
    message: "All the best!"
  }
] as const;
</script>

<template>
  <section class="flex flex-col items-center py-20">
    <h3 class="font-title text-3xl font-medium text-foreground">
      Example Cards
    </h3>

    <AppleCardCarousel>
      <AppleCarouselItem
        v-for="(card, index) in DEMO_CARDS"
        :key="index"
        :index>
        <GiftCard
          v-bind="card"
          :title="OCCASION_TITLES[card.occasion]"
          class="w-xs" />
      </AppleCarouselItem>
    </AppleCardCarousel>
  </section>
</template>
