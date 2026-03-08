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
  CHRISTMAS = "xmas",
  WISHES = "wsh",
};

export const OCCASION_MAP: Record<Occasion, string> = {
  [Occasion.ANNIVERSARY]: "Anniversary",
  [Occasion.BIRTHDAY]: "Birthday",
  [Occasion.CHRISTMAS]: "Christmas",
  [Occasion.WISHES]: "Wishes",
} as const;
