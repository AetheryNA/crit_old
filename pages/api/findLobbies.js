import nc from "next-connect";
import prisma from "../../lib/adapters/prismaClient";

const handler = nc().get(async (req, res) => {
  const lobbies = await prisma.lobby.findMany({
    include: {
      user: true,
    },
  });

  return res.json(lobbies);
});

export default handler;
