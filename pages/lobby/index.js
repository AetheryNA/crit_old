import dynamic from 'next/dynamic'
import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import Lobbies from '../../src/components/Lobbies';

const index = () => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader iconLobby={true}/>
        <Lobbies />
      </div>
    </>
  )
}

export default index
