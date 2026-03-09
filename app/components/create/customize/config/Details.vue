<script setup lang="ts">
import {
  MAX_MESSAGE_LENGTH,
} from "~/definitions/customize";

const {
  name,
  message,
} = useCreateCustomize();
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-medium">
        Name of the person
      </label>

      <input
        v-model="name"
        type="text"
        placeholder="Enter name"
        class="w-full rounded-md border border-primary/20 bg-surface/60 px-3 py-2 text-sm placeholder:text-foreground/40 focus-visible:outline-primary/60" />
    </div>

    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-medium text-foreground">
        Message
      </label>

      <textarea
        v-model="message"
        placeholder="Enter message"
        :maxlength="MAX_MESSAGE_LENGTH"
        class="w-full min-h-20 max-h-32 rounded-md border border-primary/20 bg-surface/60 px-3 py-2 text-sm placeholder:text-foreground/40 focus-visible:outline-primary/60 resize-y" />

      <small class="text-right">
        {{ message?.length }}/{{ MAX_MESSAGE_LENGTH }}
      </small>
    </div>
  </div>
</template>
