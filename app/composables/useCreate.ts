import {
  CreationStep,
  CREATION_STEP_ORDER,
  Occasion,
  Template,
  TEMPLATES,
  type TemplateOptions,
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

    // basic + template guard
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

    // customize guard
    if (!selectedTemplate.value) {
      setStep(CreationStep.TEMPLATE, {
        template: undefined,
      });
      return CreationStep.TEMPLATE;
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

  const templateOptions = computed<TemplateOptions | null>(() => TEMPLATES[selectedOccasion.value as Occasion]);
  const selectedTemplate = computed<Template | null>(() => {
    if (!templateOptions.value) return null;
    const query = String(route.query.template ?? "").toLowerCase();
    const isInvalidQuery = !templateOptions.value.find(({ slug }) => slug === query);

    if (isInvalidQuery) {
      return null;
    }
    return query as Template;
  });

  return {
    currentStep,
    currentStepIndex,
    selectedOccasion,
    selectedTemplate,
    setStep,
  };
}
