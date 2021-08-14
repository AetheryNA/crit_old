import InnerdashboardHeader from '../../src/components/InnerdashboardHeader'
import PostItem from '../../src/components/PostItem'

const index = () => {
  return (
    <>
      <div className="dashboard-left">
        <InnerdashboardHeader />
        <PostItem />
      </div>
      <div className="dashboard-right dashboard-right--small">

      </div>
    </>
  )
}

export default index
