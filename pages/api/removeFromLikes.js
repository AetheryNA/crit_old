import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'
import { withSession } from '../../lib/auth/session'

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    await prisma.posts.update({
      where: {
        post_id: req.body.post_id
      },
      data : {
        like_count : {
          decrement: 1
        } 
      }
    })

    await prisma.likes.deleteMany({
      where : {
        user_id: req.body.user_id,
        post_id: req.body.post_id,
      }
    })

    return res.end()
  })

export default handler
