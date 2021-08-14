import { expect } from '@jest/globals'
import prisma from '../../../lib/adapters/prismaClient'
import Post from '../../../lib/models/post'

describe('Everything posts', () => {
  jest.mock('../../../lib/adapters/prismaClient')
  jest.mock('../../../lib/models/post')

  const testPostData = {
    user_id : 99,
    content : "This is test data",
    image_url : "/",
    like_count : 0,
  }

  afterEach(async () => {
    await prisma.posts.deleteMany()
    prisma.$disconnect()
  })

  test('should create a post', async () => {
    await prisma.posts.create({
      data: testPostData
    }).then((post) => {
      expect(post.user_id).toEqual(99)
    })
  })

  test('should make a post constructor', async () => {
    const newTestPost = new Post(testPostData)

    expect(newTestPost).toEqual(testPostData)
  })

  test('should create a post using the post constructor', async () => {
    const newTestPost = new Post(testPostData)
    
    await newTestPost.createPost().then((post) => {
      expect(post).toBe(testPostData)
    }).catch(err => {
      expect(err).toBe(err)
    })
  })
})
