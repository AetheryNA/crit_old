import Clock from '../../public/img/icons/clock.svg'

const LobbyHeader = ({username}) => {
  return (
    <div className="lobby-header flex flex-row w-full">
      <h3 className="flex flex-row"><Clock /> {username}'s Room </h3>
    </div>
  )
}

export default LobbyHeader
