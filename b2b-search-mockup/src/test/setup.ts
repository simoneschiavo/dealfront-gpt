import "@testing-library/jest-dom";

// Add any global test setup here
// For example, you could add global mocks, test utilities, etc.

// Mock console.warn and console.error in tests to reduce noise
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = (...args: any[]) => {
    // Only show warnings that are not React development warnings
    if (typeof args[0] === "string" && !args[0].includes("React")) {
      originalWarn(...args);
    }
  };

  console.error = (...args: any[]) => {
    // Only show errors that are not React development warnings
    if (typeof args[0] === "string" && !args[0].includes("React")) {
      originalError(...args);
    }
  };
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});
