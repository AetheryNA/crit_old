import nc from 'next-connect'
import prisma from '../../../lib/adapters/client'
import bcrypt from 'bcrypt'
import withSession from '../../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const sessionExist = req.session.get('user')

    if(sessionExist) {
      res.redirect('/signup')
    }

    const body = req.body

    const loggedUser = await prisma.users.findUnique({
      where: {
        username: body.username,
      },
      select: {
        id: true,
        username: true,
        password: true,
        email: true,
      }
    })

    const retrievedPassword = loggedUser.password

    const validatePassword = await bcrypt.compare(body.password, retrievedPassword)

    if(!validatePassword)
      throw new Error('Wrong password')

    req.session.set('user', {
      id: loggedUser.id,
      username: loggedUser.username,
      email: loggedUser.email
    })

    await req.session.save()

    return res
      .status(200)
      .json({
        message: 'Logged in',
        data: loggedUser
      })
  })

export default handler
