import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'

const handler = nc()
  .get(async (req, res) => {
    const findTotalSocials = await prisma.posts.findMany({
      select : {
        post_id : true,
        like_count : true,
        reshare : true,
        total_social_count : true,
      }
    })

    findTotalSocials.forEach(async(element) => {
      let total = element.like_count + element.reshare

      await prisma.posts.updateMany({
        where : {
          post_id : element.post_id
        },
        data : {
          total_social_count : total
        },
      })
    });

    const trendingAlgo = await prisma.posts.findMany({
      where : {
        total_social_count : {
          gt : 25
        }
      },
      include : {
        author: true,
        likes: true,
      },
      orderBy : {
        post_id : "asc"
      }
    })

    return res.json(trendingAlgo)
  })

export default handler
