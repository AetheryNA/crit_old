import nc from "next-connect";
import createLobby from "../../lib/models/createLobby";
import { withSession } from "../../lib/auth/session";

const handler = nc()
  .use(withSession)
  .post(async (req, res) => {
    const query = req.query;

    const createLobbyData = {
      lobby_name: req.body.lobby_name,
      owner_id: parseInt(query.user_id),
    };

    const newLobby = new createLobby(createLobbyData);

    newLobby.create().catch((err) => {
      console.log(err);
    });

    return res.end();
  });

export default handler;
