import { useEffect, useState } from "react";
import axios from "axios";

const LobbyUsers = ({ loggedUser, joinedUsers }) => {
  console.log(joinedUsers);
  console.log(loggedUser);

  const joined = joinedUsers.map((user, index) => {
    const [joinedUser, setJoinedUser] = useState()

    useEffect(() => {
      axios.get(`${process.env.BASE_URL}/api/getUser?user_id=${user}`)
        .then(res => {
          setJoinedUser(res.data)
        })
    }, [joinedUsers])

    return (
      <>
        { joinedUser && (
        <div className="lobby-users__user flex flex-row" key={index}>
          <div className="lobby-users__info flex flex-row items-center">
            <img src={`/${joinedUser.avatar_url}`}/>
            <h3> {joinedUser.username} </h3>
          </div>
          <div className="lobby-users__state flex flex-row items-center ml-auto">
            <h3> Ready </h3>
            <div className="lobby-users__circle ready"></div>
          </div>
        </div>
        )}
      </>
    )
  })

  return (
    <section className="lobby-users">
      <div className="lobby-users__user flex flex-row">
        <div className="lobby-users__info flex flex-row items-center">
          <img src={`/${loggedUser.avatar_url}`}/>
          <h3> {loggedUser.username} </h3>
        </div>
        <div className="lobby-users__state flex flex-row items-center ml-auto">
          <h3> Ready </h3>
          <div className="lobby-users__circle ready"></div>
        </div>
      </div>

      {joined && (joined)}
    </section>
  )
}

export default LobbyUsers
