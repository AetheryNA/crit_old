import { expect, jest } from "@jest/globals"
import { ironSession } from "next-iron-session";
import nc from "next-connect"

describe('Getting the user session', () => {
  jest.mock("next-connect")
  jest.mock("next-iron-session")

  const session = ironSession({
    cookieName: "crit-session",
    password: process.env.SECRET_COOKIE_PASSWORD,
  })

  test('should find the user session', async () => {
    const handler = nc()
      .use(session)
      .get(async(req, res) => {
        req.session.set('user', {
          username: "test"
        })

        const user = req.session.get('user')
        
        expect(user.username).toEqual("test")
      })
  })

  test('should return a response if the user exists', async () => {
    const handler = nc()
      .use(session)
      .get(async(req, res) => {
        req.session.set('user', {
          username: "test"
        })

        const user = req.session.get('user')

        if(user) {
          return res.json({
            LoggedIn: true,
            ...user
          })
        }

        expect(res.json).toEqual({ LoggedIn: true, ...user })
      })
  })

  test('should return a response if the user doesnt exist', () => {
    const handler = nc()
      .use(session)
      .get(async(req, res) => {
        if(!user) {
          return res.json({
            LoggedIn: false
          })
        }

        expect(res.json).toEqual({ LoggedIn: false })
      })
  })
})
