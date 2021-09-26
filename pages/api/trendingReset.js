import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'

const handler = nc()
  .get(async (req, res) => {
    await prisma.posts.updateMany({
      data : {
        reshare : 0
      }
    })

    return res.json({
      message : 'Trending reset'
    })
  })

export default handler
