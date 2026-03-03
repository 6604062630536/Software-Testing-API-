import { test, expect } from "@playwright/test";

test("TC18 - Error Handling: Invalid endpoint", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/unknownendpoint");

  expect(response.status()).toBe(404);
});
