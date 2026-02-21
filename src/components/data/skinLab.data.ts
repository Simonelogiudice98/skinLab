import type { Concern, Treatment } from "../../interfaces/skinLab.types.ts";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined"; // conditioning / reset
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"; // peels
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined"; // microneedling
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"; // combo programmes
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined"; // rosacea / calming
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined"; // consultation


export const concerns: Concern[] = [
  {
    title: "Hyperpigmentation",
    description:
      "Uneven skin tone, sun damage, dark marks and melasma can affect confidence and overall complexion. We use targeted, medical grade solutions to improve pigmentation while supporting the skin barrier.",
    treatments: ["Chemical Peels", "Microneedling", "Personalised homecare plan"],
  },
  {
    title: "Acne Scarring",
    description:
      "Post acne texture, pitting and dark marks can be improved through collagen stimulation and resurfacing. We create structured plans that rebuild the skin from within for smoother, refined texture.",
    treatments: ["Microneedling (CIT)", "Chemical Peels", "Targeted resurfacing"],
  },
  {
    title: "Rosacea",
    description:
      "Rosacea requires a sensitive, clinical approach to reduce redness, inflammation and flare ups. We focus on calming reactive skin, strengthening the barrier and stabilising triggers.",
    treatments: ["Sensitive skin Peels", "Barrier repair protocols", "Clinical guidance"],
  },
];


export const treatments: Treatment[] = [
    {
    badge: MedicalServicesOutlinedIcon,
    title: "Consultation & Skin Analysis",
    description: "All treatments begin with a comprehensive consultation and skin analysis. This allows us to fully understand your skin concerns, history and goals, ensuring treatments are safe, suitable and effective.",
    price: { label: "£50", note: "(Redeemable against any treatment or package)" },
  },
    {
    badge:SpaOutlinedIcon,
    title: "Essential Skin Reset",
    description:
      "A clinically led skin conditioning treatment designed to restore balance, strengthen the skin barrier and improve overall skin health. Ideal as a first treatment, between advanced procedures, or as ongoing maintenance.",
    bullets: [
      "Best for : sensitive skin, rosacea prone skin, skin preparation and maintenance",
    ],
    price: { label: "£150" },
  },
  {
    badge: ScienceOutlinedIcon,
    title: "Medical Chemical Peels",
    description:
      "Medical grade chemical peels tailored to your skin type and concerns. Treatments are introduced gradually to improve pigmentation, clarity and texture while prioritising skin safety.",
    price: {
      label: "From £180",
    },
    sections: [
      {
        heading: "Peel Courses",
        items: [
          { name: "Skin Renewal Peel", details: "4 treatments to improve tone and clarity", price: "£680" },
          { name: "Advanced Correction Peel", details: "6 treatments for stubborn pigmentation and uneven texture", price: "£1,080" },
        ],
      },
    ],
  },

  {
    badge: AutoFixHighOutlinedIcon,
    title: "Medical Microneedling",
    description:
      "A collagen stimulating treatment designed to improve acne scarring, skin texture and overall skin quality.",
      price: { label: "£250 per session" },
      sections: [
      {
        heading: "Microneedling Courses",
        items: [
          { name: "Skin Repair Programme", details: "3 treatments for mild to moderate scarring", price: "£690" },
          { name: "Intensive Skin Remodelling Programme", details: "4 treatments for deeper scarring and texture concerns", price: "£920" },
        ],
      },
    ],
  },

  {
    badge:LayersOutlinedIcon,
    title: "Combination Treatment Programmes",
    description:
      "Our most effective approach for treating pigmentation and acne scarring. A personalised combination of chemical peels and microneedling to address both surface and deeper skin concerns.",
    price: { label: "£1,350 – £1,650", note: "Consultation required" },
  },

  {
    badge:LocalFloristOutlinedIcon,
    title: "Rosacea Focused Treatments",
    description: "Gentle, barrier focused treatments designed to calm inflammation, strengthen the skin barrier and support long term rosacea management.",
    sections: [
      {
        heading: "",
        items: [
          { name: "Rosacea Skin Stabilisation Programme", details: "4 calming Essential Skin Reset treatments", price: "£520" },
          {
            name: "Advanced Rosacea Skin Conditioning Programme",
            details: "A combination of skin conditioning and gentle clinical treatments (only if suitable)",
            price: "£780",
          },
          { name: "Rosacea Maintenance Treatment",
            details:"Ongoing care to support skin comfort and stability",
            price: "£140" },
        ],
      },
    ],
  },
];
