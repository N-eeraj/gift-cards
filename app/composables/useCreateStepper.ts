import {
  CreationStep,
  CREATION_STEP_ORDER,
} from "~/definitions";

const TRANSLATE_TRANSITIONS = {
  forward: {
    enter: "translate-x-full",
    leave: "-translate-x-full",
  },
  backward: {
    enter: "-translate-x-full",
    leave: "translate-x-full",
  },
} as const;
type Direction = keyof typeof TRANSLATE_TRANSITIONS;

export default function useCreateStepper() {
  const route = useRoute();
  const router = useRouter();

  function setStep(step: CreationStep) {
    router.replace({
      query: {
        ...route.query,
        step,
      }
    });
  }

  const currentStep = computed<CreationStep>(() => {
    const query = String(route.query.step ?? "").toLowerCase();
    const isInvalidQuery = !Object.values(CreationStep)
      .includes(query as CreationStep);

    if (!query || isInvalidQuery) {
      setStep(CreationStep.OCCASION);
      return CreationStep.OCCASION;
    }
    return query as CreationStep;
  });
  const currentStepIndex = computed(() => CREATION_STEP_ORDER.indexOf(currentStep.value));

  const transitionClass = ref<typeof TRANSLATE_TRANSITIONS[Direction]>(TRANSLATE_TRANSITIONS.forward);

  watch(() => currentStepIndex.value, (value, prevValue) => {
    const direction: Direction = value > prevValue
    ? "forward"
    : "backward";
    transitionClass.value = TRANSLATE_TRANSITIONS[direction];
  });

  return {
    currentStep,
    currentStepIndex,
    transitionClass,
    setStep,
  };
}
