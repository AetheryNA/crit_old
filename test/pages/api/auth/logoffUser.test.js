import { expect, jest } from "@jest/globals"
import { ironSession } from "next-iron-session"
import nc from 'next-connect'

describe('User logoff testing', () => {
  jest.mock("next-connect")
  jest.mock("next-iron-session")

  const session = ironSession({
    cookieName: "crit-session",
    password: process.env.SECRET_COOKIE_PASSWORD,
  })

  test('should destroy the current user session', async () => {
    const testHandler = nc()
      .use(session)
      .post(async(req, res) => {
        await req.session.set('user', {
          username: "Hello"
        })

        req.session.destroy()

        expect(req.session.get('user')).toBe(null)
      })
  })
})

