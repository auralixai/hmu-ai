export interface Term {
  name: string;
  definition: string;
}

export const dictionaries: Record<string, Term[]> = {
  'ai-dictionary': [
    { name: 'AGI', definition: 'A hypothetical form of AI that can understand, learn, and adapt across essentially any intellectual task a human can tackle.' },
    { name: 'AI', definition: 'Any system that performs tasks we associate with human intelligence by learning from data rather than being explicitly hard‑coded.' },
    { name: 'Agent', definition: 'Software that perceives an environment (via inputs or tools), chooses actions to pursue a goal, and executes those actions autonomously.' },
    { name: 'LLM', definition: 'Large Language Model. A neural network trained on massive text corpora to predict the next token and generate human-like text.' },
    { name: 'RAG', definition: 'Retrieval-Augmented Generation. A pattern where the system fetches relevant documents to ground the LLM response in factual data.' },
  ],
  'business-dictionary': [
    { name: 'ROI', definition: 'Return on Investment. A performance measure used to evaluate the efficiency or profitability of an investment.' },
    { name: 'KPI', definition: 'Key Performance Indicator. A quantifiable measure used to evaluate the success of an organization or employee.' },
    { name: 'B2B', definition: 'Business to Business. A form of transaction between businesses, such as one involving a manufacturer and wholesaler.' },
  ],
  'marketing-dictionary': [
    { name: 'SEO', definition: 'Search Engine Optimization. The practice of increasing the quantity and quality of traffic to your website through organic search engine results.' },
    { name: 'CTR', definition: 'Click-Through Rate. The ratio of users who click on a specific link to the number of total users who view a page, email, or advertisement.' },
    { name: 'Funnel', definition: 'A marketing funnel describes your customer’s journey with you, from the initial stages when someone learns about your business, to the purchasing stage.' },
  ],
  'legal-dictionary': [
    { name: 'NDA', definition: 'Non-Disclosure Agreement. A legally binding contract establishing a confidential relationship between parties.' },
    { name: 'IP', definition: 'Intellectual Property. A category of property that includes intangible creations of the human intellect.' },
    { name: 'LLC', definition: 'Limited Liability Company. A business structure in the US that protects its owners from personal responsibility for its debts or liabilities.' },
  ],
  'sales-dictionary': [
    { name: 'Lead', definition: 'A person or business who has indicated interest in your company\'s product or service in some way, shape, or form.' },
    { name: 'Pipeline', definition: 'A visual representation of sales prospects and where they are in the purchasing process.' },
    { name: 'Quota', definition: 'A sales goal or target assigned to a sales representative or team for a specific period of time.' },
  ],
  'crypto-dictionary': [
    { name: 'Wallet', definition: 'A digital tool that allows users to store and manage their cryptocurrency and interact with blockchain networks.' },
    { name: 'DeFi', definition: 'Decentralized Finance. Financial services using smart contracts on blockchains without central intermediaries like banks.' },
    { name: 'HODL', definition: 'Hold On for Dear Life. A strategy in crypto investing where one holds their assets instead of selling them, regardless of market volatility.' },
  ],
  'dev-dictionary': [
    { name: 'API', definition: 'Application Programming Interface. A set of rules that lets programs talk to each other.' },
    { name: 'CI/CD', definition: 'Continuous Integration / Continuous Deployment. A method to frequently deliver apps to customers by introducing automation into the stages of app development.' },
    { name: 'Frontend', definition: 'The part of a website or app that users interact with directly, built with HTML, CSS, and JavaScript.' },
  ],
  'ecommerce-dictionary': [
    { name: 'ROAS', definition: 'Return on Ad Spend. A marketing metric that measures the efficacy of a digital advertising campaign.' },
    { name: 'FBA', definition: 'Fulfillment by Amazon. A service that allows businesses to outsource order fulfillment to Amazon.' },
    { name: 'Cart Abandonment', definition: 'When a potential customer starts a checkout process for an online order but drops out before completing the purchase.' },
  ],
  'startup-dictionary': [
    { name: 'MVP', definition: 'Minimum Viable Product. A version of a product with just enough features to be usable by early customers who can then provide feedback.' },
    { name: 'MRR', definition: 'Monthly Recurring Revenue. The predictable and recurring revenue components of your subscription business.' },
    { name: 'Seed Round', definition: 'The initial capital raised by a startup to prove its concept and set up operations.' },
  ],
  'finance-dictionary': [
    { name: 'Cash Flow', definition: 'The net amount of cash and cash-equivalents being transferred into and out of a business.' },
    { name: 'EBITDA', definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of a company\'s overall financial performance.' },
    { name: 'Arbitrage', definition: 'The simultaneous purchase and sale of an asset to profit from an imbalance in the price.' },
  ],
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
