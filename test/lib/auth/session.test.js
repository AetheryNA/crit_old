import { expect, jest } from "@jest/globals";
import { ironSession } from "next-iron-session";

describe("Iron session", () => {
  jest.mock("next-iron-session");
  jest.mock("next-connect");

  test("Check if session is created", () => {
    expect(
      ironSession({
        cookieName: "crit-session",
        password: process.env.SECRET_COOKIE_PASSWORD,
      })
    ).toBeDefined();
  });
});
