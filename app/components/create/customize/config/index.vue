<script setup lang="ts">
import {
  CreationStep,
} from "~/definitions";
import {
  Tab,
} from "~/definitions/customize";

const activeTab = ref<Tab>(Tab.DETAILS);

const {
  setStep,
} = useCreate();

function showPreview() {
  setStep(CreationStep.PREVIEW);
}
</script>

<template>
  <section class="flex flex-col gap-y-4 w-full max-w-md px-4 pt-6 pb-8 bg-white rounded-lg border border-primary/30 transition-all duration-300 overflow-hidden">
    <CreateCustomizeConfigTabs v-model="activeTab" />

    <Transition
      mode="out-in"
      :duration="400"
      enter-active-class="duration-300"
      leave-active-class="duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0">
      <CreateCustomizeConfigDetails v-if="activeTab === Tab.DETAILS" />
      <CreateCustomizeConfigPrint v-else-if="activeTab === Tab.PRINT" />
      <!-- <CreateCustomizeConfigMusic v-else-if="activeTab === Tab.MUSIC" /> -->
    </Transition>

    <Button @click="showPreview">
      Continue
    </Button>
  </section>
</template>
