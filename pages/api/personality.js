import nc from "next-connect";
import prisma from '../../lib/adapters/prismaClient'
import { withSession } from "../../lib/auth/session";

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const data = req.body

    const personality_Weight = data.q1 + data.q2 + data.q3

    let personality_Type

    if (personality_Weight >= 0) 
      personality_Type = 'Captain'

    if (personality_Weight >= 3)
      personality_Type = 'Leader'

    if (personality_Weight >= 6) 
      personality_Type = 'Independant'
    
    if (personality_Weight >= 9)
      personality_Type = 'Lone-wolf'

    await prisma.users.update({
      where : {
        id: 1
      },
      data : {
        personality_weight: personality_Weight,
        personality_type: personality_Type,
      }
    })

    return res
      .status(200)
      .json({
        message: "Personality added",
        weight: personality_Weight,
        type: personality_Type,
      })
  })

export default handler
