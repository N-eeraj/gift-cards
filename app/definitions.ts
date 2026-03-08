export enum CreationStep {
  OCCASION = "occasion",
  TEMPLATE = "template",
  CUSTOMIZE = "customize",
  PREVIEW = "preview",
};

export const CREATION_STEP_ORDER = [
  CreationStep.OCCASION,
  CreationStep.TEMPLATE,
  CreationStep.CUSTOMIZE,
  CreationStep.PREVIEW,
] as const;

export enum Occasion {
  ANNIVERSARY = "anv",
  BIRTHDAY = "bdy",
  WISHES = "wsh",
};
