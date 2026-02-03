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

export type Treatment = {
  title: string;
  subtitle?: string;        
  description: string;
  bullets?: string[];
  price?: Price;

  sections?: Array<{
    heading: string;         
    items: TreatmentPackage[];
  }>;

  note?: string;         
  badge?: React.ElementType;        
  image?: string; 
  imageFit?: "cover" | "contain";
  imagePosition?: string;        
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