import nc from 'next-connect'
import withSession from '../../lib/auth/session'
import Post from '../../lib/models/post'

const handler = nc()
  .use(withSession)
  .post(async(req, res) => {
    const user = req.session.get('user')
    const userId = {
      user_id : user.id
    }
    const data = JSON.parse(req.body)
    const postData = Object.assign(userId, data)

    const newPost = new Post(postData)

    await newPost.createPost().catch((err) => {
      return res
        .status(400)
        .json({
          message: 'Something went wrong',
          error: err,
        })
    })

    return res.json({
      message: 'post done'
    })
  })

export default handler
