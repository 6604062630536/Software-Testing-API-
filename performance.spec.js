import { test, expect } from "@playwright/test";

test("TC9 - Performance: Response time < 2 seconds", async ({ request }) => {
  const startTime = Date.now();

  const response = await request.get("https://reqres.in/api/users?page=2");

  const endTime = Date.now();
  const responseTime = endTime - startTime;

  console.log("Response Time:", responseTime, "ms");

  expect(response.status()).toBe(200);
  expect(responseTime).toBeLessThan(2000);
});

test("TC13 - Performance: Validate response size < 5KB", async ({
  request,
}) => {
  const response = await request.get("https://reqres.in/api/users/2");

  const body = await response.text();
  const sizeInBytes = Buffer.byteLength(body, "utf8");

  console.log("Response Size:", sizeInBytes, "bytes");

  expect(response.status()).toBe(200);
  expect(sizeInBytes).toBeLessThan(5000);
});
