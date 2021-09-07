import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'
import { withSession } from '../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    await prisma.lobby.update({
      where : {
        lobby_id : parseInt(req.body.lobby_id)
      },
      data : {
        joined_users : {
          push : parseInt(req.body.user_id)
        }
      }
    })

    return res.json({
      message: "Joined lobby"
    })
  })

export default handler
