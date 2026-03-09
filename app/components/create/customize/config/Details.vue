<script setup lang="ts">
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-medium">
        Name of the person
      </label>

      <input
        type="text"
        placeholder="Enter name"
        class="w-full rounded-md border border-primary/20 bg-surface/60 px-3 py-2 text-sm placeholder:text-foreground/40 focus-visible:outline-primary/60" />
    </div>

    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-medium text-foreground">
        Message
      </label>

      <textarea
        placeholder="Enter message"
        class="w-full min-h-20 max-h-32 rounded-md border border-primary/20 bg-surface/60 px-3 py-2 text-sm placeholder:text-foreground/40 focus-visible:outline-primary/60 resize-y" />
    </div>
  </div>
</template>
