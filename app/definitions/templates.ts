export enum Template {
  GOLDEN_IVORY = "golden-ivory",
  OBSIDIAN_SILVER = "obsidian-silver",
  COSMIC = "cosmic",
  ROYAL_RED = "royal-red",
  ROYAL_BLUE = "royal-blue",
  ROYAL_GREEN = "royal-green",
  IMPERIAL_PURPLE = "imperial-purple",
  FROZEN = "frozen",
  STRAWBERRY_MARSHMALLOW = "strawberry-marshmallow",
  EMERALD_BREEZE = "emerald-breeze",
  CELESTIAL_SKY = "celestial-sky",
  CRIMSON_GLOW = "crimson-glow",
  BUBBLEGUM = "bubblegum",
  NEON_GREEN = "neon-green",
};

export interface TemplateDef {
  slug: string;
  name: string;
  theme: {
    background: {
      from: string;
      to: string;
    };
    foreground: {
      from: string;
      to: string;
      text: string;
    };
  };
}

export const GOLDEN_IVORY_TEMPLATE = {
  slug: Template.GOLDEN_IVORY,
  name: "Golden Ivory",
  theme: {
    background: {
      from: "from-white",
      to: "to-yellow-50",
    },
    foreground: {
      from: "from-amber-400",
      to: "to-yellow-600",
      text: "text-yellow-600",
    },
  },
} as const;

export const OBSIDIAN_SILVER_TEMPLATE = {
  slug: Template.OBSIDIAN_SILVER,
  name: "Obsidian Silver",
  theme: {
    background: {
      from: "from-black",
      to: "to-gray-800",
    },
    foreground: {
      from: "from-gray-100",
      to: "to-gray-400",
      text: "text-gray-300",
    },
  },
} as const;

export const COSMIC_TEMPLATE = {
  slug: Template.COSMIC,
  name: "Cosmic",
  theme: {
    background: {
      from: "from-black",
      to: "to-indigo-950 to-[70%]",
    },
    foreground: {
      from: "from-cyan-400",
      to: "to-fuchsia-300",
      text: "text-cyan-200",
    },
  },
} as const;

export const ROYAL_RED_TEMPLATE = {
  slug: Template.ROYAL_RED,
  name: "Royal Red",
  theme: {
    background: {
      from: "from-red-700",
      to: "to-orange-950",
    },
    foreground: {
      from: "from-amber-400",
      to: "to-yellow-600",
      text: "text-yellow-400",
    },
  },
} as const;

export const ROYAL_BLUE_TEMPLATE = {
  slug: Template.ROYAL_BLUE,
  name: "Royal Blue",
  theme: {
    background: {
      from: "from-blue-700",
      to: "to-indigo-950",
    },
    foreground: {
      from: "from-amber-400",
      to: "to-yellow-600",
      text: "text-yellow-400",
    },
  },
} as const;

export const ROYAL_GREEN_TEMPLATE = {
  slug: Template.ROYAL_GREEN,
  name: "Royal Green",
  theme: {
    background: {
      from: "from-teal-700",
      to: "to-green-950",
    },
    foreground: {
      from: "from-amber-400",
      to: "to-yellow-600",
      text: "text-yellow-400",
    },
  },
} as const;

export const IMPERIAL_PURPLE_TEMPLATE = {
  slug: Template.IMPERIAL_PURPLE,
  name: "Imperial Purple",
  theme: {
    background: {
      from: "from-purple-700",
      to: "to-indigo-950",
    },
    foreground: {
      from: "from-amber-400",
      to: "to-yellow-600",
      text: "text-yellow-400",
    },
  },
} as const;

export const FROZEN_TEMPLATE = {
  slug: Template.FROZEN,
  name: "Frozen",
  theme: {
    background: {
      from: "from-sky-950",
      to: "to-blue-950",
    },
    foreground: {
      from: "from-cyan-300",
      to: "to-sky-200",
      text: "text-sky-200",
    },
  },
} as const;

export const STRAWBERRY_MARSHMALLOW_TEMPLATE = {
  slug: Template.STRAWBERRY_MARSHMALLOW,
  name: "Strawberry Marshmallow",
  theme: {
    background: {
      from: "from-pink-50",
      to: "to-pink-200",
    },
    foreground: {
      from: "from-rose-500",
      to: "to-rose-300",
      text: "text-rose-500",
    },
  },
} as const;

export const EMERALD_BREEZE_TEMPLATE = {
  slug: Template.EMERALD_BREEZE,
  name: "Emerald Breeze",
  theme: {
    background: {
      from: "from-teal-300",
      to: "to-emerald-800",
    },
    foreground: {
      from: "from-teal-50",
      to: "to-emerald-200",
      text: "text-emerald-200",
    },
  },
} as const;

export const CELESTIAL_SKY_TEMPLATE = {
  slug: Template.CELESTIAL_SKY,
  name: "Celestial Sky",
  theme: {
    background: {
      from: "from-sky-300",
      to: "to-indigo-800",
    },
    foreground: {
      from: "from-sky-50",
      to: "to-indigo-200",
      text: "text-indigo-200",
    },
  },
} as const;

export const CRIMSON_GLOW_TEMPLATE = {
  slug: Template.CRIMSON_GLOW,
  name: "Crimson Glow",
  theme: {
    background: {
      from: "from-rose-400",
      to: "to-red-800",
    },
    foreground: {
      from: "from-rose-50",
      to: "to-red-200",
      text: "text-red-200",
    },
  },
} as const;

export const BUBBLEGUM_TEMPLATE = {
  slug: Template.BUBBLEGUM,
  name: "Bubblegum",
  theme: {
    background: {
      from: "from-pink-400",
      to: "to-rose-600",
    },
    foreground: {
      from: "from-pink-50",
      to: "to-rose-200",
      text: "text-rose-200",
    },
  },
} as const;

export const NEON_GREEN_TEMPLATE = {
  slug: Template.NEON_GREEN,
  name: "Neon Green",
  theme: {
    background: {
      from: "from-black",
      to: "to-gray-900",
    },
    foreground: {
      from: "from-lime-600",
      to: "to-emerald-500",
      text: "text-lime-500",
    },
  },
} as const;
