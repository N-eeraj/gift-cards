<script setup lang="ts">
import {
  CREATION_STEP_ORDER,
} from "~/definitions";

const {
  currentStepIndex,
  setStep,
} = useCreateStepper();
</script>

<template>
  <ul class="flex justify-evenly items-center gap-x-2 w-5/6 mx-auto">
    <li
      v-for="(step, index) in CREATION_STEP_ORDER"
      :key="step"
      class="relative flex-1 after:transition-all after:duration-300"
      :class="{
        'after:absolute after:left-1/2 after:top-1/2 after:w-[calc(100%-19px)] after:h-1 after:translate-x-4.75': index < CREATION_STEP_ORDER.length - 1,
        'after:bg-primary': currentStepIndex > index,
        'after:bg-zinc-300': currentStepIndex <= index,
      }">
      <Button
        class="relative grid place-content-center size-10 mx-auto p-1 text-base! rounded-full! text-shadow-xs z-10"
        :class="{
          'bg-zinc-300!': currentStepIndex < index,
        }"
        @click="setStep(step)">
        {{ index + 1 }}
      </Button>
    </li>
  </ul>
</template>
