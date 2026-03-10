<script setup lang="ts">
const occasion = useRouteQuery("occasion");
const template = useRouteQuery("template");

const {
  pattern,
  size,
  visibility,
} = useCreateCustomize();

const cardTemplate = computed(() => `${occasion.value}::${template.value}`);
const cardConfig = computed(() => {
  const config: Record<string, any> = {};
  if (pattern) {
    config.print = {
      pattern: pattern.value,
      size: size.value,
      visibility: visibility.value,
    }
  }
  if (Object.keys(config).length) {
    return JSON.stringify(config);
  }
  return "";
});

const encryptedCardTemplate = computed(() => btoa(cardTemplate.value));
const encryptedCardConfig = computed(() => btoa(cardConfig.value));

const url = computed(() => `${window.location.host}/${encryptedCardTemplate.value}/${encryptedCardConfig.value}`);

const { $toast } = useNuxtApp();
function handleShareUrl() {
  navigator.clipboard.writeText(url.value);
  $toast.success("Copied URL to clipboard");
}
</script>

<template>
  <div class="flex flex-col items-center gap-y-2 p-6 sm:max-w-md mx-auto">
    <div class="sm:space-y-1">
      <div class="flex items-center gap-x-2">
        <Icon
          name="twemoji:party-popper"
          class="text-2xl" />
        <h3 class="font-title text-3xl md:text-4xl font-bold">
          Congratulations
        </h3>
        <Icon
          name="twemoji:party-popper"
          class="text-2xl rotate-y-180" />
      </div>
      <h4 class="text-lg md:text-xl text-foreground-light font-semibold text-center">
        You have created your card
      </h4>
    </div>

    <p class="text-center text-sm md:text-base text-foreground-light/75 leading-relaxed">
      Now you can share this as a gift to your loved ones and brighten their day.
    </p>

    <div class="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-x-4 gap-y-2.5 w-full mt-4">
      <!-- <Button class="flex justify-center items-center gap-x-2 max-sm:w-full">
        <Icon
          name="lucide:image-down" />
        <span class="text-sm">
          Download as Image
        </span>
      </Button> -->
      <Button
        class="flex justify-center items-center gap-x-2 max-sm:w-full"
        @click="handleShareUrl">
        <Icon
          name="lucide:share-2" />
        <span class="text-sm">
          Share as URL
        </span>
      </Button>
    </div>
  </div>
</template>
