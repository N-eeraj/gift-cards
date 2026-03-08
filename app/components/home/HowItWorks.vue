<script setup lang="ts">
const steps = [
  {
    title: "Select Occasion",
    description: "Select the occasion for card.",
  },
  {
    title: "Choose Template",
    description: "Browse and select from beautiful card templates.",
  },
  {
    title: "Customize",
    description: "Edit text, colors, photos, and decorations.",
  },
  {
    title: "Download & Share",
    description: "Save your card or send it instantly online.",
  },
];
</script>

<template>
  <section class="bg-white py-20">
    <div class="max-w-5xl xl:max-w-6xl mx-auto max-xl:px-6 text-center">
      <h3 class="font-title text-3xl font-semibold text-foreground">
        How It Works
      </h3>

      <ul class="grid md:grid-cols-2 2xl:grid-cols-4 gap-x-10 gap-y-6 mt-6">
        <li
          v-for="({ title, description }, index) in steps"
          class="flex flex-col justify-center items-center min-h-40 bg-surface px-4 py-6 rounded-xl border border-primary/10">
          <h4 class="text-xl font-title font-medium">
            {{ index + 1 }}. {{title}}
          </h4>
          <hr class="w-4/5 h-px my-3 bg-primary/20 border-0" />
          <p class="text-foreground/75 mt-2 text-sm leading-tight">
            {{ description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
