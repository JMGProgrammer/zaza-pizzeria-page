export type ProductCategory =
  "clasicas" | "especiales" | "acompanamientos" | "bebidas";

export interface MenuItem {
  id: string;
  name: string;
  category: ProductCategory;
  description?: string;
  price: number;
  ingredients?: string[];
  image?: string;
  isFeatured?: boolean;
  badge?: string;
}

export interface BusinessSchedule {
  days: string;
  hours: string;
  opens: string;
  closes: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  proposition: string;
  location: {
    city: string;
    department: string;
    country: string;
    policy: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string;
    whatsappUrl: string;
    defaultWhatsappMessage: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  schedule: BusinessSchedule;
  delivery: {
    coverage: string;
    modalities: string[];
    paymentMethods: string[];
  };
}
