import nc from "next-connect";
import prisma from '../../lib/adapters/prismaClient'
import { withSession } from "../../lib/auth/session";

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const data = req.body

    const personality_weight = data.q1 + data.q2 + data.q3

    let personality_type
    let personality_msg
    
    if (personality_weight >= 9) {
      personality_type = 'Lone-wolf'
      personality_msg = "He is a very independent or solitary person. He has trouble trusting others and only relies on himself to get things done. He is hard to get close to, but if you manage to, you'll find him to be a very loyal friend. He is very powerful, powerful enough to tear an entire country apart, but he is extremely careful about what he does. He is very secretive, but if he finds that he can trust someone, he will do anything to help that person."
    }
    
    if (personality_weight >= 6) {
      personality_type = 'Independant'
      personality_msg = "He's constantly trying to make his own decisions about what he wants to do and is willing to face the consequences of his actions. He's someone that doesn't constantly think about what 'society' thinks is 'normal' and knows how to act around others mysteriously. Someone who doesn't listen to the rules and is free to do whatever they want—that's someone who's their own person. They can come off as kind of unruly, but that's what makes them so fun to be around! They do things their way, and they aren't afraid to try new things. If you're looking to get away from the mundane, free yourself to become your true self!"
    }
    
    if (personality_weight >= 3) {
      personality_type = 'Leader'
      personality_msg = "He's someone who knows how to talk to people, make them feel comfortable, and get anything done. He's the one who will make sure everyone is on the same page, and he'll make sure everyone has fun while doing it. He's great at communicating with people and making sure that people are safe. He's someone who will take charge and make sure that the team is having fun and enjoying themselves. As the shot caller, he is someone that's confident and not afraid to break the mold and try something new. Giving orders should come naturally and be something that he should enjoy. He should be decisive. He should be hardworking and able to lead other people."
    }

    if (personality_weight >= 0) {
      personality_type = 'Captain'
      personality_msg = "With the power in his hands, he's in control of the way his crew move. He can, in fact, give them an idea of what he wants to do next. The crew is in full     force when it comes to the way they move. And when necessary, he can fire them up when he needs to. He's in control of the way they move. It's way more than just making them move, he's in control of their spirit, their energy, their passion. With the power in his hands, he's in control of the way they move."
    }
    
    await prisma.users.update({
      where : {
        id: data.user_id
      },
      data : {
        personality_weight: personality_weight,
        personality_type: personality_type,
      }
    })

    return res
      .status(200)
      .json({
        message: "Personality added",
        weight: personality_weight,
        type: personality_type,
        personality_msg: personality_msg,
      })
  })

export default handler
