<script setup lang="ts">
const steps = [
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
  <section class="bg-surface py-20">
    <div class="max-w-5xl xl:max-w-6xl mx-auto px-6 text-center">
      <h3 class="font-title text-3xl font-semibold text-foreground">
        How It Works
      </h3>

      <ul class="grid md:grid-cols-3 gap-x-10 gap-y-6 mt-6">
        <li
          v-for="({ title, description }, index) in steps"
          class="flex flex-col justify-center items-center min-h-40 bg-white px-4 py-6 rounded-xl shadow-md shadow-primary/30">
          <h4 class="text-xl font-title font-medium">
            {{ index + 1 }}. {{title}}
          </h4>
          <hr class="w-4/5 h-px my-3 bg-primary/40 border-0" />
          <p class="text-foreground/75 mt-2 text-sm leading-tight">
            {{ description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
