import { afterAll, expect, jest } from "@jest/globals";
import prisma from "../../../lib/adapters/prismaClient";

describe.skip("Should add a Like to a post", () => {
  jest.mock("../../../lib/adapters/prismaClient");

  afterAll(async () => {
    await prisma.posts.update({
      where: {
        post_id: 2,
      },
      data: {
        like_count: {
          decrement: 1,
        },
      },
    });

    await prisma.likes.deleteMany({
      where: {
        user_id: 1,
        post_id: 2,
      },
    });

    prisma.$disconnect;
  });

  test("should add a like to a post", async () => {
    const addLike = await prisma.posts.update({
      where: {
        post_id: 2,
      },
      data: {
        like_count: {
          increment: 1,
        },
      },
    });

    expect(addLike.like_count).toBe(1);
  });

  test("should create a like record in the likes table", async () => {
    const createLikeRecord = await prisma.likes.create({
      data: {
        user_id: 1,
        post_id: 2,
        isLiked: true,
      },
    });

    expect(createLikeRecord.isLiked).toBe(true);
  });
});
