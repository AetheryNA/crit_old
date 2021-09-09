import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'
import { withSession } from '../../lib/auth/session';

const handler = nc()
  .use(withSession)
  .get(async (req, res) => {
    const query = req.query

    const quizStatus = await prisma.users.findUnique({
      where : {
        id : parseInt(query.user_id)
      },
      select : {
        personality_type : true
      },
    })

    return res.json(quizStatus)
  })

export default handler;
