<script setup lang="ts">
import {
  Occasion,
  Template,
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
    title: "Happy Birthday",
    occasion: Occasion.BIRTHDAY,
    template: Template.BUBBLEGUM,
    name: "John Smith",
    pattern: Pattern.CAKE,
    size: PrintSize.MD,
    visibility: PrintVisibility.DARK,
  },
  {
    title: "Best Wishes",
    occasion: Occasion.WISHES,
    template: Template.CLEAR_SKY,
    name: "John Doe",
    pattern: Pattern.SPARKLES,
    size: PrintSize.SM,
    visibility: PrintVisibility.LIGHT,
  },

  {
    title: "Happy Anniversary",
    occasion: Occasion.ANNIVERSARY,
    template: Template.GOLDEN_IVORY,
    name: "Emma & Liam",
    pattern: Pattern.HEART,
    size: PrintSize.LG,
    visibility: PrintVisibility.DARK,
  },
  {
    title: "Season's Greetings",
    occasion: Occasion.CHRISTMAS,
    template: Template.ROYAL_GREEN,
    name: "Olivia",
    pattern: Pattern.STAR,
    size: PrintSize.MD,
    visibility: PrintVisibility.LIGHT,
  },
  {
    title: "Warmest Wishes",
    occasion: Occasion.WISHES,
    template: Template.EMERALD_BREEZE,
    name: "Noah",
    pattern: Pattern.FLOWERS,
    size: PrintSize.SM,
    visibility: PrintVisibility.DARK,
  },
  {
    title: "Happy Birthday Champ",
    occasion: Occasion.BIRTHDAY,
    template: Template.NEON_GREEN,
    name: "Aiden",
    pattern: Pattern.CONFETTI,
    size: PrintSize.MD,
    visibility: PrintVisibility.LIGHT,
  },
  {
    title: "Merry Christmas",
    occasion: Occasion.CHRISTMAS,
    template: Template.CRIMSON_GLOW,
    name: "Sophia",
    pattern: Pattern.FROST,
    size: PrintSize.LG,
    visibility: PrintVisibility.LIGHT,
  },
  {
    title: "Cheers to You",
    occasion: Occasion.WISHES,
    template: Template.CELESTIAL_SKY,
    name: "Lucas",
    pattern: Pattern.SPARKLES,
    size: PrintSize.MD,
    visibility: PrintVisibility.DARK,
  },
  {
    title: "Forever Together",
    occasion: Occasion.ANNIVERSARY,
    template: Template.IMPERIAL_PURPLE,
    name: "Mia & Ethan",
    pattern: Pattern.HEART,
    size: PrintSize.LG,
    visibility: PrintVisibility.LIGHT,
  },
  {
    title: "Sweet Birthday Wishes",
    occasion: Occasion.BIRTHDAY,
    template: Template.STRAWBERRY_MARSHMALLOW,
    name: "Isabella",
    pattern: Pattern.CAKE,
    size: PrintSize.SM,
    visibility: PrintVisibility.DARK,
  },
  {
    title: "Celebrate the Day",
    occasion: Occasion.WISHES,
    template: Template.COSMIC,
    name: "James",
    pattern: Pattern.STAR,
    size: PrintSize.MD,
    visibility: PrintVisibility.LIGHT,
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
          class="w-xs" />
      </AppleCarouselItem>
    </AppleCardCarousel>
  </section>
</template>
