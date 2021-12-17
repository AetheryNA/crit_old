import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Exit from "../../public/img/icons/exit.svg";

const LobbyUsers = ({ joinedUsers, currentLobby, loggedUser }) => {
  const router = useRouter();

  const joined = joinedUsers.map((user, index) => {
    const [joinedUser, setJoinedUser] = useState();

    useEffect(() => {
      axios
        .get(`${process.env.BASE_URL}/api/getUser?user_id=${user}`)
        .then((res) => {
          setJoinedUser(res.data);
        });
    }, [joinedUsers]);

    const exitLobby = async () => {
      axios
        .post(`${process.env.BASE_URL}/api/deleteUserFromLobby`, {
          lobby_id: currentLobby.lobby_id,
          user_id: joinedUser.id,
        })
        .then(() => {
          router.back();
        });
    };

    return (
      joinedUser && (
        <div className="lobby-users__user flex flex-row" key={index}>
          <div className="lobby-users__info flex flex-row items-center">
            <img src={`/${joinedUser.avatar_url}`} />
            <h3> {joinedUser.username} </h3>

            {loggedUser.id === joinedUser.id && (
              <button className="lobby-users__exit" onClick={exitLobby}>
                <Exit />
              </button>
            )}
          </div>
          <div className="lobby-users__state flex flex-row items-center ml-auto">
            <h3> Ready </h3>
            <div className="lobby-users__circle ready"></div>
          </div>
        </div>
      )
    );
  });

  return (
    <section className="lobby-users">
      <div className="lobby-users__user flex flex-row">
        <div className="lobby-users__info flex flex-row items-center">
          <img src={`/${currentLobby.user.avatar_url}`} />
          <h3> {currentLobby.user.username} </h3>
        </div>
        <div className="lobby-users__state flex flex-row items-center ml-auto">
          <h3> Ready </h3>
          <div className="lobby-users__circle ready"></div>
        </div>
      </div>

      {joined && joined}
    </section>
  );
};

export default LobbyUsers;
