import { PrismaClient } from '@prisma/client'

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
    }).catch(() => {
      console.log("Error: Failed to transfer data to database")
    })
  } 
}

export default User;
