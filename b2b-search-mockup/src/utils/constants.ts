// Application constants for the B2B Search Intelligence mockup

export const SEARCH_LIMITS = {
  MAX_FREE_SEARCHES: 5,
  RESULTS_SHOWN_FREE: 3,
  SESSION_RESET_HOURS: 24,
} as const;

export const LOADING_MESSAGES = {
  SEARCHING: "Searching...",
  PROCESSING: "Processing your query...",
  ANALYZING: "Analyzing results...",
} as const;

export const SEARCH_PLACEHOLDERS = [
  "Find marketing directors at SaaS companies in Berlin",
  "Show me enterprise software companies with 500+ employees",
  "Who leads sales operations at B2B tech companies?",
  "Companies that recently raised Series A funding",
] as const;

export const INDUSTRIES = [
  "Technology",
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "E-commerce",
  "Consulting",
  "Media & Entertainment",
  "Automotive",
  "Real Estate",
  "Education",
] as const;

export const COMPANY_SIZES = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5000+",
] as const;

export const LOCATIONS = [
  "Berlin, Germany",
  "Munich, Germany",
  "Hamburg, Germany",
  "Frankfurt, Germany",
  "London, UK",
  "Paris, France",
  "Amsterdam, Netherlands",
  "Stockholm, Sweden",
  "Vienna, Austria",
  "Zurich, Switzerland",
] as const;

export const DEPARTMENTS = [
  "Marketing",
  "Sales",
  "Engineering",
  "Product",
  "Operations",
  "Finance",
  "Human Resources",
  "Customer Success",
  "Business Development",
  "IT",
] as const;
