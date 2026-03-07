import { ecommerceAgents } from './agents/e-commerce';
import { realestateAgents } from './agents/real-estate';
import { marketingagenciesAgents } from './agents/marketing-agencies';
import { contentcreatorsAgents } from './agents/content-creators';
import { saasfoundersAgents } from './agents/saas-founders';
import { consultantsAgents } from './agents/consultants';
import { freelancedevelopersAgents } from './agents/freelance-developers';
import { onlinecoachesAgents } from './agents/online-coaches';

export interface AgentUseCase {
  slug: string;
  industrySlug: string;
  agentType: "Architect" | "Builder" | "Money" | "Operator";
  taskName: string; // e.g., "Lead Qualification"
  seoData?: {
    h1?: string;
    commandExample?: string;
    benefits?: string[];
    sampleOutput?: string;
    integrationDetails?: string;
    faqs?: { question: string; answer: string }[];
  };
}

export const agentUseCases: AgentUseCase[] = [
  ...ecommerceAgents,
  ...realestateAgents,
  ...marketingagenciesAgents,
  ...contentcreatorsAgents,
  ...saasfoundersAgents,
  ...consultantsAgents,
  ...freelancedevelopersAgents,
  ...onlinecoachesAgents
];

export function getAgentsByIndustry(industrySlug: string) {
  return agentUseCases.filter(a => a.industrySlug === industrySlug);
}

export function getAgentBySlug(industrySlug: string, agentSlug: string) {
  return agentUseCases.find(a => a.industrySlug === industrySlug && a.slug === agentSlug);
}
