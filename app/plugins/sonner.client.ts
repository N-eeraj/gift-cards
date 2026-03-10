import { Toaster, toast } from "vue-sonner";
import { defineNuxtPlugin } from "#app";
import "vue-sonner/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Toaster", Toaster);

  return {
    provide: {
      toast,
    },
  };
});
