import nc from 'next-connect';
import User from '../../../lib/models/user';

const handler = nc()
  .post(async (req, res) => {
    const newUser = new User(req.body);

    await newUser.create().catch((err) => {
      return res.status(400).json({ message: err })
    })
    
    return res.json({ message: "Request sent no hitches :)" })
  })

export default handler;
