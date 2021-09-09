import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import Lobbies from '../../src/components/Lobbies'
import LobbyQuizPrompt from '../../src/components/LobbyQuizPrompt'
import { withSessionSSR } from '../../lib/auth/session'

const index = ({ allLobbies, user, currentQuizStatus }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader iconLobby={true} />
        <Lobbies lobbies={allLobbies} loggedUser={user} />
      </div>
      <div className="dashboard-right ml-4">
        { currentQuizStatus.personality_type == undefined ? <LobbyQuizPrompt /> : '' }
      </div>
    </>
  )
}

export const getServerSideProps = withSessionSSR(async function(context) {
  const { req } = context
  const user = req.session.get('user')

  const [allLobbiesRes, currentQuizStatusRes] = await Promise.all([
    fetch(`${process.env.BASE_URL}/api/findLobbies`),
    fetch(`${process.env.BASE_URL}/api/findQuizStatus?user_id=${user.id}`),
  ])

  const [allLobbies, currentQuizStatus] = await Promise.all([
    allLobbiesRes.json(),
    currentQuizStatusRes.json(),
  ])

  return {
    props : {
      user,
      allLobbies,
      currentQuizStatus,
    }
  }
})

export default index
