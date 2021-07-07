import { jest, expect } from '@jest/globals'
import prisma from '../../../lib/adapters/client'

describe('Prisma Client', () => {
  jest.mock('../../../lib/adapters/client')

  test('should instantiate the Prisma Client', () => {
    expect(prisma).toBeTruthy()
  })
})
