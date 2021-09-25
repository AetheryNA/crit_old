import { beforeAll, afterAll, describe, expect, jest } from "@jest/globals"
import prisma from "../../../../lib/adapters/prismaClient"
import bcrypt from "bcrypt"
import nc from "next-connect"

describe.skip("Login testing",() => {
  jest.mock("../../../../lib/adapters/prismaClient")
  jest.mock("bcrypt")
  jest.mock("next-connect")

  beforeAll(async () => {
    const saltRounds = 3
    const passedPassword = 'user99'
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassowrd = await bcrypt.hash(passedPassword, salt)

    await prisma.users.create({
      data: {
        username: 'user99',
        password: hashedPassowrd,
        email: 'user99@mail.com'
      }
    })
  })

  afterAll(async () => {
    await prisma.users.delete({
      where: {
        username: 'user99'
      }
    })

    prisma.$disconnect()
  })

  test("Check if username is found", async () => {
    await prisma.users.findUnique({
      where: {
        username: "user99",
      },
      select: {
        username: true,
      }
    }).then((user) => {
      expect(user.username).toEqual("user99")
    })
  })

  test("Check if password is decrypted", async () => {
    const loggedUser = await prisma.users.findUnique({
      where: {
        username: "user99",
      },
      select: {
        password: true,
      }
    })

    const retrievedPassword = loggedUser.password
    const sentPassword = "user99"
    const hashedPassword = await bcrypt.compare(sentPassword, retrievedPassword)

    expect(hashedPassword).toEqual(true)
  })

  test("Check if session is saved", async () => {
    const loggedUser = await prisma.users.findUnique({
      where: {
        username: "user99",
      },
      select: {
        id: true,
        username: true,
      }
    })

    const testHandler = nc()
      .post(async(req, res) => {
        req.session.set("user", {
          username: loggedUser.username,
          id: loggedUser.id
        })

        expect(req.session.get('user')).toEqual(true)
      })
  })
})
