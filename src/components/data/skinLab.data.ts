import type { Concern, Treatment } from "../../interfaces/skinLab.types.ts";

export const concerns: Concern[] = [
  {
    title: "Hyperpigmentation",
    description:
      "Uneven skin tone, sun damage, dark marks and melasma can affect confidence and overall complexion. We use targeted, medical-grade solutions to improve pigmentation while supporting the skin barrier.",
    treatments: ["Chemical Peels", "Microneedling", "Personalised homecare plan"],
  },
  {
    title: "Acne Scarring",
    description:
      "Post-acne texture, pitting and dark marks can be improved through collagen stimulation and resurfacing. We create structured plans that rebuild the skin from within for smoother, refined texture.",
    treatments: ["Microneedling (CIT)", "Chemical Peels", "Targeted resurfacing"],
  },
  {
    title: "Rosacea",
    description:
      "Rosacea requires a sensitive, clinical approach to reduce redness, inflammation and flare-ups. We focus on calming reactive skin, strengthening the barrier and stabilising triggers.",
    treatments: ["Sensitive-skin Peels", "Barrier repair protocols", "Clinical guidance"],
  },
];

export const treatments: Treatment[] = [
  {
    title: "Chemical Peels",
    priceFrom: "from ££",
    description:
      "A customised blend of medical-grade acids designed to brighten, refine and resurface the skin.",
    bullets: ["Hyperpigmentation", "Acne scarring", "Rosacea-prone skin", "Dullness & texture"],
  },
  {
    title: "Microneedling",
    priceFrom: "from ££",
    description:
      "A collagen-stimulating treatment using fine medical needles to trigger regeneration and repair.",
    bullets: ["Acne scarring", "Pigmentation", "Fine lines", "Enlarged pores"],
  },
];
