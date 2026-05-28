export interface Product {
  id: string;
  name: string;
  category: string;
  brand?: string;
  price: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  image: string;
  shades?: { name: string; hex: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  source: string;
}
