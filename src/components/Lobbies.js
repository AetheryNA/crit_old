import Link from 'next/link'

const Lobbies = () => {
  return (
    <div className="lobbies flex flex-col">
      <Link href="/lobby/room/">
        <div className="lobbies__lobby flex flex-row items-center">
          <div className="lobbies__info flex flex-row items-center">
            <img src="/img/pfp.png" alt="" />
            <h3> Lobby name </h3>
          </div>
          <div className="lobbies__player-data ml-auto">
            <div className="lobbies__players">

            </div>
            <p> Owner </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Lobbies
