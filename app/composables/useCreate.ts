import {
  CreationStep,
  CREATION_STEP_ORDER,
  Occasion,
} from "~/definitions";

export default function useCreate() {
  const route = useRoute();
  const router = useRouter();

  function setStep(step: CreationStep, data: Record<string, string | undefined> = {}) {
    router.push({
      query: {
        ...route.query,
        ...data,
        step,
      }
    });
  }

  const currentStep = computed<CreationStep>(() => {
    const query = String(route.query.step ?? "").toLowerCase();
    const isInvalidQuery = !Object.values(CreationStep)
      .includes(query as CreationStep);

    if (
      !query // no query
      || isInvalidQuery // invalid query
      || !selectedOccasion.value // occasion not selected
    ) {
      setStep(CreationStep.OCCASION, {
        occasion: undefined,
        template: undefined,
      });
      return CreationStep.OCCASION;
    }
    return query as CreationStep;
  });

  const currentStepIndex = computed(() => CREATION_STEP_ORDER.indexOf(currentStep.value));

  const selectedOccasion = computed<Occasion | null>(() => {
    const query = String(route.query.occasion ?? "").toLowerCase();
    const isInvalidQuery = !Object.values(Occasion)
      .includes(query as Occasion);

    if (isInvalidQuery) {
      return null;
    }
    return query as Occasion;
  });

  return {
    currentStep,
    currentStepIndex,
    selectedOccasion,
    setStep,
  };
}
