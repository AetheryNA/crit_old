import nc from "next-connect";
import withSession from "../../lib/auth/session";
import prisma from "../../lib/adapters/prismaClient";

const handler = nc()
  .use(withSession)
  .get(async (req, res) => {
    const user = req.session.get("user");

    const findPosts = await prisma.posts
      .findMany({
        include: {
          author: true,
        },
        where: {
          user_id: user.id,
        },
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong",
          err: err,
        });
      });

    return res.json({
      findPosts,
    });
  });

export default handler;
