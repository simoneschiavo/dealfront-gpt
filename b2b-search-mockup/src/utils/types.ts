// Base types for the B2B Search Intelligence mockup

export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  employees: string;
  revenue: string;
  description: string;
  website?: string;
  foundedYear?: number;
}

export interface Contact {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  email: string;
  linkedinUrl?: string;
  department?: string;
}

export interface SearchResult {
  id: string;
  type: "company" | "contact";
  data: Company | Contact;
  relevanceScore?: number;
}

export interface SearchQuery {
  query: string;
  type?: "company" | "contact" | "mixed";
  timestamp: number;
}

export interface SearchSession {
  searchCount: number;
  maxSearches: number;
  lastReset: number;
  queries: SearchQuery[];
}

export type ResultCardType = "company" | "contact";

export interface LoadingState {
  isLoading: boolean;
  message?: string;
}

export interface SearchFilters {
  industry?: string;
  location?: string;
  companySize?: string;
  department?: string;
}
