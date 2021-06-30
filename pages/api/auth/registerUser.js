import nc from 'next-connect';
import User from '../../../lib/models/user';

const handler = nc()
  .post(async (req, res) => {
    try {
      const newUser = new User(req.body)
      const registeredUser = newUser.create()

      if (!res.ok)
        return res.status(400).json({ message: "Bad request sent T.T" })
      else
        return res.json({ message: "Request sent no hitches :)" })
      
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  })

export default handler;
