// Suggested prompts for the B2B Search Intelligence mockup
// These are based on the examples from the PRD

export interface SuggestedPrompt {
  id: string;
  text: string;
  category: "company" | "contact" | "market";
  description: string;
}

export const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  {
    id: "marketing-directors-saas-berlin",
    text: "Show me marketing directors at SaaS companies in Berlin",
    category: "contact",
    description: "Find marketing decision-makers in Berlin tech companies",
  },
  {
    id: "series-a-fintech",
    text: "Find companies that recently raised Series A funding in fintech",
    category: "company",
    description: "Discover recently funded fintech startups",
  },
  {
    id: "manufacturing-decision-makers",
    text: "Who are the key decision-makers at manufacturing companies in Bavaria?",
    category: "contact",
    description: "Identify manufacturing industry leaders in Bavaria",
  },
  {
    id: "enterprise-software-companies",
    text: "List enterprise software companies with 500-1000 employees",
    category: "company",
    description: "Find mid-size enterprise software companies",
  },
  {
    id: "procurement-automotive",
    text: "Find contacts responsible for procurement at automotive suppliers",
    category: "contact",
    description: "Locate procurement professionals in automotive supply chain",
  },
  {
    id: "german-market-expansion",
    text: "Show me companies expanding into the German market this year",
    category: "market",
    description: "Companies with recent German market expansion",
  },
  {
    id: "sales-ops-b2b-tech",
    text: "Who leads sales operations at B2B tech companies?",
    category: "contact",
    description: "Find sales operations leaders in B2B technology",
  },
  {
    id: "salesforce-healthcare",
    text: "Find companies using Salesforce in the healthcare industry",
    category: "company",
    description: "Healthcare companies using Salesforce CRM",
  },
];
