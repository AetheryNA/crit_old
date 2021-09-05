import dynamic from "next/dynamic";
import LobbyHeader from "../../../src/components/LobbyHeader"
import LobbyUsers from "../../../src/components/LobbyUsers"
import LobbyGameSelect from "../../../src/components/LobbyGameSelect"
import { withSessionSSR } from "../../../lib/auth/session"

const AblyChatComponent = dynamic(() => import('../../../src/components/ablyComponents/AblyChat'), { ssr: false });

const index = ({ user }) => {
  return (
    <main className="flex flex-col w-full">
      <LobbyHeader username={'Aethery'}/>
      <div className="flex flex-row">
        <div className="dashboard-left flex flex-col mt-8">
          <div className="flex flex-row">
            <LobbyUsers />
            <LobbyGameSelect />
          </div>
          <AblyChatComponent loggedUser={user}/>
        </div>
        <div className="dashboard-right"></div>
      </div>
    </main>
  )
}

export const getServerSideProps = withSessionSSR(async function ({ req, res }) {
  const user = req.session.get('user')

  return {
    props: {
      user,
    },
  }
})

export default index
