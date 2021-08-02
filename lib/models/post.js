import prisma from '../adapters/prismaClient'

class Post {
  constructor({ user_id, content, image_url, like_count } = {}) {
    this.user_id = user_id,
    this.content = content,
    this.image_url = image_url,
    this.like_count = like_count
  }

  async createPost() {
    await prisma.posts.create({
      data: {
        user_id : this.user_id,
        content : this.content,
        image_url : this.image_url,
        like_count : this.like_count
      }
    }).catch(err => {
      throw new Error({
        message: "Something went wrong",
        error: err,
      })
    })
  }
}

export default Post
