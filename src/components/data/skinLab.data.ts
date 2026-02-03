import type { Concern, Treatment } from "../../interfaces/skinLab.types.ts";
import resetImg from "../../assets/images/treatments/essential-reset.png";
import peelsImg from "../../assets/images/treatments/peels.jpg";
import microImg from "../../assets/images/treatments/microneedling.png";
import consultationImg from "../../assets/images/treatments/consultation.png";
import comboImg from "../../assets/images/treatments/combination-treatment.png";
import rosaceaImg from "../../assets/images/treatments/rosacea.png";
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
    badge:SpaOutlinedIcon,
    title: "Essential Skin Reset",
    description:
      "A calming, clinical facial designed to restore balance and strengthen the skin barrier.",
    bullets: [
      "Deep cleanse, gentle exfoliation and skin conditioning",
      "Tailored to sensitive, reactive and compromised skin",
      "Ideal before advanced treatments or as maintenance",
    ],
    price: { label: "£150" },
    image: resetImg,
  },

  {
    badge: ScienceOutlinedIcon,
    title: "Medical Chemical Peels",
    description:
      "Targeting hyperpigmentation, uneven tone and post-acne marks.\n\nOur medical-grade peels are carefully selected and introduced progressively to correct pigmentation and improve skin clarity while prioritising skin safety.",
    price: {
      label: "From £180",
      note: "(Final peel type confirmed following consultation)",
    },
    image: peelsImg,
    sections: [
      {
        heading: "Chemical Peel Courses",
        items: [
          { name: "Skin Renewal Peel", details: "4 × superficial medical peels", price: "£680" },
          { name: "Advanced Correction Peel", details: "6 × personalised medical peels", price: "£1,080" },
        ],
      },
    ],
  },

  {
    badge: AutoFixHighOutlinedIcon,
    title: "Medical Microneedling",
    description:
      "For acne scarring, texture and collagen stimulation.\n\nMedical microneedling works by stimulating collagen production and repairing skin from within, improving texture and overall skin quality.",
    price: { label: "£250 per session" },
    image: microImg,
    imageFit: "contain",
    sections: [
      {
        heading: "Microneedling Courses",
        items: [
          { name: "Skin Repair Programme", details: "3 × sessions", price: "£690" },
          { name: "Intensive Skin Remodelling Programme", details: "4 × sessions", price: "£920" },
        ],
      },
    ],
  },

  {
    badge:LayersOutlinedIcon,
    title: "Combination Treatment Programmes",
    description:
      "Our most effective approach for pigmentation and acne scarring.\n\nBy combining microneedling and chemical peels, we treat both surface pigmentation and deeper skin damage for enhanced, long-lasting results.",
    price: { label: "£1,350 – £1,650", note: "Consultation required" },
    image: comboImg,
  },

  {
    badge:LocalFloristOutlinedIcon,
    title: "Rosacea-Specific Programmes",
    description: "Calming, barrier-focused and medically guided.",
    image:rosaceaImg,
    sections: [
      {
        heading: "",
        items: [
          { name: "Rosacea Skin Stabilisation Programme", details: "4 × Essential Skin Reset", price: "£520" },
          {
            name: "Advanced Rosacea Skin Conditioning Programme",
            details: "Combination skin conditioning and gentle clinical treatments",
            price: "£780",
          },
          { name: "Rosacea Maintenance Treatment", price: "£140" },
        ],
      },
    ],
  },

  {
    badge: MedicalServicesOutlinedIcon,
    title: "Consultation",
    description: "All treatments require a consultation prior to treatment.",
    price: { label: "£50", note: "(Redeemable against any treatment or package)" },
    image:consultationImg,
  },
];
