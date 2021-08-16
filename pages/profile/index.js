import UserBanner from "../../src/components/UserBanner"
import UserProfileBar from "../../src/components/UserProfileBar"
import UserProfileFriends from "../../src/components/UserProfileFriends"
import PostItem from "../../src/components/PostItem"
import Feed from "../../public/img/icons/feed.svg"
import Friends from "../../public/img/icons/friends.svg"
import Loading from "../../src/components/Loading"
import axios from "axios"
import { useState, useEffect } from "react"

const index = () => {
  const [postItems, setPostItems] = useState()

  useEffect(() => {
    axios.get('api/getCurrentUserPosts')
      .then(response => {
        setPostItems(response.data)
      })
  })

  return (
    <>
      <UserBanner />
      <div className="profile-pg">
        <UserProfileBar />
        <div className="profile-pg__dashboard flex lg:flex-row flex-col">
          <div className="dashboard-left">
            <h3 className="flex flex-row">
              <Feed />
              Your Feed
            </h3>
            { postItems ? 
              <PostItem postItems={postItems}/>
              : 
              <Loading type="feed data"/>
            }
          </div>
          <div className="dashboard-right">
            <h3 className="flex flex-row">
              <Friends />
              Your Friends
            </h3>
            <UserProfileFriends />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
