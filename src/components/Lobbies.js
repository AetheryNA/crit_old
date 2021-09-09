import axios from "axios"
import Recommended from '../../public/img/icons/quality.svg'

const Lobbies = ({ lobbies, loggedUser, personality }) => {
  const allLobbies = lobbies.map((lobby, index) => {
    const joinLobby = async() => {
      if (loggedUser.id !== lobby.owner_id) {
        axios
          .post(`${process.env.BASE_URL}/api/joinLobby`, {
            lobby_id : lobby.lobby_id,
            user_id : loggedUser.id,
          })
          .catch(err => console.log(err))
          .then(() => { console.log(`Joined ${lobby.lobby_name}`) })
      }
      
      return
    }

    return (
      <a href={`/lobby/room/${lobby.lobby_id}`} key={index} onClick={joinLobby}>
        <div className="lobbies__lobby flex flex-row items-center">
          <div className="lobbies__info flex flex-row items-center">
            <div className="lobbies__image relative">
              <img src="/img/critLogoph.svg" alt="" />
              { personality.personality_type == lobby.user.personality_type && (<div className="recommended"> <Recommended /> </div>) }
            </div>

            <h3> {lobby.lobby_name} </h3>
          </div>
          <div className="lobbies__player-data ml-auto">
            <div className="lobbies__players">
            </div>
            <p> {lobby.user.id == lobby.owner_id && (lobby.user.username)} </p>
          </div>
        </div>
      </a>
    )
  })

  return (
    <div className="lobbies flex flex-col">
      {allLobbies}
    </div>
  )
}

export default Lobbies
