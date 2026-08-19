import siteData from '../data/site.json';

export const site = siteData;

export const commerceEnabled = import.meta.env.PUBLIC_COMMERCE_ENABLED === 'true';
