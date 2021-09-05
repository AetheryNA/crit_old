import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import Lobbies from '../../src/components/Lobbies'
import { withSessionSSR } from '../../lib/auth/session'

const index = ({ allLobbies }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader iconLobby={true} />
        <Lobbies lobbies={allLobbies}/>
      </div>
    </>
  )
}

export const getServerSideProps = withSessionSSR(async function(context) {
  const { req } = context
  const user = req.session.get('user')

  const [allLobbiesRes] = await Promise.all([
    fetch(`${process.env.BASE_URL}/api/findLobbies`),
  ])

  const [allLobbies] = await Promise.all([
    allLobbiesRes.json()
  ])

  return {
    props : {
      user,
      allLobbies,
    }
  }
})

export default index
