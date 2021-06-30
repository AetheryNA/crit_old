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

    prisma.users.create({
      data: {
        username: this.username,
        password: this.password,
        email: this.email
      }
    }).catch((err) => {
      try {
        throw new formError({
          message: `Woopsie something went wrong T.T, The data sent through already exists! Please change: (${err.meta.target})`,
          target: err.meta.target
        })
      } catch (error) {
        console.log(error)
      }
    })
  } 
}

export default User
