import { PrismaClient } from '@prisma/client'
import formError from '../errors/formError'

class User {
  constructor({ username, password, email } = {}) {
    this.username = username,
    this.password = password,
    this.email = email
  }
  
  async create() {
    const prisma = new PrismaClient()

    await prisma.users.create({
      data: {
        username: this.username,
        password: this.password,
        email: this.email
      }
    }).catch((err) => {
      throw new formError({
        message: `Woopsie something went wrong T.T, The data sent through already exists! Please change: (${err.meta.target})`,
        target: err.meta.target
      })
    })
  } 
}

export default User
