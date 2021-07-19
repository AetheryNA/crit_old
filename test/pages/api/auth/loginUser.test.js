import { beforeAll, afterAll, describe, expect, jest } from "@jest/globals"
import prisma from "../../../../lib/adapters/client"
import bcrypt from "bcrypt"
import nc from "next-connect"

describe("Login testing",() => {
  jest.mock("../../../../lib/adapters/client")
  jest.mock("bcrypt")
  jest.mock("next-connect")

  beforeAll(done => {
    done()
  })

  afterAll(done => {
    prisma.$disconnect()
    done()
  })

  test("Check if username is found", async () => {
    await prisma.users.findUnique({
      where: {
        username: "bcrypt",
      },
      select: {
        username: true,
      }
    }).then((user) => {
      expect(user.username).toEqual("bcrypt")
    })
  })

  test("Check if password is decrypted", async () => {
    const loggedUser = await prisma.users.findUnique({
      where: {
        username: "bcrypt",
      },
      select: {
        password: true,
      }
    })

    const retrievedPassword = loggedUser.password
    const sentPassword = "bcrypt"
    const hashedPassword = await bcrypt.compare(sentPassword, retrievedPassword)

    expect(hashedPassword).toEqual(true)
  })

  test("Check if session is saved", async () => {
    const loggedUser = await prisma.users.findUnique({
      where: {
        username: "bcrypt",
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
