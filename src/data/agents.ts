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
  // Placeholder initial data to test the routing
  {
    slug: "lead-qualification-operator",
    industrySlug: "real-estate",
    agentType: "Operator",
    taskName: "Lead Qualification",
  }
];

export function getAgentsByIndustry(industrySlug: string) {
  return agentUseCases.filter(a => a.industrySlug === industrySlug);
}

export function getAgentBySlug(industrySlug: string, agentSlug: string) {
  return agentUseCases.find(a => a.industrySlug === industrySlug && a.slug === agentSlug);
}
