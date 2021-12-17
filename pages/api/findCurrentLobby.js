import nc from "next-connect";
import prisma from "../../lib/adapters/prismaClient";

const handler = nc().get(async (req, res) => {
  const query = req.query;

  const findCurrentLobby = await prisma.lobby.findUnique({
    where: {
      lobby_id: parseInt(query.lobby_id),
    },
    include: {
      user: true,
    },
  });

  return res.json(findCurrentLobby);
});

export default handler;
