import "vitest";

declare global {
  var describe: typeof import("vitest").describe;
  var it: typeof import("vitest").it;
  var expect: typeof import("vitest").expect;
  var beforeAll: typeof import("vitest").beforeAll;
  var afterAll: typeof import("vitest").afterAll;
  var beforeEach: typeof import("vitest").beforeEach;
  var afterEach: typeof import("vitest").afterEach;
  var vi: typeof import("vitest").vi;
}
