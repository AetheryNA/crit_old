import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import PostItem from '../../src/components/PostItem'

const index = ({ getAllPosts }) => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader />
        <PostItem postItems={getAllPosts} />
      </div>
      <div className="dashboard-right dashboard-right--small">

      </div>
    </>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:3000/api/getAllPosts')
  const getAllPosts = await res.json()

  return {
    props: {
      getAllPosts
    }
  }
}

export default index
