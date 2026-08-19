export type ProductCta = 'request_quote' | 'add_to_cart';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  composition: string[];
  image: string;
  partnerPrice: number;
  currency: string;
  tags: string[];
  available: boolean;
  cta: ProductCta;
}
