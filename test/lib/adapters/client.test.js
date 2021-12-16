import { jest, expect } from "@jest/globals";
import prisma from "../../../lib/adapters/prismaClient";

describe("Prisma Client", () => {
  jest.mock("../../../lib/adapters/prismaClient");

  test("should instantiate the Prisma Client", () => {
    expect(prisma).toBeTruthy();
  });
});
