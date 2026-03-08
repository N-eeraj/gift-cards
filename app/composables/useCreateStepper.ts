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
  const {
    currentStep,
    currentStepIndex,
    setStep,
  } = useCreate();

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
