import { aiTerms } from './dictionaries/ai';
import { businessTerms } from './dictionaries/business';
import { marketingTerms } from './dictionaries/marketing';
import { legalTerms } from './dictionaries/legal';
import { salesTerms } from './dictionaries/sales';
import { cryptoTerms } from './dictionaries/crypto';
import { devTerms } from './dictionaries/dev';
import { ecommerceTerms } from './dictionaries/ecommerce';
import { startupTerms } from './dictionaries/startup';
import { financeTerms } from './dictionaries/finance';

export interface Term {
  name: string;
  definition: string;
}

export const dictionaries: Record<string, Term[]> = {
  'ai-dictionary': aiTerms,
  'business-dictionary': businessTerms,
  'marketing-dictionary': marketingTerms,
  'legal-dictionary': legalTerms,
  'sales-dictionary': salesTerms,
  'crypto-dictionary': cryptoTerms,
  'dev-dictionary': devTerms,
  'ecommerce-dictionary': ecommerceTerms,
  'startup-dictionary': startupTerms,
  'finance-dictionary': financeTerms,
};

export const dictionaryMetadata: Record<string, { title: string, description: string }> = {
  'ai-dictionary': { title: 'AI Dictionary', description: 'Essential Artificial Intelligence terms and definitions.' },
  'business-dictionary': { title: 'Business Dictionary', description: 'Core business and corporate terminology.' },
  'marketing-dictionary': { title: 'Marketing Dictionary', description: 'Terms related to growth, SEO, and advertising.' },
  'legal-dictionary': { title: 'Legal Dictionary', description: 'Important legal terms for founders and businesses.' },
  'sales-dictionary': { title: 'Sales Dictionary', description: 'Terminology used in closing deals and managing pipelines.' },
  'crypto-dictionary': { title: 'Crypto Dictionary', description: 'Web3, blockchain, and cryptocurrency terms.' },
  'dev-dictionary': { title: 'Developer Dictionary', description: 'Software engineering and programming terms.' },
  'ecommerce-dictionary': { title: 'E-Commerce Dictionary', description: 'Terms related to online stores and retail.' },
  'startup-dictionary': { title: 'Startup Dictionary', description: 'Glossary for founders, venture capital, and startups.' },
  'finance-dictionary': { title: 'Finance Dictionary', description: 'Accounting, investing, and financial metrics.' },
};

export function getDictionaryTerms(slug: string): Term[] {
  return dictionaries[slug] || [];
}
