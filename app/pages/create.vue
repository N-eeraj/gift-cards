<script setup lang="ts">
import {
  CreationStep,
} from "~/definitions";

const {
  currentStep,
  transitionClass,
} = useCreateStepper();
</script>

<template>
  <main class="flex flex-col justify-center-safe items-center gap-y-6 md:gap-y-10 px-1 py-10">
    <CreateStepper />

    <section class="flex-1 w-11/12 max-w-5xl mx-auto rounded-lg overflow-x-hidden">
      <Transition
        mode="out-in"
        :duration="400"
        enter-active-class="transition-all"
        leave-active-class="transition-all"
        :enter-from-class="`opacity-0 ${transitionClass.enter}`"
        :leave-to-class="`opacity-0 ${transitionClass.leave}`">
        <CreateOccasions v-if="currentStep === CreationStep.OCCASION" />
        <LazyCreateTemplates v-else-if="currentStep === CreationStep.TEMPLATE" />
        <LazyCreateCustomize v-else-if="currentStep === CreationStep.CUSTOMIZE" />
        <LazyCreatePreview v-else-if="currentStep === CreationStep.PREVIEW" />
      </Transition>
    </section>
  </main>
</template>
