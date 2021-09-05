import Link from 'next/link'

const Lobbies = ({ lobbies }) => {
  const allLobbies = lobbies.map((lobby, index) => {
    return (
      <Link href={`/lobby/room/${lobby.lobby_id}`} key={index}>
        <div className="lobbies__lobby flex flex-row items-center">
          <div className="lobbies__info flex flex-row items-center">
            <img src="/img/critLogoph.svg" alt="" />
            <h3> {lobby.lobby_name} </h3>
          </div>
          <div className="lobbies__player-data ml-auto">
            <div className="lobbies__players">

            </div>
            <p> {lobby.user.id == lobby.owner_id && (lobby.user.username)} </p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div className="lobbies flex flex-col">
      {allLobbies}
    </div>
  )
}

export default Lobbies
