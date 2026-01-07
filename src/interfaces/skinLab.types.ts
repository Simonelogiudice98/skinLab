export interface Concern  {
  title: string;
  description: string;
  treatments: string[];
};

export interface Treatment {
  title: string;
  image?: string;
  priceFrom: string;
  description: string;
  bullets: string[];
};

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