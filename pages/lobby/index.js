import InnerdashboardHeader from "../../src/components/InnerdashboardHeader";
import Lobbies from "../../src/components/Lobbies";
import LobbyQuizPrompt from "../../src/components/LobbyQuizPrompt";
import { withSessionSSR } from "../../lib/auth/session";

const index = ({
  allLobbies,
  user,
  currentQuizStatus,
  getLoggedUserPersonality,
}) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader iconLobby={true} />
        <Lobbies
          lobbies={allLobbies}
          loggedUser={user}
          personality={getLoggedUserPersonality}
        />
      </div>
      <div className="dashboard-right ml-4">
        {currentQuizStatus.personality_type == undefined ? (
          <LobbyQuizPrompt />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export const getServerSideProps = withSessionSSR(async function (context) {
  const { req } = context;
  const user = req.session.get("user");

  const [allLobbiesRes, currentQuizStatusRes, getLoggedUserPersonalityRes] =
    await Promise.all([
      fetch(`${process.env.BASE_URL}/api/findLobbies`),
      fetch(`${process.env.BASE_URL}/api/findQuizStatus?user_id=${user.id}`),
      fetch(`${process.env.BASE_URL}/api/getUser?user_id=${user.id}`),
    ]);

  const [allLobbies, currentQuizStatus, getLoggedUserPersonality] =
    await Promise.all([
      allLobbiesRes.json(),
      currentQuizStatusRes.json(),
      getLoggedUserPersonalityRes.json(),
    ]);

  return {
    props: {
      user,
      allLobbies,
      currentQuizStatus,
      getLoggedUserPersonality,
    },
  };
});

export default index;
