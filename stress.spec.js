import { test, expect } from "@playwright/test";

test("TC15 - Stress: 50 concurrent requests", async ({ request }) => {
  const requests = [];

  for (let i = 0; i < 50; i++) {
    requests.push(request.get("https://reqres.in/api/users/2"));
  }

  const responses = await Promise.all(requests);

  responses.forEach((res) => {
    expect(res.status()).toBe(200);
  });
});
