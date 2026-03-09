import {
  Occasion,
} from "~/definitions";

export enum Tab {
  DETAILS,
  PRINT,
  // MUSIC,
};

export interface TabItem {
  name: string;
  value: Tab;
}

export const TAB_ITEMS: Array<TabItem> = [
  {
    name: "Details",
    value: Tab.DETAILS,
  },
  {
    name: "Print",
    value: Tab.PRINT,
  },
  // {
  //   name: "Music",
  //   value: Tab.MUSIC,
  // },
] as const;

export enum Pattern {
  BALLOON,
  CAKE,
  CONFETTI,
  FIREWORKS,
  FLOWERS,
  GIFT,
  HEART,
  SPARKLES,
  STAR,
};

export interface PatternDef {
  value: Pattern;
  icon: string;
  occasions: Array<Occasion>;
}

export const PATTERNS: Array<PatternDef> = [
  {
    value: Pattern.CAKE,
    icon: "tabler:cake",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
    ],
  },
  {
    value: Pattern.GIFT,
    icon: "tabler:gift",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
    ],
  },
  {
    value: Pattern.HEART,
    icon: "tabler:heart",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
      Occasion.WISHES,
    ],
  },
  {
    value: Pattern.BALLOON,
    icon: "tabler:balloon",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
      Occasion.WISHES,
    ],
  },
  {
    value: Pattern.CONFETTI,
    icon: "tabler:confetti",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
      Occasion.WISHES,
    ],
  },
  {
    value: Pattern.STAR,
    icon: "tabler:star",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
      Occasion.WISHES,
    ],
  },
  {
    value: Pattern.SPARKLES,
    icon: "tabler:sparkles",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
      Occasion.WISHES,
    ],
  },
  {
    value: Pattern.FLOWERS,
    icon: "tabler:flower",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
      Occasion.WISHES,
    ],
  },
  {
    value: Pattern.FIREWORKS,
    icon: "hugeicons:fireworks",
    occasions: [
      Occasion.ANNIVERSARY,
      Occasion.BIRTHDAY,
      Occasion.WISHES,
    ],
  },
] as const;

export enum PrintSize {
  SM = "text-lg",
  MD = "text-2xl",
  LG = "text-4xl",
};

export const PRINT_SIZES = [
  {
    name: "Small",
    value: PrintSize.SM,
  },
  {
    name: "Medium",
    value: PrintSize.MD,
  },
  {
    name: "Large",
    value: PrintSize.LG,
  },
] as const;

export enum PrintVisibility {
  FAINT = "10",
  LIGHT = "20",
  DARK = "30",
};
export const PRINT_VISIBILITY = [
  {
    name: "Faint",
    value: PrintVisibility.FAINT,
  },
  {
    name: "Light",
    value: PrintVisibility.LIGHT,
  },
  {
    name: "Normal",
    value: PrintVisibility.DARK,
  },
] as const;

export const MAX_MESSAGE_LENGTH = 50 as const;
