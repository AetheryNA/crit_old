import dynamic from "next/dynamic";
import Head from "next/head";
import LobbyHeader from "../../../src/components/LobbyHeader";
import LobbyUsers from "../../../src/components/LobbyUsers";
import LobbyGameSelect from "../../../src/components/LobbyGameSelect";
import { withSessionSSR } from "../../../lib/auth/session";

const AblyChatComponent = dynamic(
  () => import("../../../src/components/ablyComponents/AblyChat"),
  { ssr: false }
);

const index = ({ user, currentLobby }) => {
  return (
    <>
      <Head>
        <title> CRIT | {currentLobby.lobby_name} </title>
      </Head>

      <main className="flex flex-col w-full">
        <LobbyHeader lobbyName={currentLobby.lobby_name} />
        <div className="flex flex-row">
          <div className="dashboard-left flex flex-col mt-8">
            <div className="flex flex-row">
              <LobbyUsers
                joinedUsers={currentLobby.joined_users}
                currentLobby={currentLobby}
                loggedUser={user}
              />
              <LobbyGameSelect />
            </div>
            <AblyChatComponent
              loggedUser={user}
              lobbyName={currentLobby.lobby_name}
            />
          </div>
          <div className="dashboard-right"></div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = withSessionSSR(async function (context) {
  const { req } = context;
  const user = req.session.get("user");

  const [currentLobbyRes] = await Promise.all([
    fetch(
      `${process.env.BASE_URL}/api/findCurrentLobby?lobby_id=${context.params.rid}`
    ),
  ]);

  const [currentLobby] = await Promise.all([currentLobbyRes.json()]);

  return {
    props: {
      user,
      currentLobby,
    },
  };
});

export default index;
