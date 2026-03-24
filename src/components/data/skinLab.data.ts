import type { Concern, Treatment } from "../../interfaces/skinLab.types.ts";

export const concerns: Concern[] = [
  {
    title: "Hyperpigmentation",
    description:
      "Uneven skin tone, sun damage, dark marks and melasma can affect confidence and overall complexion. We use targeted, medical grade solutions to improve pigmentation while supporting the skin barrier.",
    treatments: [
      "Chemical Peels",
      "Microneedling",
      "Personalised homecare plan",
    ],
  },
  {
    title: "Acne Scarring",
    description:
      "Post acne texture, pitting and dark marks can be improved through collagen stimulation and resurfacing. We create structured plans that rebuild the skin from within for smoother, refined texture.",
    treatments: ["Microneedling", "Chemical Peels", "Targeted resurfacing"],
  },
  {
    title: "Rosacea",
    description:
      "Rosacea requires a sensitive, clinical approach to reduce redness, inflammation and flare ups. We focus on calming reactive skin, strengthening the barrier and stabilising triggers.",
    treatments: [
      "Sensitive skin Peels",
      "Barrier repair protocols",
      "Clinical guidance",
    ],
  },
];

export const treatments: Treatment[] = [
  {
    title: "Consultation & Skin Analysis",
    description:
      "Your skin journey begins with a comprehensive consultation where we assess your skin concerns, medical history and goals. This allows us to create a safe, personalised treatment plan.",
    price: { label: "£50", note: "Redeemable against treatment" },
    isConsultation: true,
  },
  {
    title: "Targeted Skin Transformation Programme",
    description:
      "Our most advanced programme designed to treat hyperpigmentation, acne scarring and uneven skin texture through a combination of medical microneedling and chemical peels.",
    price: { label: "£1,450" },
    sections: [
      {
        heading: "Includes",
        items: [
          { name: "4 microneedling treatments", price: "" },
          { name: "4 medical chemical peels", price: "" },
          { name: "Personalised treatment planning", price: "" },
        ],
      },
    ],
  },
  {
    title: "Core Treatments",
    sections: [
      {
        heading: "",
        items: [
          {
            name: "Essential Skin Reset",
            details:
              "A barrier repair treatment designed to calm inflammation and restore skin balance.",
            price: "£150",
          },
          {
            name: "Medical Chemical Peel",
            details:
              "A personalised peel designed to improve pigmentation, clarity and overall skin tone.",
            price: "£200",
          },
          {
            name: "Medical Microneedling",
            details:
              "A collagen stimulating treatment that improves acne scarring, skin texture and overall skin quality.",
            price: "£250",
          },
        ],
      },
    ],
  },
  {
    title: "Skin Programmes",
    sections: [
      {
        heading: "",
        items: [
          {
            name: "Skin Renewal Programme",
            details:
              "For mild hyperpigmentation and uneven tone.\nIncludes:\n· 4 medical chemical peels\n· Treatments every 3–4 weeks",
            price: "£660",
          },
          {
            name: "Skin Repair Programme",
            details:
              "For acne scarring and skin texture.\nIncludes:\n· 3 microneedling treatments\n· Treatments every 4–6 weeks",
            price: "£690",
          },
          {
            name: "Intensive Skin Remodelling Programme",
            details:
              "For deeper acne scarring and more advanced concerns.\nIncludes:\n· 4 microneedling treatments\n· Treatments every 4–6 weeks",
            price: "£900",
          },
        ],
      },
    ],
  },
  {
    title: "Rosacea Programmes",
    sections: [
      {
        heading: "",
        items: [
          {
            name: "Skin Barrier Restoration",
            details:
              "Designed to calm inflammation and strengthen rosacea prone skin.\nIncludes:\n· 4 Essential Skin Reset treatments",
            price: "£520",
          },
          {
            name: "Advanced Rosacea Programme",
            details:
              "For persistent redness and reactive skin.\nIncludes:\n · 4 Essential Skin Reset treatments \n· 2 targeted clinical treatments",
            price: "£820",
          },
        ],
      },
    ],
  },
  {
    title: "Maintenance Treatments",
    description:
      "Once your skin goals are achieved, maintenance treatments help preserve results and support long term skin health.",
    sections: [
      {
        heading: "",
        items: [
          { name: "Chemical Peel", price: "£200" },
          { name: "Microneedling", price: "£250" },
          { name: "Essential Skin Reset", price: "£150" },
        ],
      },
    ],
  },
];
