import { afterAll, expect, jest } from '@jest/globals'
import prisma from '../../../lib/adapters/prismaClient'

describe('Should add to shares table', () => {
  jest.mock('../../../lib/adapters/prismaClient')

  afterAll(async() => {
    await prisma.posts.update({
      where: {
        post_id: 2
      },
      data : {
        reshare : {
          decrement: 1
        } 
      }
    })

    await prisma.shares.deleteMany({
      where : {
        user_id: 1,
        post_id: 2,
      }
    })

    prisma.$disconnect
  })
  
  test('should increment the share count on the posts table', async() => {
    const addShareCount = await prisma.posts.update({
      where: {
        post_id: 2
      },
      data : {
        reshare : {
          increment: 1
        } 
      }
    })

    expect(addShareCount.reshare).toBe(1)
  })
  
  test('should add the share record to the shares table', async() => {
    
    const addToShareTable = await prisma.shares.create({
      data : {
        user_id: 1,
        post_id: 2,
      }
    })

    expect(addToShareTable.user_id).toBe(1)
  })
})
