import nc from "next-connect";
import prisma from "../../lib/adapters/prismaClient";
import { withSession } from "../../lib/auth/session";

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const lobbyId = parseInt(req.body.lobby_id);
    const userId = parseInt(req.body.user_id);

    const joinedUsers = await prisma.lobby.findUnique({
      where: {
        lobby_id: lobbyId,
      },
      select: {
        joined_users: true,
      },
    });

    if (joinedUsers.joined_users.includes(userId)) {
      res.end();
    } else {
      await prisma.lobby.update({
        where: {
          lobby_id: lobbyId,
        },
        data: {
          joined_users: {
            push: userId,
          },
        },
      });
    }

    return res.json({
      message: "Joined lobby",
    });
  });

export default handler;
