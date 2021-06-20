import nc from 'next-connect';
import User from '../../../lib/models/user';

const handler = nc()
  .post(async (req, res) => {

    const newUser = new User(req.body)
    const registeredUser = newUser.create()

    return res.json({
      message: "Req sent",
    })
  })

export default handler;
