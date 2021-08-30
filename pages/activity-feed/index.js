import { withSessionSSR } from '../../lib/auth/session'
import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import PostItem from '../../src/components/PostItem'

const index = ({ postItems, user }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader iconActivity={true}/>
        <PostItem postItems={postItems} user={user}/>
      </div>
      <div className="dashboard-right dashboard-right--small">

      </div>
    </>
  )
}

export const getServerSideProps = withSessionSSR(async ({req, res}) => {
  const user = req.session.get('user')

  const response = await fetch('http://localhost:3000/api/getAllPosts')
  const items = await response.json()
  const postItems = items.findPosts

  return {
    props : {
      postItems,
      user
    }
  }
})

export default index
