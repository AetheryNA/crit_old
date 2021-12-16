import nc from "next-connect";
import prisma from "../../lib/adapters/prismaClient";
import { withSession } from "../../lib/auth/session";

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const lobbyId = parseInt(req.body.lobby_id);
    const deleteUserId = parseInt(req.body.user_id);

    const joinedUsers = await prisma.lobby.findUnique({
      where: {
        lobby_id: lobbyId,
      },
      select: {
        joined_users: true,
      },
    });

    if (joinedUsers.joined_users.includes(deleteUserId)) {
      let updatedUsers = joinedUsers.joined_users.splice(deleteUserId);

      await prisma.lobby.update({
        where: {
          lobby_id: lobbyId,
        },
        data: {
          joined_users: updatedUsers,
        },
      });
    }

    return res.end();
  });

export default handler;
