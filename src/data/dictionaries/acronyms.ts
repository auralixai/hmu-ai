import { Term } from '../dictionaries';

export const acronymsTerms: Term[] = [
  {
    name: 'HMU',
    definition: 'Hit Me Up. A common acronym used to invite someone to contact you or start a conversation.',
    slug: 'hmu',
    seoData: {
      detailedDescription: 'HMU stands for "Hit Me Up." While it originated in informal digital communication, it has become a shorthand for accessibility and responsiveness. In the business world, "hitting someone up" implies a low-friction way to initiate a project, request information, or collaborate.',
      examples: [
        '"HMU when you\'re ready to scale your ad spend."',
        '"Need a new landing page? Just HMU."'
      ],
      relatedTerms: ['ASAP', 'CTA', 'Reach Out']
    }
  },
  {
    name: 'ACV',
    definition: 'Annual Contract Value. A metric that represents the average annual revenue value of a single customer contract.',
    slug: 'acv',
    seoData: {
      detailedDescription: 'ACV is a key sales and customer success metric, particularly for subscription-based businesses (SaaS). It measures the average revenue generated from a single customer contract over a 12-month period. Unlike ARR, which looks at the total revenue across all customers, ACV focuses on the value of individual accounts.',
      examples: [
        'Calculating that a $36,000 three-year contract has an ACV of $12,000',
        'Comparing ACVs across different sales territories to identify high-performing regions',
        'Setting sales quotas based on the expected ACV of new target accounts'
      ],
      relatedTerms: ['ARR', 'TCV', 'LTV']
    }
  },
  {
    name: 'AE',
    definition: 'Account Executive. A role in sales responsible for closing deals and managing relationships with primary clients.',
    slug: 'ae',
    seoData: {
      detailedDescription: 'An Account Executive (AE) is a primary sales role focused on converting qualified leads into paying customers. Unlike Sales Development Representatives (SDRs) who handle initial outreach and lead qualification, AEs take over the relationship once a lead is ready to see a demo or discuss pricing.',
      examples: [
        'An AE leading a product demonstration for a high-potential corporate lead',
        'Negotiating contract terms and closing a multi-year software licensing deal',
        'Collaborating with SDRs to ensure a smooth hand-off of qualified prospects'
      ],
      relatedTerms: ['SDR', 'CRM', 'Quota']
    }
  },
  {
    name: 'AI',
    definition: 'Artificial Intelligence. The simulation of human intelligence processes by machines, especially computer systems.',
    slug: 'ai',
    seoData: {
      detailedDescription: 'Artificial Intelligence (AI) refers to the development of computer systems capable of performing tasks that typically require human intelligence. This includes learning (acquiring information and rules for using it), reasoning (using rules to reach approximate or definite conclusions), and self-correction.',
      examples: [
        'A customer service chatbot using NLP to understand and resolve user queries',
        'An image recognition system identifying objects or faces in real-time video',
        'An autonomous vehicle using AI to navigate complex traffic environments'
      ],
      relatedTerms: ['ML', 'LLM', 'AGI']
    }
  },
  {
    name: 'AGI',
    definition: 'Artificial General Intelligence. A type of AI that matches or exceeds human intelligence across a broad range of cognitive tasks.',
    slug: 'agi',
    seoData: {
      detailedDescription: 'Artificial General Intelligence (AGI) is the theoretical next step in AI development, representing a machine that can understand, learn, and apply knowledge across any intellectual task a human can perform. While current "Narrow AI" excels at specific tasks, AGI would possess the ability to transfer learning between disparate domains.',
      examples: [
        'A single AI system that can write a novel, perform surgery, and design a rocket engine with human-level proficiency',
        'A machine capable of philosophical debate and creative problem solving in entirely unfamiliar situations',
        'An autonomous system that can adapt its cognitive abilities to master any new skill independently'
      ],
      relatedTerms: ['AI', 'ASI', 'Turing Test']
    }
  },
  {
    name: 'AML',
    definition: 'Anti-Money Laundering. A set of laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income.',
    slug: 'aml',
    seoData: {
      detailedDescription: 'Anti-Money Laundering (AML) refers to the frameworks used by financial institutions and regulators to detect and report suspicious activity. These laws require companies (especially in fintech and crypto) to verify customer identities (KYC), monitor transactions for red flags, and report large or suspicious movements.',
      examples: [
        'A cryptocurrency exchange flagging a series of rapid, high-value transfers to a high-risk jurisdiction',
        'A bank requiring detailed documentation for a large international wire transfer',
        'Implementing automated software to scan customer names against global sanctions lists'
      ],
      relatedTerms: ['KYC', 'FinTech', 'Compliance']
    }
  },
  {
    name: 'API',
    definition: 'Application Programming Interface. A set of rules that allows different software applications to communicate with each other.',
    slug: 'api',
    seoData: {
      detailedDescription: 'An API acts as a bridge between different software programs, allowing them to request and exchange data. In modern web development, APIs are the glue that connects front-end interfaces to back-end databases and third-party services.',
      examples: [
        'A weather app pulling data from a global meteorological service via an API',
        'Using the Stripe API to securely process credit card payments on an e-commerce site',
        'An AI agent connecting to Google Calendar via API to schedule a meeting'
      ],
      relatedTerms: ['REST', 'SDK', 'JSON']
    }
  },
  {
    name: 'APR',
    definition: 'Annual Percentage Rate. The yearly interest rate charged on borrowed money or earned on an investment.',
    slug: 'apr',
    seoData: {
      detailedDescription: 'APR is a standard way to express the total cost of borrowing or the total return on an investment over one year. Unlike a simple interest rate, APR often includes additional fees and costs associated with a loan, providing a more accurate "bottom line" for consumers.',
      examples: [
        'Comparing the 18.9% APR of a credit card to the 4.5% APR of a personal loan',
        'A car dealership advertising a 0% APR promotional rate on new vehicle purchases',
        'Calculating the total yearly interest cost on a mortgage based on the quoted APR'
      ],
      relatedTerms: ['APY', 'Interest Rate', 'ROI']
    }
  },
  {
    name: 'APY',
    definition: 'Annual Percentage Yield. The real rate of return earned on a savings deposit or investment taking into account the effect of compounding interest.',
    slug: 'apy',
    seoData: {
      detailedDescription: 'APY measures the actual rate of return on an account or investment over one year, accounting for the effect of compounding interest. Compounding happens when you earn interest on your original deposit plus the interest you\'ve already earned.',
      examples: [
        'A high-yield savings account offering a 4.50% APY compounded daily',
        'Calculating the total growth of a crypto staking reward over a year using APY',
        'Comparing two investment funds where one compounds monthly and the other quarterly'
      ],
      relatedTerms: ['APR', 'Compound Interest', 'ROI']
    }
  },
  {
    name: 'ARR',
    definition: 'Annual Recurring Revenue. A metric used by SaaS and subscription businesses to measure predictable revenue.',
    slug: 'arr',
    seoData: {
      detailedDescription: 'ARR is the cornerstone metric for subscription-based businesses. it represents the total value of all active, recurring contracts projected over a one-year period. It provides a clear snapshot of the company\'s growth health and predictable income.',
      examples: [
        'A SaaS startup reaching the milestone of $1 million in ARR',
        'Forecasting next year\'s budget based on current ARR and expected churn',
        'Using ARR growth as a primary valuation metric during a fundraising round'
      ],
      relatedTerms: ['MRR', 'Churn', 'SaaS']
    }
  },
  {
    name: 'ASAP',
    definition: 'As Soon As Possible. Used to indicate that a task or request is urgent.',
    slug: 'asap',
    seoData: {
      detailedDescription: 'ASAP is a nearly universal acronym in business and daily communication used to convey urgency. It signals that the recipient should prioritize the request and complete it as quickly as their current schedule allows.',
      examples: [
        '"We need the quarterly sales report ASAP for the board meeting."',
        '"The server is down; please reboot it ASAP."',
        'Marking a high-priority support ticket as ASAP in a CRM'
      ],
      relatedTerms: ['EOD', 'ETA', 'Deadline']
    }
  },
  {
    name: 'ATH',
    definition: 'All-Time High. The highest price or value an asset has ever reached.',
    slug: 'ath',
    seoData: {
      detailedDescription: 'ATH identifies the highest historical price point reached by an asset since its inception. When an asset hits a new ATH, it often signals strong bullish sentiment, though it can also lead to profit-taking and price corrections.',
      examples: [
        'Bitcoin reaching a new ATH of $100,000',
        'An e-commerce store reporting an ATH in daily visitor traffic during Black Friday',
        'The S&P 500 closing at an ATH following positive economic reports'
      ],
      relatedTerms: ['ATL', 'Bull Market', 'Volatility']
    }
  },
  {
    name: 'ATL',
    definition: 'All-Time Low. The lowest price or value an asset has ever reached.',
    slug: 'atl',
    seoData: {
      detailedDescription: 'ATL is the inverse of ATH, marking the lowest price or value an asset has touched in its entire recorded history. Hitting an ATL often signals significant distress, a lack of investor confidence, or a major structural shift.',
      examples: [
        'A struggling penny stock hitting an ATL before being delisted',
        'Buying an undervalued cryptocurrency at its ATL in hopes of a future recovery',
        'A social media platform hitting an ATL in active users following a major data breach'
      ],
      relatedTerms: ['ATH', 'Bear Market', 'Support Level']
    }
  },
  {
    name: 'B2B',
    definition: 'Business to Business. Transactions or business conducted between one business and another.',
    slug: 'b2b',
    seoData: {
      detailedDescription: 'B2B describes a business model where a company sells its products or services to other businesses rather than individual consumers. B2B transactions often involve higher order values and longer sales cycles.',
      examples: [
        'A software company selling a CRM platform to a marketing agency',
        'A wholesale manufacturer selling parts to an automobile assembly plant',
        'An AI automation firm providing agents to a real estate brokerage'
      ],
      relatedTerms: ['B2C', 'Enterprise', 'Lead Gen']
    }
  },
  {
    name: 'B2C',
    definition: 'Business to Consumer. Transactions conducted directly between a company and individual consumers.',
    slug: 'b2c',
    seoData: {
      detailedDescription: 'B2C refers to the process of selling products and services directly to the end-user. This is the traditional retail model, characterized by shorter sales cycles, emotional branding, and a focus on mass-market appeal.',
      examples: [
        'An individual buying a pair of sneakers from an online Nike store',
        'Subscribing to a personal Netflix account for home entertainment',
        'A consumer purchasing a cup of coffee from a local cafe'
      ],
      relatedTerms: ['B2B', 'D2C', 'Retail']
    }
  },
  {
    name: 'BANT',
    definition: 'Budget, Authority, Need, Timeline. A lead qualification framework used by sales teams.',
    slug: 'bant',
    seoData: {
      detailedDescription: 'BANT is a classic sales methodology used to determine if a prospect is a good fit for a product. It asks: Does the lead have the budget? Do they have the authority? Is there a genuine need? And what is their timeline?',
      examples: [
        'A sales rep asking "Who besides yourself is involved in this decision?" to establish Authority',
        'Qualifying a lead as "Hot" because they have a $50k Budget and a 30-day Timeline',
        'Disqualifying a lead because they lack the Need for the high-end enterprise features'
      ],
      relatedTerms: ['SQL', 'Lead Gen', 'CRM']
    }
  },
  {
    name: 'CAC',
    definition: 'Customer Acquisition Cost. The total cost of winning a customer to purchase a product or service.',
    slug: 'cac',
    seoData: {
      detailedDescription: 'CAC is a vital growth metric that calculates the average amount of money spent to acquire a single new customer. This includes all marketing and sales expenses divided by the number of customers gained.',
      examples: [
        'Spending $1,000 on Facebook ads to get 10 customers results in a $100 CAC',
        'Reducing CAC by optimizing landing page conversion rates',
        'Comparing CAC across different ad platforms to find the most efficient channel'
      ],
      relatedTerms: ['LTV', 'ROI', 'Marketing Mix']
    }
  },
  {
    name: 'CEO',
    definition: 'Chief Executive Officer. The highest-ranking person in a company, responsible for making managerial decisions.',
    slug: 'ceo',
    seoData: {
      detailedDescription: 'The CEO is the top-ranking executive in an organization. Their primary responsibilities include making major corporate decisions, managing the overall operations, and acting as the main point of communication.',
      examples: [
        'The CEO setting the five-year strategic vision for a global tech firm',
        'A startup CEO pitching to venture capitalists for a Series A funding round',
        'Reviewing quarterly performance with other C-level executives'
      ],
      relatedTerms: ['CFO', 'COO', 'Board of Directors']
    }
  },
  {
    name: 'CFO',
    definition: 'Chief Financial Officer. The senior executive responsible for managing the financial actions of a company.',
    slug: 'cfo',
    seoData: {
      detailedDescription: 'The CFO is responsible for the financial health of an organization. Their duties include financial planning, managing financial risks, record-keeping, and financial reporting.',
      examples: [
        'The CFO overseeing a company\'s transition to a public offering (IPO)',
        'Managing the corporate budget and approving large capital expenditures',
        'Presenting financial audits and tax strategies to the CEO and Board'
      ],
      relatedTerms: ['CEO', 'EBITDA', 'P&L']
    }
  },
  {
    name: 'CI/CD',
    definition: 'Continuous Integration/Continuous Deployment. A method to frequently deliver apps to customers by introducing automation.',
    slug: 'ci-cd',
    seoData: {
      detailedDescription: 'CI/CD is a modern software development practice that uses automation to bridge the gap between development and operation activities. Continuous Integration automatically tests code, while Continuous Deployment ensures those changes are pushed.',
      examples: [
        'A GitHub Action automatically running tests whenever a developer pushes new code',
        'Vercel automatically deploying a new version of hmu.ai after a pull request is merged',
        'Using CI/CD to roll out a critical security patch to thousands of users in minutes'
      ],
      relatedTerms: ['DevOps', 'Git', 'Automation']
    }
  },
  {
    name: 'CLI',
    definition: 'Command Line Interface. A text-based interface used for entering commands to interact with a computer system.',
    slug: 'cli',
    seoData: {
      detailedDescription: 'A CLI allows users to interact with a computer system or software by typing text commands. While it has a steeper learning curve, the CLI is far more powerful and efficient for developers and AI agents.',
      examples: [
        'Using the git CLI to commit and push code from a terminal',
        'Running an OpenClaw agent directly from a Linux bash shell',
        'Using a CLI to mass-rename thousands of files using a single command'
      ],
      relatedTerms: ['GUI', 'Bash', 'Terminal']
    }
  },
  {
    name: 'CLV',
    definition: 'Customer Lifetime Value. A prediction of the net profit attributed to the entire future relationship with a customer.',
    slug: 'clv',
    seoData: {
      detailedDescription: 'CLV (also known as LTV) is a prediction of the total revenue a business will earn from a single customer over the entire duration of their relationship. Understanding CLV helps businesses decide how much they can afford to spend on CAC.',
      examples: [
        'Calculating that a customer who pays $50/month for 2 years has a CLV of $1,200',
        'Increasing CLV by implementing an effective upsell strategy for existing users',
        'Focusing marketing efforts on "high CLV" segments to maximize long-term profit'
      ],
      relatedTerms: ['CAC', 'Churn', 'Retention']
    }
  },
  {
    name: 'CMO',
    definition: 'Chief Marketing Officer. The executive responsible for developing and overseeing marketing and advertising strategies.',
    slug: 'cmo',
    seoData: {
      detailedDescription: 'The CMO is the senior executive in charge of a company\'s marketing activities. Their goal is to drive growth and increase sales by developing a comprehensive marketing plan that promotes brand recognition.',
      examples: [
        'The CMO approving a multi-million dollar national ad campaign',
        'Leading a brand rebranding project to appeal to a younger demographic',
        'Analyzing market trends and competitor strategies to adjust positioning'
      ],
      relatedTerms: ['CEO', 'CAC', 'Brand Equity']
    }
  },
  {
    name: 'CMS',
    definition: 'Content Management System. Software that helps users create, manage, and modify content on a website.',
    slug: 'cms',
    seoData: {
      detailedDescription: 'A CMS is an application that allows users to build and manage a website without having to write code from scratch. It provides a user-friendly interface for creating pages, uploading images, and publishing posts.',
      examples: [
        'A blogger using WordPress to write and schedule their weekly articles',
        'An e-commerce owner using Shopify to manage their product catalog and descriptions',
        'A marketing team using a headless CMS (like Strapi) to power an app and site'
      ],
      relatedTerms: ['SEO', 'Frontend', 'Blog']
    }
  },
  {
    name: 'COGS',
    definition: 'Cost of Goods Sold. The direct costs of producing the goods sold by a company.',
    slug: 'cogs',
    seoData: {
      detailedDescription: 'COGS represents the direct expenses incurred in producing the products a company sells. This includes the cost of raw materials and direct labor. COGS is subtracted from revenue to calculate Gross Profit.',
      examples: [
        'A baker including the cost of flour, sugar, and electricity as COGS',
        'A software company counting server hosting and third-party API fees as COGS',
        'Calculating gross margin by subtracting a product\'s COGS from its retail price'
      ],
      relatedTerms: ['Gross Profit', 'EBITDA', 'P&L']
    }
  },
  {
    name: 'COO',
    definition: 'Chief Operating Officer. The senior executive responsible for managing the day-to-day operations of a company.',
    slug: 'coo',
    seoData: {
      detailedDescription: 'The COO is a high-ranking executive who oversees the day-to-day administrative and operational functions of a business. Typically reporting directly to the CEO, the COO is often considered the second-in-command.',
      examples: [
        'The COO streamlining supply chain logistics to reduce delivery times',
        'Managing internal departmental workflows to ensure maximum efficiency',
        'Implementing new corporate policies to improve employee productivity'
      ],
      relatedTerms: ['CEO', 'Operations', 'Strategy']
    }
  },
  {
    name: 'CPC',
    definition: 'Cost Per Click. An internet advertising model where an advertiser pays a publisher when the ad is clicked.',
    slug: 'cpc',
    seoData: {
      detailedDescription: 'CPC is a digital marketing metric that measures the amount of money an advertiser pays for each click on their advertisement. It is a core component of "Pay-Per-Click" (PPC) advertising models like Google Ads.',
      examples: [
        'Bidding on the keyword "AI agents" with a maximum CPC of $2.50',
        'Calculating the total ad spend by multiplying the number of clicks by the average CPC',
        'Lowering CPC by improving the relevance and Quality Score of an advertisement'
      ],
      relatedTerms: ['PPC', 'CTR', 'CPM']
    }
  },
  {
    name: 'CPM',
    definition: 'Cost Per Mille. The cost an advertiser pays for every 1,000 views or impressions of an advertisement.',
    slug: 'cpm',
    seoData: {
      detailedDescription: 'CPM is a marketing term used to denote the price of 1,000 advertisement impressions on one web page. "Mille" is Latin for thousand. CPM is the most common method for pricing web ads based on visibility rather than clicks.',
      examples: [
        'Buying a display ad banner with a $10.00 CPM on a high-traffic news site',
        'Measuring the reach of a brand awareness campaign using total CPM cost',
        'Comparing the CPM of Facebook video ads vs. YouTube pre-roll ads'
      ],
      relatedTerms: ['CPC', 'Impression', 'Display Ads']
    }
  },
  {
    name: 'CRM',
    definition: 'Customer Relationship Management. Technology for managing all your company’s relationships and interactions with customers.',
    slug: 'crm',
    seoData: {
      detailedDescription: 'CRM software helps companies stay connected to customers, streamline processes, and improve profitability. It stores every interaction with a lead or customer, from emails and phone calls to support tickets and purchase history.',
      examples: [
        'A sales team using Salesforce to track the progress of a potential deal',
        'Using HubSpot CRM to automate follow-up emails after a website download',
        'Analyzing customer data in a CRM to identify high-value "at risk" clients'
      ],
      relatedTerms: ['Salesforce', 'Pipeline', 'SDR']
    }
  },
  {
    name: 'CRO',
    definition: 'Conversion Rate Optimization. The process of increasing the percentage of website visitors who take a desired action.',
    slug: 'cro',
    seoData: {
      detailedDescription: 'CRO is the systematic process of increasing the percentage of website visitors who perform a specific action—such as filling out a form, making a purchase, or signing up for a trial. It involves understanding how users move through your site.',
      examples: [
        'Running an A/B test on a landing page headline to see which drives more signups',
        'Removing unnecessary form fields to reduce friction and increase conversion',
        'Using heatmaps to identify where users are clicking and why they might be leaving'
      ],
      relatedTerms: ['A/B Testing', 'Landing Page', 'CTR']
    }
  },
  {
    name: 'CSAT',
    definition: 'Customer Satisfaction Score. A metric indicating how satisfied customers are with a product or service.',
    slug: 'csat',
    seoData: {
      detailedDescription: 'CSAT is a basic customer service metric that measures a customer\'s satisfaction with a specific interaction or a specific product. It is usually calculated by asking a single question like "How satisfied were you with your experience today?"',
      examples: [
        'Sending a survey after a support ticket is closed asking for a rating from 1 to 5',
        'Calculating the percentage of "Satisfied" responses to determine the overall CSAT score',
        'Using low CSAT scores to trigger an immediate follow-up from a customer success manager'
      ],
      relatedTerms: ['NPS', 'Churn', 'Retention']
    }
  },
  {
    name: 'CSO',
    definition: 'Chief Strategy Officer. An executive responsible for developing and executing corporate strategic initiatives.',
    slug: 'cso',
    seoData: {
      detailedDescription: 'The CSO is a C-suite executive who focuses on the long-term vision of the company. Their role is to translate the CEO\'s vision into actionable plans, identifying new market opportunities, and managing complex organizational changes.',
      examples: [
        'The CSO leading the research and planning for a new international market entry',
        'Developing a strategic roadmap for the company\'s transition to an AI-first model',
        'Overseeing the integration process following a corporate merger or acquisition'
      ],
      relatedTerms: ['CEO', 'CFO', 'Vision']
    }
  },
  {
    name: 'CTA',
    definition: 'Call to Action. A device designed to prompt an immediate response or encourage a sale.',
    slug: 'cta',
    seoData: {
      detailedDescription: 'In marketing, a CTA is an instruction to the audience to provoke an immediate response. Usually, it takes the form of an imperative verb such as "call now," "find out more," or "visit a store today." A strong CTA is essential for driving conversions.',
      examples: [
        'A large, high-contrast button on a website that says "Start Free Trial"',
        'The closing sentence of an email saying "Reply to this message to book a demo"',
        'A social media post ending with "Link in bio to shop the collection"'
      ],
      relatedTerms: ['CRO', 'CTR', 'Landing Page']
    }
  },
  {
    name: 'CTO',
    definition: 'Chief Technology Officer. The executive in charge of an organization\'s technological needs and R&D.',
    slug: 'cto',
    seoData: {
      detailedDescription: 'The CTO is the executive level position in a company or other entity whose occupation is focused on scientific and technological issues within an organization. They are responsible for the technical direction of the company\'s products.',
      examples: [
        'The CTO deciding whether to build a custom AI infrastructure or use a third-party API',
        'Managing the engineering team and setting the coding standards for the company',
        'Representing the company\'s technical vision to investors and external stakeholders'
      ],
      relatedTerms: ['CTO', 'Engineering', 'Architecture']
    }
  },
  {
    name: 'CTR',
    definition: 'Click-Through Rate. The ratio of users who click on a specific link to the number of total users who view a page.',
    slug: 'ctr',
    seoData: {
      detailedDescription: 'CTR is a ratio showing how often people who see your ad or organic search result end up clicking it. It can be used to gauge how well your keywords and ads, and free listings, are performing.',
      examples: [
        'Calculating that 100 clicks from 5,000 impressions results in a 2% CTR',
        'Improving CTR by writing more compelling meta descriptions for Google search',
        'A high CTR with low conversions indicating a "clickbait" headline or poor landing page'
      ],
      relatedTerms: ['CPC', 'SEO', 'PPC']
    }
  },
  {
    name: 'DAO',
    definition: 'Decentralized Autonomous Organization. An organization controlled by rules encoded as a computer program.',
    slug: 'dao',
    seoData: {
      detailedDescription: 'A DAO is a type of bottom-up entity structure with no central authority. Decisions are made by members who hold native tokens, and these decisions are executed automatically via smart contracts on a blockchain.',
      examples: [
        'A venture fund DAO where token holders vote on which startups to invest in',
        'A protocol DAO managing the upgrades and parameters of a DeFi platform',
        'A community DAO where members vote on how to spend a shared treasury'
      ],
      relatedTerms: ['DeFi', 'Web3', 'Blockchain']
    }
  },
  {
    name: 'DApp',
    definition: 'Decentralized Application. An application that runs on a distributed computing system, usually a blockchain.',
    slug: 'dapp',
    seoData: {
      detailedDescription: 'DApps are digital applications or programs that exist and run on a blockchain or P2P network of computers instead of a single computer, and are outside the purview and control of a single authority.',
      examples: [
        'Uniswap, a decentralized exchange for trading cryptocurrencies',
        'OpenSea, a marketplace for buying and selling NFTs (Non-Fungible Tokens)',
        'Compound, a DApp for lending and borrowing crypto assets without a bank'
      ],
      relatedTerms: ['Smart Contract', 'Web3', 'Ethereum']
    }
  },
  {
    name: 'DeFi',
    definition: 'Decentralized Finance. Financial services built on top of distributed networks with no central intermediaries.',
    slug: 'defi',
    seoData: {
      detailedDescription: 'DeFi is an emerging financial technology based on secure distributed ledgers similar to those used by cryptocurrencies. The system removes the control banks and institutions have on money, financial products, and financial services.',
      examples: [
        'Earning interest on crypto assets by providing liquidity to a decentralized pool',
        'Taking out a collateralized loan instantly without a credit check',
        'Trading assets on a decentralized exchange (DEX) directly from a private wallet'
      ],
      relatedTerms: ['DAO', 'Blockchain', 'Liquidity']
    }
  },
  {
    name: 'DNS',
    definition: 'Domain Name System. Translates domain names (like hmu.ai) to IP addresses.',
    slug: 'dns',
    seoData: {
      detailedDescription: 'DNS is often referred to as the "phonebook of the internet." It is the system that translates human-readable domain names (like google.com) into numerical IP addresses that computers use to identify each other on the network.',
      examples: [
        'Changing the DNS settings to point a domain to a new web server',
        'A "DNS error" preventing a user from accessing a website',
        'Using Cloudflare DNS to improve the speed and security of a website'
      ],
      relatedTerms: ['URL', 'IP Address', 'SSL']
    }
  },
  {
    name: 'EBITDA',
    definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of overall financial performance.',
    slug: 'ebitda',
    seoData: {
      detailedDescription: 'EBITDA is an alternate measure of profitability to net income. By stripping out non-operating expenses like interest and taxes, as well as non-cash charges like depreciation, it allows for a "cleaner" comparison of operational efficiency between companies.',
      examples: [
        'Using an EBITDA multiple to determine the valuation of a company during an acquisition',
        'Comparing the EBITDA of two manufacturing firms to see which is more operationally efficient',
        'Calculating EBITDA by adding back taxes, interest, and depreciation to net profit'
      ],
      relatedTerms: ['P&L', 'Net Income', 'Cash Flow']
    }
  },
  {
    name: 'ERP',
    definition: 'Enterprise Resource Planning. Software used to manage day-to-day business activities.',
    slug: 'erp',
    seoData: {
      detailedDescription: 'ERP is a type of software system that helps organizations automate and manage core business processes for optimal performance. It integrates all aspects of an operation, including product planning, development, manufacturing, sales, and marketing.',
      examples: [
        'A manufacturing company using an ERP to sync inventory with sales orders and accounting',
        'Implementing a global ERP (like SAP or Oracle) to unify data across international branches',
        'Using an ERP dashboard to monitor real-time supply chain performance'
      ],
      relatedTerms: ['CRM', 'Supply Chain', 'Business Intelligence']
    }
  },
  {
    name: 'FOMO',
    definition: 'Fear Of Missing Out. Anxiety that an exciting event may be happening elsewhere.',
    slug: 'fomo',
    seoData: {
      detailedDescription: 'FOMO is a powerful psychological phenomenon often used in marketing to drive urgent action. In the digital age, it is triggered by seeing others experience something desirable, leading to a fear that one is missing out on a profit, social connection, or limited-time opportunity.',
      examples: [
        'A limited-time "Flash Sale" countdown timer on an e-commerce site triggering FOMO',
        'Investors buying a surging stock due to FOMO, even at an All-Time High (ATH)',
        'A social media app using notifications to create FOMO and increase daily active users'
      ],
      relatedTerms: ['FUD', 'Social Proof', 'Urgency']
    }
  },
  {
    name: 'FTP',
    definition: 'File Transfer Protocol. A protocol used for the transfer of computer files between a client and server.',
    slug: 'ftp',
    seoData: {
      detailedDescription: 'FTP is a standard communication protocol used for the transfer of computer files from a server to a client on a computer network. While less common for everyday users now, it remains a staple for developers and server administrators.',
      examples: [
        'Using an FTP client (like FileZilla) to upload website files to a hosting server',
        'A print shop providing an FTP server for clients to upload large high-resolution graphics',
        'Automating the daily transfer of data logs from a remote server via FTP'
      ],
      relatedTerms: ['SFTP', 'Server', 'HTTP']
    }
  },
  {
    name: 'FUD',
    definition: 'Fear, Uncertainty, and Doubt. A strategy used to influence perception by disseminating negative information.',
    slug: 'fud',
    seoData: {
      detailedDescription: 'FUD is a propaganda tactic used in sales, marketing, and politics. It involves spreading negative, vague, or false information about a competitor or an asset to undermine its credibility and cause people to hesitate.',
      examples: [
        'A competitor spreading FUD about a new technology\'s security to keep customers on their platform',
        'Panic selling in the crypto market triggered by unverified "FUD" news reports',
        'Addressing FUD in a community forum by providing transparent, fact-based evidence'
      ],
      relatedTerms: ['FOMO', 'Market Sentiment', 'Bull/Bear']
    }
  },
  {
    name: 'FYI',
    definition: 'For Your Information. Used to share information that is relevant but doesn\'t necessarily require an action.',
    slug: 'fyi',
    seoData: {
      detailedDescription: 'FYI is a staple of office and digital communication. It is used to flag information for the recipient\'s awareness without imposing a specific task or deadline. It is often used when forwarding emails or sharing status updates.',
      examples: [
        'Forwarding a client\'s positive feedback to the whole team "FYI"',
        '"FYI: The office will be closed this Friday for the holiday."',
        'Sending a link to a relevant industry article with a brief "FYI"'
      ],
      relatedTerms: ['ASAP', 'EOD', 'Update']
    }
  },
  {
    name: 'GDPR',
    definition: 'General Data Protection Regulation. A regulation in EU law on data protection and privacy.',
    slug: 'gdpr',
    seoData: {
      detailedDescription: 'GDPR is a legal framework that sets guidelines for the collection and processing of personal information from individuals who live in the European Union (EU). Regardless of where websites are based, they must heed the GDPR if they attract European visitors.',
      examples: [
        'A website displaying a cookie consent banner to comply with GDPR requirements',
        'An individual requesting that a company delete all their personal data under the "Right to be Forgotten"',
        'A business appointing a Data Protection Officer (DPO) to oversee compliance'
      ],
      relatedTerms: ['Privacy Policy', 'Compliance', 'Data Protection']
    }
  },
  {
    name: 'GMV',
    definition: 'Gross Merchandise Volume. The total value of merchandise sold through a platform.',
    slug: 'gmv',
    seoData: {
      detailedDescription: 'GMV is a metric used in e-commerce to measure the total dollar value of everything sold through a marketplace over a certain period. While it shows the scale of the platform, it does not represent the company\'s actual revenue, which is usually a small percentage of GMV.',
      examples: [
        'eBay reporting a record-breaking GMV during the holiday shopping season',
        'A new marketplace startup tracking GMV to show investors the volume of trade on their platform',
        'Calculating the take-rate (revenue) as a percentage of the total GMV'
      ],
      relatedTerms: ['E-commerce', 'Revenue', 'Marketplace']
    }
  },
  {
    name: 'GPT',
    definition: 'Generative Pre-trained Transformer. A type of large language model and framework for generative AI.',
    slug: 'gpt',
    seoData: {
      detailedDescription: 'GPT is a family of language models trained by OpenAI. The "Generative" part refers to its ability to create new text; "Pre-trained" means it was trained on a massive dataset before being fine-tuned; and "Transformer" is the specific neural network architecture it uses.',
      examples: [
        'Using GPT-4 to generate a comprehensive business plan from a few bullet points',
        'A developer integrating the GPT API to power a personalized AI tutor',
        'Fine-tuning a GPT model on legal documents to create a specialized contract reviewer'
      ],
      relatedTerms: ['LLM', 'OpenAI', 'NLP']
    }
  },
  {
    name: 'GUI',
    definition: 'Graphical User Interface. An interface that allows users to interact through graphical icons.',
    slug: 'gui',
    seoData: {
      detailedDescription: 'A GUI is a digital interface that allows users to interact with software using visual elements like windows, icons, and buttons, typically controlled by a mouse or touch screen. GUIs made computing accessible to the general public by removing the need to learn complex text commands.',
      examples: [
        'The Windows or macOS desktop environment used to manage files and apps',
        'A mobile app dashboard with colorful icons and swipeable menus',
        'The settings menu of a digital camera controlled via a physical screen'
      ],
      relatedTerms: ['UX', 'UI', 'CLI']
    }
  },
  {
    name: 'HODL',
    definition: 'Hold On for Dear Life. A passive investment strategy where you hold an investment for a long time.',
    slug: 'hodl',
    seoData: {
      detailedDescription: 'Originally a typo of "hold" on a Bitcoin forum, HODL has become a mantra in the crypto community. It describes an investment philosophy of never selling an asset, even during extreme price volatility or market crashes, based on a long-term belief in the asset\'s value.',
      examples: [
        'An investor deciding to HODL their Bitcoin through a 50% market correction',
        'The "HODL" mentality preventing panic selling during a bearish news cycle',
        'A long-term holder identifying as a "HODLer" in a community discussion'
      ],
      relatedTerms: ['Mooning', 'Diamond Hands', 'Volatility']
    }
  },
  {
    name: 'HTTP',
    definition: 'Hypertext Transfer Protocol. The foundation of data exchange on the Web.',
    slug: 'http',
    seoData: {
      detailedDescription: 'HTTP is the protocol used by web browsers and servers to communicate. When you type a URL into your browser, it sends an HTTP request to a server, which then sends back an HTTP response containing the text, images, and code for that webpage.',
      examples: [
        'A browser sending a GET request to a server to load a specific page',
        'A web server returning a "404 Not Found" HTTP status code',
        'The fundamental difference between the insecure HTTP and the secure HTTPS'
      ],
      relatedTerms: ['HTTPS', 'URL', 'TCP/IP']
    }
  },
  {
    name: 'HTTPS',
    definition: 'Hypertext Transfer Protocol Secure. An extension of HTTP used for secure communication.',
    slug: 'https',
    seoData: {
      detailedDescription: 'HTTPS is the secure version of HTTP. It uses encryption (via SSL/TLS) to protect the data sent between a browser and a server. This prevents hackers from intercepting sensitive information like passwords, credit card numbers, or personal messages.',
      examples: [
        'A "padlock" icon in a browser address bar indicating a site is using HTTPS',
        'An e-commerce site requiring HTTPS to securely process customer transactions',
        'Google prioritizing websites that use HTTPS in its search rankings'
      ],
      relatedTerms: ['HTTP', 'SSL', 'TLS']
    }
  },
  {
    name: 'ICO',
    definition: 'Initial Coin Offering. A type of funding using cryptocurrencies, often a form of crowdfunding.',
    slug: 'ico',
    seoData: {
      detailedDescription: 'An ICO is a controversial method for startups to raise capital by issuing their own digital tokens in exchange for established cryptocurrencies like Bitcoin or Ethereum. It allows projects to bypass traditional venture capital and regulatory hurdles, though it also carries high risk.',
      examples: [
        'The Ethereum ICO in 2014 which raised funds to build the programmable blockchain',
        'A startup releasing a "Whitepaper" to attract investors to their upcoming ICO',
        'Regulatory bodies like the SEC issuing warnings about fraudulent ICO schemes'
      ],
      relatedTerms: ['IPO', 'Tokenomics', 'Smart Contract']
    }
  },
  {
    name: 'IDE',
    definition: 'Integrated Development Environment. A software application that provides comprehensive facilities to programmers.',
    slug: 'ide',
    seoData: {
      detailedDescription: 'An IDE is a specialized "all-in-one" toolkit for software developers. It typically includes a code editor, build automation tools, and a debugger in a single interface, making it much easier to write, test, and package complex software applications.',
      examples: [
        'A developer using VS Code to write a React application with real-time error checking',
        'An iOS developer using Xcode to design and compile an app for the App Store',
        'Using an IDE\'s debugger to step through code line-by-line to find a logic bug'
      ],
      relatedTerms: ['CLI', 'Debugger', 'Git']
    }
  },
  {
    name: 'IP',
    definition: 'Intellectual Property. Intangible creations of the human intellect, such as inventions and artistic works.',
    slug: 'ip',
    seoData: {
      detailedDescription: 'Intellectual Property (IP) refers to creations of the mind that have commercial value. It is protected by law through patents, copyrights, and trademarks, which enable people to earn recognition or financial benefit from what they invent or create.',
      examples: [
        'A pharmaceutical company filing a patent to protect their "IP" on a new drug',
        'An artist holding the copyright (IP) to their digital illustrations',
        'A tech startup ensuring all employee-written code is legally considered company IP'
      ],
      relatedTerms: ['NDA', 'Copyright', 'Patent']
    }
  },
  {
    name: 'IPO',
    definition: 'Initial Public Offering. The process of offering shares of a private corporation to the public.',
    slug: 'ipo',
    seoData: {
      detailedDescription: 'An IPO marks the transition of a company from being privately owned to being "public." This allows the company to raise significant capital by selling shares on a stock exchange, but it also subjects them to strict regulatory oversight and public financial reporting.',
      examples: [
        'The highly anticipated IPO of a major social media platform',
        'An early employee becoming a millionaire after the company\'s IPO "lock-up" period ends',
        'A company hiring an investment bank to underwrite their IPO and determine the initial share price'
      ],
      relatedTerms: ['VC', 'Public Market', 'Shareholder']
    }
  },
  {
    name: 'JSON',
    definition: 'JavaScript Object Notation. A lightweight data-interchange format easy for humans and machines.',
    slug: 'json',
    seoData: {
      detailedDescription: 'JSON is the most popular format for transmitting data in web applications. It stores data in simple "key-value" pairs that are easy for humans to read and for computers to parse. Almost every modern API uses JSON to send information back and forth.',
      examples: [
        'An API returning a JSON object containing a user\'s name, email, and age',
        'A developer storing application configuration settings in a `config.json` file',
        'Converting a JavaScript object into a JSON string to send it over a network'
      ],
      relatedTerms: ['API', 'XML', 'REST']
    }
  },
  {
    name: 'KPI',
    definition: 'Key Performance Indicator. A quantifiable measure used to evaluate success in meeting objectives.',
    slug: 'kpi',
    seoData: {
      detailedDescription: 'KPIs are the vital signs of a business. They are specific, measurable metrics used to track progress toward a target. Effective KPIs help teams stay focused on what actually matters for growth and success, rather than getting distracted by "vanity metrics."',
      examples: [
        'A customer support team tracking "Average Response Time" as a primary KPI',
        'An e-commerce site setting a KPI to increase "Conversion Rate" by 5% this quarter',
        'A content creator using "Average Watch Time" as a KPI for video performance'
      ],
      relatedTerms: ['OKR', 'ROI', 'Metrics']
    }
  },
  {
    name: 'KYC',
    definition: 'Know Your Customer. A process used by businesses to verify the identity of their clients.',
    slug: 'kyc',
    seoData: {
      detailedDescription: 'KYC is a mandatory process for financial institutions and many online businesses to verify the identity of their users. It is designed to prevent money laundering, identity theft, and financial fraud by ensuring that customers are who they say they are.',
      examples: [
        'A crypto exchange requiring a photo of a government ID to "pass KYC"',
        'A bank performing a KYC check before allowing a user to open a new account',
        'Automating the KYC process using AI-powered facial recognition and document scanning'
      ],
      relatedTerms: ['AML', 'Compliance', 'Identity Theft']
    }
  },
  {
    name: 'LLM',
    definition: 'Large Language Model. A type of AI algorithm that uses deep learning to generate and understand content.',
    slug: 'llm',
    seoData: {
      detailedDescription: 'LLMs are advanced AI models trained on vast amounts of text data (books, websites, code). They use this data to learn the statistical patterns of human language, allowing them to answer questions, write essays, summarize documents, and even write software with incredible accuracy.',
      examples: [
        'OpenAI\'s GPT-4, which can engage in complex reasoning and creative writing',
        'Google\'s Gemini, which is an LLM capable of processing text, images, and video',
        'A company deploying a private LLM to help employees search through internal documentation'
      ],
      relatedTerms: ['AI', 'GPT', 'Transformers']
    }
  },
  {
    name: 'LTV',
    definition: 'Lifetime Value. A prediction of the net profit attributed to the entire relationship with a customer.',
    slug: 'ltv',
    seoData: {
      detailedDescription: 'LTV (often used interchangeably with CLV) represents the total amount of money a customer is expected to spend with your business over their lifetime. It is a crucial metric for determining how much you can spend on marketing (CAC) while remaining profitable.',
      examples: [
        'Increasing LTV by reducing "Churn Rate" through better customer support',
        'Calculating that an annual subscriber has a higher LTV than a monthly one',
        'Using LTV to identify the most valuable customer personas for targeted advertising'
      ],
      relatedTerms: ['CAC', 'CLV', 'Churn']
    }
  },
  {
    name: 'M&A',
    definition: 'Mergers and Acquisitions. The consolidation of companies or assets through financial transactions.',
    slug: 'm-a',
    seoData: {
      detailedDescription: 'M&A describes the process of companies joining together (merging) or one company buying another (acquisition). M&A is a primary driver of corporate growth, allowing companies to gain market share, enter new territories, or acquire valuable technology and talent.',
      examples: [
        'A tech giant acquiring a small startup to integrate its "AI IP" into their core product',
        'Two equal-sized banks merging to form a larger, more competitive regional entity',
        'An investment banker facilitating a multi-billion dollar M&A deal between rivals'
      ],
      relatedTerms: ['IPO', 'Private Equity', 'Due Diligence']
    }
  },
  {
    name: 'ML',
    definition: 'Machine Learning. A branch of AI focused on building systems that learn from data.',
    slug: 'ml',
    seoData: {
      detailedDescription: 'Machine Learning is a subset of AI that focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. Instead of being explicitly programmed, the system finds patterns in data to make predictions or decisions.',
      examples: [
        'A recommendation engine (like Netflix) learning your preferences over time via ML',
        'A spam filter using ML to identify new types of junk email based on past examples',
        'A predictive maintenance system using ML to guess when a machine part will fail'
      ],
      relatedTerms: ['AI', 'Deep Learning', 'Neural Network']
    }
  },
  {
    name: 'MQL',
    definition: 'Marketing Qualified Lead. A lead deemed more likely to become a customer based on marketing intelligence.',
    slug: 'mql',
    seoData: {
      detailedDescription: 'An MQL is a lead that has shown interest in a brand\'s products or services through specific actions, such as downloading an ebook, signing up for a webinar, or visiting high-intent pages. MQLs are handed off to sales teams for further qualification into SQLs.',
      examples: [
        'A visitor who downloads a "Guide to AI Automation" being tagged as an MQL',
        'Using a "Lead Score" system to automatically identify MQLs in a CRM',
        'Marketing teams being measured by the number of high-quality MQLs they generate per month'
      ],
      relatedTerms: ['SQL', 'Lead Gen', 'Funnel']
    }
  },
  {
    name: 'MRR',
    definition: 'Monthly Recurring Revenue. The total predictable revenue a company expects to receive every month.',
    slug: 'mrr',
    seoData: {
      detailedDescription: 'MRR is the lifeblood of subscription-based businesses. It calculates all predictable revenue coming in each month, providing a clear picture of the company\'s cash flow and growth trajectory. It excludes one-time payments or variable service fees.',
      examples: [
        'A SaaS business tracking "Net New MRR" (new signups minus cancellations)',
        'Using MRR to determine if a startup is ready to hire its next employee',
        'Investors valuing a company based on its "MRR Growth Rate"'
      ],
      relatedTerms: ['ARR', 'SaaS', 'Churn']
    }
  },
  {
    name: 'MVP',
    definition: 'Minimum Viable Product. A version of a product with just enough features to be usable by early customers.',
    slug: 'mvp',
    seoData: {
      detailedDescription: 'An MVP is the most basic version of a new product that still solves a core problem for users. The goal of an MVP is to test a business idea and collect user feedback as quickly and cheaply as possible before investing in full-scale development.',
      examples: [
        'A startup launching a landing page and a simple manual service to test demand for an app',
        'Releasing a core "coding agent" before building out the full hmu.ai dashboard',
        'Using an MVP to prove a concept to investors and secure "Seed" funding'
      ],
      relatedTerms: ['Agile', 'Beta', 'Iteration']
    }
  },
  {
    name: 'NDA',
    definition: 'Non-Disclosure Agreement. A legally binding contract establishing a confidential relationship.',
    slug: 'nda',
    seoData: {
      detailedDescription: 'An NDA (or confidentiality agreement) is a legal contract between at least two parties that outlines confidential material, knowledge, or information that the parties wish to share with one another for certain purposes, but wish to restrict access to.',
      examples: [
        'A founder requiring a potential partner to sign an NDA before pitching an invention',
        'An employee signing an NDA to protect the company\'s proprietary source code',
        'Using a mutual NDA during M&A discussions to protect both companies\' financial data'
      ],
      relatedTerms: ['IP', 'Contract', 'Compliance']
    }
  },
  {
    name: 'NLP',
    definition: 'Natural Language Processing. A field of AI giving computers the ability to understand text and spoken words.',
    slug: 'nlp',
    seoData: {
      detailedDescription: 'NLP is the branch of AI that enables computers to process and analyze large amounts of natural language data. It combines linguistics, computer science, and machine learning to understand the "meaning" of human speech and text, enabling translation, sentiment analysis, and conversational agents.',
      examples: [
        'Google Translate using NLP to accurately translate between dozens of languages',
        'Analyzing thousands of customer reviews to determine overall "Sentiment"',
        'A voice assistant like Alexa understanding a spoken command to "play music"'
      ],
      relatedTerms: ['AI', 'LLM', 'Sentiment Analysis']
    }
  },
  {
    name: 'NPS',
    definition: 'Net Promoter Score. A metric asking respondents to rate the likelihood of recommending a company.',
    slug: 'nps',
    seoData: {
      detailedDescription: 'NPS is a widely used benchmark for customer loyalty. It is calculated based on responses to a single question: "On a scale of 0 to 10, how likely are you to recommend our company to a friend or colleague?" Respondents are grouped into Promoters (9-10), Passives (7-8), and Detractors (0-6).',
      examples: [
        'A software company achieving an industry-leading NPS of 75',
        'Using NPS feedback to identify Detractors and proactively resolve their issues',
        'Tracking NPS monthly to measure the impact of new feature releases on customer loyalty'
      ],
      relatedTerms: ['CSAT', 'Churn', 'Loyalty']
    }
  },
  {
    name: 'OKR',
    definition: 'Objectives and Key Results. A goal-setting framework to define measurable goals and track outcomes.',
    slug: 'okr',
    seoData: {
      detailedDescription: 'OKRs are a popular goal-setting methodology used by companies like Google and Intel. An Objective is a clearly defined goal (e.g., "Become the market leader in AI agents"), and Key Results are the specific, measurable metrics used to track the achievement of that goal.',
      examples: [
        'Objective: "Expand the hmu.ai Library." Key Result: "Publish 900+ terms with full SEO data."',
        'Setting quarterly OKRs at the company, team, and individual levels',
        'Using an OKR tracking software to monitor progress and maintain alignment'
      ],
      relatedTerms: ['KPI', 'Strategy', 'Alignment']
    }
  },
  {
    name: 'P&L',
    definition: 'Profit and Loss. A financial statement summarizing revenues, costs, and expenses.',
    slug: 'p-l',
    seoData: {
      detailedDescription: 'The P&L statement (also known as an Income Statement) provides a summary of a company\'s financial performance over a specific period (monthly, quarterly, or annually). It shows how revenue is transformed into net income by subtracting all costs and expenses.',
      examples: [
        'A CEO reviewing the monthly P&L to identify areas where costs are exceeding the budget',
        'Presenting a three-year historical P&L to potential investors during a fundraising round',
        'Using P&L data to calculate a company\'s net profit margin'
      ],
      relatedTerms: ['Balance Sheet', 'EBITDA', 'Revenue']
    }
  },
  {
    name: 'PE',
    definition: 'Private Equity. An alternative investment class consisting of capital not listed on a public exchange.',
    slug: 'pe',
    seoData: {
      detailedDescription: 'Private Equity firms raise funds from institutional and wealthy investors to buy and restructure companies that are not publicly traded. Their goal is typically to improve the company\'s operations and eventually sell it for a significant profit.',
      examples: [
        'A PE firm acquiring a family-owned manufacturing business to modernize its operations',
        'The "Leveraged Buyout" (LBO) of a major retail chain by a private equity group',
        'A startup opting for private equity funding instead of going public via an IPO'
      ],
      relatedTerms: ['VC', 'LBO', 'Venture Capital']
    }
  },
  {
    name: 'PPC',
    definition: 'Pay-Per-Click. An internet advertising model where an advertiser pays when the ad is clicked.',
    slug: 'ppc',
    seoData: {
      detailedDescription: 'PPC is an advertising model where businesses pay a fee each time one of their ads is clicked. It is essentially a way of buying visits to your site, rather than attempting to "earn" those visits organically. Google Ads is the most popular PPC platform.',
      examples: [
        'Running a PPC campaign for the keyword "best AI employees" to drive traffic',
        'Optimizing a PPC account to lower the "Cost Per Acquisition" (CPA)',
        'Using PPC ads to test the demand for a new product before a full launch'
      ],
      relatedTerms: ['CPC', 'SEM', 'Google Ads']
    }
  },
  {
    name: 'PR',
    definition: 'Public Relations. The maintenance of a favorable public image by a company or individual.',
    slug: 'pr',
    seoData: {
      detailedDescription: 'PR is the strategic communication process that builds mutually beneficial relationships between organizations and their publics. It involves managing the spread of information to shape public perception, handling media inquiries, and responding to crises.',
      examples: [
        'A tech startup hiring a PR agency to secure features in major news outlets',
        'Releasing a "Press Release" to announce a major new product launch or partnership',
        'Managing a company\'s response to a negative social media trend via a PR campaign'
      ],
      relatedTerms: ['Media Relations', 'Crisis Management', 'Branding']
    }
  },
  {
    name: 'QA',
    definition: 'Quality Assurance. Preventing mistakes and defects in products and avoiding problems.',
    slug: 'qa',
    seoData: {
      detailedDescription: 'QA is a systematic process of determining whether a product or service meets specified requirements. In software development, QA involves rigorous testing to find and fix bugs before the software is released to users.',
      examples: [
        'A QA engineer writing automated scripts to test a new login feature',
        'Performing "Regression Testing" to ensure that new code hasn\'t broken existing functionality',
        'A manufacturing plant implementing QA checks at every stage of the assembly line'
      ],
      relatedTerms: ['QC', 'Testing', 'Software Development']
    }
  },
  {
    name: 'R&D',
    definition: 'Research and Development. Activities companies undertake to innovate and introduce new products.',
    slug: 'r-d',
    seoData: {
      detailedDescription: 'R&D includes the activities that companies engage in to innovate and introduce new products and services. It is a critical driver of long-term growth and competitive advantage, particularly in the tech and pharmaceutical industries.',
      examples: [
        'A tech company investing millions into R&D for next-generation AI models',
        'Allocating 15% of annual revenue to the "R&D Department" to fuel innovation',
        'Discovering a breakthrough in battery technology through a decade-long R&D project'
      ],
      relatedTerms: ['Innovation', 'Prototype', 'IP']
    }
  },
  {
    name: 'RAG',
    definition: 'Retrieval-Augmented Generation. A technique for enhancing LLM output with outside data.',
    slug: 'rag',
    seoData: {
      detailedDescription: 'RAG is a framework for improving the accuracy and reliability of LLM responses. It works by first "retrieving" relevant facts from an external knowledge base (like a company\'s internal docs) and then "augmenting" the LLM\'s prompt with that data.',
      examples: [
        'An AI support agent using RAG to pull current shipping data before answering a user',
        'Reducing "Hallucinations" in an LLM by grounding its answers in a verified database via RAG',
        'Implementing RAG to allow an AI to "remember" and reference a user\'s specific history'
      ],
      relatedTerms: ['LLM', 'Vector Database', 'Semantic Search']
    }
  },
  {
    name: 'REST',
    definition: 'Representational State Transfer. A software architectural style for creating Web services.',
    slug: 'rest',
    seoData: {
      detailedDescription: 'REST is the industry-standard way for web-based systems to communicate. A "RESTful API" uses standard HTTP methods (GET, POST, PUT, DELETE) to allow different applications to exchange data in a simple, stateless, and scalable way.',
      examples: [
        'Building a REST API to allow a mobile app to talk to a central database',
        'A developer reading the "REST Documentation" to understand how to pull data from Twitter',
        'Using a REST client (like Postman) to test the responses of a new web service'
      ],
      relatedTerms: ['API', 'HTTP', 'JSON']
    }
  },
  {
    name: 'ROI',
    definition: 'Return on Investment. A performance measure used to evaluate efficiency or profitability.',
    slug: 'roi',
    seoData: {
      detailedDescription: 'ROI is the most fundamental metric in business. It calculates the benefit (return) of an investment relative to its cost. A positive ROI means the investment made money, while a negative ROI means it lost money.',
      examples: [
        'Calculating that a $5,000 ad campaign that generated $15,000 in profit has a 200% ROI',
        'Measuring the ROI of hiring an AI agent (Cost of Agent vs. Salary of Human Employee)',
        'Using ROI to prioritize which marketing channels to invest more heavily in'
      ],
      relatedTerms: ['Profit', 'KPI', 'Metrics']
    }
  },
  {
    name: 'SaaS',
    definition: 'Software as a Service. A licensing and delivery model for centrally hosted software.',
    slug: 'saas',
    seoData: {
      detailedDescription: 'SaaS is a software distribution model where a third-party provider hosts applications and makes them available to customers over the internet. This eliminates the need for organizations to install and run applications on their own computers.',
      examples: [
        'Using Salesforce for CRM or Slack for communication (both classic SaaS examples)',
        'Paying a monthly subscription fee for access to hmu.ai\'s workforce of agents',
        'The "SaaS Revolution" allowing small startups to access enterprise-grade software tools'
      ],
      relatedTerms: ['Subscription', 'Cloud Computing', 'MRR']
    }
  },
  {
    name: 'SDK',
    definition: 'Software Development Kit. A collection of software tools in one installable package.',
    slug: 'sdk',
    seoData: {
      detailedDescription: 'An SDK is a set of tools, libraries, documentation, and code samples that helps developers build applications for a specific platform or service. It\'s like a "pre-packaged kit" that makes it much faster to integrate complex functionality.',
      examples: [
        'A developer using the iOS SDK to build an app for the iPhone',
        'Integrating the Stripe SDK to add payment processing to a website in minutes',
        'Using an "AI SDK" to add natural language capabilities to an existing software product'
      ],
      relatedTerms: ['API', 'Library', 'Framework']
    }
  },
  {
    name: 'SDR',
    definition: 'Sales Development Representative. An inside sales role focusing on outbound prospecting.',
    slug: 'sdr',
    seoData: {
      detailedDescription: 'An SDR is a sales specialist whose primary job is "top-of-the-funnel" activities: finding new leads, reaching out via cold email or phone, and qualifying them. Once a lead is ready to see a demo, the SDR hands them off to an Account Executive (AE).',
      examples: [
        'An SDR spending their day on LinkedIn finding potential B2B customers',
        'Qualifying a lead via a discovery call and booking a demo for an AE',
        'Using an AI agent to handle the SDR role of initial outreach and qualification'
      ],
      relatedTerms: ['AE', 'Lead Gen', 'Prospecting']
    }
  },
  {
    name: 'SEM',
    definition: 'Search Engine Marketing. A digital strategy to increase website visibility in search results.',
    slug: 'sem',
    seoData: {
      detailedDescription: 'SEM is the umbrella term for any activity used to increase a website\'s visibility in Search Engine Results Pages (SERPs). While it technically includes SEO, SEM is almost always used to refer specifically to "Paid Search" (like Google Ads).',
      examples: [
        'Bidding on the keyword "hire AI developer" to appear at the top of Google results',
        'A marketing team allocating 50% of their budget to an SEM campaign',
        'Measuring the success of an SEM strategy by the "Cost Per Lead" (CPL)'
      ],
      relatedTerms: ['SEO', 'PPC', 'Google Ads']
    }
  },
  {
    name: 'SEO',
    definition: 'Search Engine Optimization. The process of improving website traffic from search engines.',
    slug: 'seo',
    seoData: {
      detailedDescription: 'SEO is the practice of optimizing a website to rank higher in the "organic" (non-paid) search results. This involves keyword research, content creation, technical improvements, and building backlinks to increase the site\'s authority.',
      examples: [
        'Optimizing a blog post for the keyword "AI for real estate" to get free traffic',
        'Using "Programmatic SEO" (like this library) to rank for thousands of specific terms',
        'A website\'s traffic dropping after failing to keep up with SEO best practices'
      ],
      relatedTerms: ['Keywords', 'Backlinks', 'SEM']
    }
  },
  {
    name: 'SLA',
    definition: 'Service Level Agreement. A commitment between a service provider and a client.',
    slug: 'sla',
    seoData: {
      detailedDescription: 'An SLA is a formal contract that defines exactly what a customer can expect from a service provider. This usually includes metrics like "uptime" (e.g., 99.9%), response times for support, and penalties if the provider fails to meet those standards.',
      examples: [
        'A cloud hosting provider guaranteeing a "99.99% Uptime SLA"',
        'A support team having an SLA to respond to all high-priority tickets within 4 hours',
        'Receiving a service credit because the provider breached their monthly SLA'
      ],
      relatedTerms: ['Uptime', 'Support', 'Contract']
    }
  },
  {
    name: 'SMART',
    definition: 'Specific, Measurable, Achievable, Relevant, Time-bound. Criteria for setting goals.',
    slug: 'smart',
    seoData: {
      detailedDescription: 'SMART is a mnemonic acronym used to guide the setting of effective goals. Instead of a vague goal (e.g., "Grow the business"), a SMART goal is precise (e.g., "Increase MRR by 20% by December 31st through new B2B partnerships").',
      examples: [
        'Refining a goal to make it "SMART" before presenting it to a manager',
        'Using the SMART framework to set quarterly targets for a sales team',
        'An individual using SMART goals to track their professional development'
      ],
      relatedTerms: ['OKR', 'Goal Setting', 'Strategy']
    }
  },
  {
    name: 'SMB',
    definition: 'Small and Medium-sized Business. A business with revenue or employees below certain limits.',
    slug: 'smb',
    seoData: {
      detailedDescription: 'SMBs are the backbone of most economies. While definitions vary by country, an SMB is typically a company with fewer than 500 employees. SMBs often have different needs and budgets than large "Enterprise" companies.',
      examples: [
        'A local marketing agency identifying as an SMB',
        'A software company building a "lite" version of their product tailored for SMBs',
        'Government programs offering low-interest loans to help SMBs grow'
      ],
      relatedTerms: ['SME', 'Startup', 'Enterprise']
    }
  },
  {
    name: 'SQL',
    definition: 'Sales Qualified Lead. A prospective customer researched and vetted by marketing and sales teams.',
    slug: 'sql-sales',
    seoData: {
      detailedDescription: 'An SQL is a lead that has moved past the MQL stage and is deemed ready for a direct sales follow-up. They have shown high intent and fit the company\'s target profile, and an Account Executive has confirmed they are worth pursuing.',
      examples: [
        'A lead requesting a customized price quote being upgraded to an SQL',
        'An AE accepting an SQL from the marketing team after reviewing their BANT data',
        'Tracking the "MQL to SQL conversion rate" to measure marketing-sales alignment'
      ],
      relatedTerms: ['MQL', 'CRM', 'Pipeline']
    }
  },
  {
    name: 'SSL',
    definition: 'Secure Sockets Layer. Standard security technology for establishing an encrypted link.',
    slug: 'ssl',
    seoData: {
      detailedDescription: 'SSL is the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two systems. It prevents criminals from reading and modifying any information transferred, including personal details.',
      examples: [
        'Installing an SSL certificate on a server to enable the HTTPS padlock',
        'A browser warning a user that a site is "Not Secure" because it lacks an SSL certificate',
        'The transition from the older SSL standard to the modern TLS standard'
      ],
      relatedTerms: ['HTTPS', 'TLS', 'Encryption']
    }
  },
  {
    name: 'SWOT',
    definition: 'Strengths, Weaknesses, Opportunities, Threats. A strategic planning technique.',
    slug: 'swot',
    seoData: {
      detailedDescription: 'A SWOT analysis is a framework used to evaluate a company\'s competitive position and to develop strategic planning. It assesses internal factors (Strengths and Weaknesses) and external factors (Opportunities and Threats).',
      examples: [
        'A founder performing a SWOT analysis before launching a new AI product',
        'Identifying "low competitor presence" as an Opportunity in a SWOT matrix',
        'Using a SWOT analysis to decide whether to enter a new international market'
      ],
      relatedTerms: ['Strategy', 'Competitor Analysis', 'Planning']
    }
  },
  {
    name: 'TCV',
    definition: 'Total Contract Value. A metric representing the total value of a customer contract over its duration.',
    slug: 'tcv',
    seoData: {
      detailedDescription: 'TCV is a sales metric that includes the total revenue a contract will generate over its entire life, including one-time fees (implementation, training) and recurring fees. Unlike ACV (Annual), TCV looks at the "big picture" of a deal\'s value.',
      examples: [
        'A three-year contract with a $10,000 annual fee and a $5,000 setup fee has a $35,000 TCV',
        'A company focusing on "High TCV" deals to ensure long-term revenue stability',
        'Sales reps being incentivized based on the TCV of the deals they close'
      ],
      relatedTerms: ['ACV', 'ARR', 'Revenue']
    }
  },
  {
    name: 'TOS',
    definition: 'Terms of Service. Rules by which one must agree to abide in order to use a service.',
    slug: 'tos',
    seoData: {
      detailedDescription: 'TOS (also known as Terms and Conditions) is a legal agreement between a service provider and a person who wants to use that service. The person must agree to abide by the rules in order to use the offered service.',
      examples: [
        'Checking the "I agree to the TOS" box when signing up for a new app',
        'A social media platform updating its TOS to change how it handles user data',
        'A company\'s legal team ensuring the TOS protects the business from liability'
      ],
      relatedTerms: ['Privacy Policy', 'Compliance', 'Contract']
    }
  },
  {
    name: 'UI',
    definition: 'User Interface. The space where interactions between humans and machines occur.',
    slug: 'ui',
    seoData: {
      detailedDescription: 'UI refers to the visual and interactive elements of a product, such as screens, buttons, icons, and menus. A good UI is intuitive, aesthetically pleasing, and makes it easy for a user to navigate a system or software.',
      examples: [
        'Designing a "dark mode" UI to reduce eye strain for users',
        'A developer using a UI kit (like Tailwind CSS) to build a consistent look for an app',
        'The touch-screen UI of a modern smartphone or tablet'
      ],
      relatedTerms: ['UX', 'Frontend', 'GUI']
    }
  },
  {
    name: 'URL',
    definition: 'Uniform Resource Locator. A colloquial term for a web address.',
    slug: 'url',
    seoData: {
      detailedDescription: 'A URL is the address of a unique resource on the web. It tells your browser exactly where to go to find a specific page, image, or file. Every URL consists of several parts, including the protocol (https) and the domain name (hmu.ai).',
      examples: [
        'Sharing a URL via email to direct someone to a specific product page',
        'A broken URL resulting in a "404 Not Found" error',
        'Optimizing a "slug" in a URL for better search engine rankings'
      ],
      relatedTerms: ['Domain', 'HTTP', 'Slug']
    }
  },
  {
    name: 'UX',
    definition: 'User Experience. A person\'s emotions and attitudes about using a product or system.',
    slug: 'ux',
    seoData: {
      detailedDescription: 'UX encompasses all aspects of a person\'s interaction with a company, its services, and its products. While UI focuses on the visual, UX focuses on the "feel" and usability—is the product useful, easy to use, and satisfying?',
      examples: [
        'Improving UX by reducing the number of steps in a checkout process',
        'Conducting user interviews to understand the "Pain Points" in the current UX',
        'A seamless UX leading to higher customer retention and brand loyalty'
      ],
      relatedTerms: ['UI', 'Product Design', 'Usability']
    }
  },
  {
    name: 'VC',
    definition: 'Venture Capital. A form of private equity provided to startups with high growth potential.',
    slug: 'vc',
    seoData: {
      detailedDescription: 'Venture Capital is a form of financing that investors provide to startup companies and small businesses that are believed to have long-term growth potential. In exchange for the capital, the VC firm typically receives an equity stake (ownership) in the company.',
      examples: [
        'A startup founder pitching their business to a VC firm in Silicon Valley',
        'Closing a $10 million Series A round with a lead VC investor',
        'Venture Capitalists taking a seat on the board of a company they invested in'
      ],
      relatedTerms: ['Startup', 'Angel Investor', 'Equity']
    }
  },
  {
     name: 'EOD',
     definition: 'End of Day. Used to indicate that a task should be completed by the close of business.',
     slug: 'eod',
     seoData: {
       detailedDescription: 'EOD is a common deadline in business, specifying that a deliverable is expected before the sender or recipient leaves for the day. It is often clarified by a specific timezone (e.g., EOD CST).',
       examples: [
         '"Please send me that finalized invoice by EOD."',
         'A project manager setting an EOD deadline for all team status updates',
       ],
       relatedTerms: ['Deadline', 'ASAP', 'ETA']
     }
  },
  {
     name: 'ETA',
     definition: 'Estimated Time of Arrival. The time at which a task, person, or shipment is expected to arrive.',
     slug: 'eta',
     seoData: {
       detailedDescription: 'Originally used in logistics and travel, ETA has become a general business term for the expected completion time of any project or task.',
       examples: [
         '"What is the ETA on that bug fix?"',
         'A shipping notification providing an ETA for a customer\'s order',
       ],
       relatedTerms: ['Deadline', 'Schedule', 'EOD']
     }
  }
];
