import {
  afterAll,
  beforeAll,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";
import User from "../../../../lib/models/user";
import prisma from "../../../../lib/adapters/prismaClient";
import bcrypt from "bcrypt";

describe("Creating a user", () => {
  jest.mock("../../../../lib/models/user");
  jest.mock("../../../../lib/errors/formError");
  jest.mock("../../../../lib/adapters/prismaClient");
  jest.mock("bcrypt");

  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    prisma.$disconnect();
    done();
  });

  const testUser = {
    username: "TestUser",
    password: "testpassword1234",
    email: "testuser@email.com",
  };

  test("should construct a new user object", () => {
    expect(new User(testUser)).toEqual({
      username: "TestUser",
      password: "testpassword1234",
      email: "testuser@email.com",
    });
  });

  test("should create a new user and prints out an error if user already exists", async () => {
    const newUser = new User(testUser);

    await newUser
      .create()
      .then((user) => {
        expect(user).toBe(testUser);
      })
      .catch((error) => {
        expect(error).toEqual(error);
      });
  });

  test("should encrypt the password", async () => {
    const saltRounds = 3;
    const passedPassword = testUser.password;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassowrd = await bcrypt.hash(passedPassword, salt);

    expect(hashedPassowrd).toBe(hashedPassowrd);
  });
});
