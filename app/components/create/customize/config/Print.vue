<script setup lang="ts">
import {
  PRINT_SIZES,
  PRINT_VISIBILITY,
} from "~/definitions/customize";

const {
  pattern,
  size,
  visibility,
  patternOptions,
  clearPattern,
} = useCreateCustomize();
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-medium">
        Pattern
      </label>

      <ul class="flex flex-wrap">
        <li
          v-for="({ icon, value }) in patternOptions"
          :key="value">
          <label class="grid place-content-center flex-1 size-16 has-checked:bg-primary has-checked:text-white border border-foreground-light/10 has-checked:border-primary transition-all duration-300">
            <input
              v-model="pattern"
              type="radio"
              :value
              class="hidden" />
            <Icon
              :name="icon"
              class="text-3xl" />
          </label>
        </li>
        <li
          v-if="pattern !== null"
          class="w-full mt-1">
          <button
            class="flex items-center gap-x-1 ml-auto text-sm text-red-700 font-medium"
            @click="clearPattern">
            <span>
              Clear
            </span>
            <Icon name="lucide:x" />
          </button>
        </li>
      </ul>
    </div>

    <template v-if="pattern !== null">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-medium">
          Size
        </label>

        <ul class="flex flex-wrap">
          <li
            v-for="({ name, value }) in PRINT_SIZES"
            :key="value">
            <label class="grid place-content-center flex-1 px-4 py-2 has-checked:bg-primary has-checked:text-white border border-foreground-light/10 has-checked:border-primary transition-all duration-300">
              <input
                v-model="size"
                type="radio"
                :value
                class="hidden" />
              <span>
                {{name}}
              </span>
            </label>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-medium">
          Visibility
        </label>

        <ul class="flex flex-wrap">
          <li
            v-for="({ name, value }) in PRINT_VISIBILITY"
            :key="value">
            <label class="grid place-content-center flex-1 px-4 py-2 has-checked:bg-primary has-checked:text-white border border-foreground-light/10 has-checked:border-primary transition-all duration-300">
              <input
                v-model="visibility"
                type="radio"
                :value
                class="hidden" />
              <span>
                {{name}}
              </span>
            </label>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
