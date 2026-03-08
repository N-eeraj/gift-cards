// steps
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


// occasions
export enum Occasion {
  // ANNIVERSARY = "anv",
  BIRTHDAY = "bdy",
  // CHRISTMAS = "xmas",
  // WISHES = "wsh",
};

export const OCCASION_MAP: Record<Occasion, string> = {
  // [Occasion.ANNIVERSARY]: "Anniversary",
  [Occasion.BIRTHDAY]: "Birthday",
  // [Occasion.CHRISTMAS]: "Christmas",
  // [Occasion.WISHES]: "Wishes",
} as const;


// templates
export enum Template {
  GOLDEN_IVORY = "golden-ivory",
  OBSIDIAN_SILVER = "obsidian-silver",
  COSMIC = "cosmic",
  ROYAL_RED = "royal-red",
  ROYAL_BLUE = "royal-blue",
  ROYAL_GREEN = "royal-green",
  STRAWBERRY_MARSHMALLOW = "strawberry-marshmallow",
};

export const TEMPLATES: Record<Occasion, Array<Record<"slug" | "name", string>>> = {
  // [Occasion.ANNIVERSARY]: [
  // ],
  [Occasion.BIRTHDAY]: [
    {
      slug: Template.GOLDEN_IVORY,
      name: "Golden Ivory",
    },
    {
      slug: Template.OBSIDIAN_SILVER,
      name: "Obsidian Silver",
    },
    {
      slug: Template.COSMIC,
      name: "Cosmic",
    },
    {
      slug: Template.ROYAL_RED,
      name: "Royal Red",
    },
    {
      slug: Template.ROYAL_BLUE,
      name: "Royal Blue",
    },
    {
      slug: Template.ROYAL_GREEN,
      name: "Royal Green",
    },
    {
      slug: Template.STRAWBERRY_MARSHMALLOW,
      name: "Strawberry Marshmallow",
    },
  ],
  // [Occasion.CHRISTMAS]: [
  // ],
  // [Occasion.WISHES]: [
  // ],
} as const;
export type TemplateOptions = typeof TEMPLATES[Occasion];
