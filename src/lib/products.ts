import productsData from '../data/products.json';
import type { Product } from '../types/product';

export const products = productsData as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(amount: number, currency = 'AMD'): string {
  const formatted = new Intl.NumberFormat('ru-RU').format(amount);
  return currency === 'AMD' ? `${formatted} ֏` : `${formatted} ${currency}`;
}

export function assetUrl(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
