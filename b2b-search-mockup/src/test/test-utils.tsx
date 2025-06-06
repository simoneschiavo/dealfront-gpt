import type { ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";

// Custom render function with any providers if needed in the future
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { ...options });

// Re-export everything from React Testing Library
export * from "@testing-library/react";
export { customRender as render };

// Common test utilities
export const mockCompanyData = {
  name: "Test Company",
  industry: "Technology",
  location: "Berlin, Germany",
  employees: "100-500",
  revenue: "€10M-50M",
  description: "A leading technology company",
};

export const mockContactData = {
  name: "John Doe",
  title: "Marketing Director",
  company: "Test Company",
  location: "Berlin, Germany",
  email: "john.doe@testcompany.com",
};

// Helper to wait for async operations
export const waitFor = (
  callback: () => void,
  timeout = 1000
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkCondition = () => {
      try {
        callback();
        resolve();
      } catch (error) {
        if (Date.now() - startTime >= timeout) {
          reject(error);
        } else {
          setTimeout(checkCondition, 50);
        }
      }
    };
    checkCondition();
  });
};
