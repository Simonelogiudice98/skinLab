export interface Concern  {
  title: string;
  description: string;
  treatments: string[];
};

export type Price = {
  label: string;   
  note?: string;   
};

export type TreatmentPackage = {
  name: string;    
  details?: string; 
  price: string;   
};

export type Bullet = {
  bold?: string;
  text: string;
};

export interface Treatment {
  title: string;
  description?: string;
  price?: { label?: string; note?: string };
  bullets?: { bold?: string; text: string }[];
  sections?: { heading: string; items: { name: string; details?: string; price: string }[] }[];
  image?: string;
  badge?: React.ElementType;
  isConsultation?: boolean;
}

export interface SmartImageProps  {
 avif?: string;
  webp?: string;
  src: string;       
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};