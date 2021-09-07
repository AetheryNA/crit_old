import { afterAll, expect, jest } from '@jest/globals'
import prisma from '../../../lib/adapters/prismaClient'

describe('Getting all trending posts', () => {
  jest.mock('../../../lib/adapters/prismaClient')

  afterAll(() => {
    prisma.$disconnect
  })

  test('should find related posts', async() => {
    const findTotalSocials = await prisma.posts.findMany({
      select : {
        post_id : true,
        like_count : true,
        reshare : true,
        total_social_count : true,
      },
      orderBy : {
        post_id : "asc"
      }
    })

    expect(findTotalSocials[0].post_id).toBe(1)
  })

  test('should add up two values', async() => {
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

      expect(element.total_social_count).toBe(total)
    });
  })

  test('should return the most trending post', async() => {
    const trendingAlgo = await prisma.posts.findFirst({
      where : {
        total_social_count : {
          gt : 46
        }
      },
      select : {
        post_id : true
      }
    })

    expect(trendingAlgo.post_id).toBe(3)
  })
})
