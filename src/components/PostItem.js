import Like from '../../public/img/icons/like.svg'
import Link from 'next/link'
import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon } from 'react-share'
import { useState } from 'react'
import axios from 'axios'

const PostItem = ({ postItems, user }) => {
  const shareContent = "Posted something cool, check it out!"

  const postedItem = postItems.map((post, index) => {
    const [isActive, setIsActive] = useState(false)

    const userData = post.author

    const currentPostData = {
      user_id : user.id,
      post_id : post.post_id,
    }

    const likeOnClick = (e) => {
      e.preventDefault()

      setIsActive(!isActive)
    }

    const addToShareCount = async() => {
      axios
        .post(`${process.env.BASE_URL}/api/addToReshare`, currentPostData)
    }

    return(
      <Link href={`/post/${post.post_id}`} key={index}>
        <article className="post-item flex flex-col">
          <div className="post-item__profile flex items-center overflow-hidden">
            <img
              className="h-8 w-8 rounded-full"
              src={userData.avatar_url === '' ? "/img/pfp.png" : userData.avatar_url}
            />
            <Link href={`/profile/user/${userData.id}`}>
              <a className="ml-3 z-50" href={`/profile/user/${userData.id}`}> {userData.username} </a>
            </Link>
          </div>

          <div className="post-item__content mt-4 mb-2">
            {post.image_url === "" ? 
              ""
              :
              <div className="post-item__image mb-6">
                <img className="mx-auto" src={`/${post.image_url}`} />  
              </div>
            }
            <p>
              {post.content}
            </p>
            <div className="post-item__social-status flex justify-between mt-6">
              <div className="post-item__social flex flex-row">
                <div className="post-item__share">
                  <TwitterShareButton title={shareContent} url={`${process.env.BASE_URL}/post/${post.post_id}`} beforeOnClick={addToShareCount}>
                    <TwitterIcon size={30} bgStyle={{ fill: 'none'}} iconFillColor='currentColor' />
                  </TwitterShareButton>
                </div>
                
                <div className="post-item__share">
                  <FacebookShareButton title={shareContent} url={`${process.env.BASE_URL}/post/${post.post_id}`} beforeOnClick={addToShareCount}>
                    <FacebookIcon size={30} bgStyle={{ fill: 'none'}} iconFillColor='currentColor' />
                  </FacebookShareButton>
                </div>
              </div>

              <div className={`post-item__svg ${isActive ? 'active' : ''}`} onClick={likeOnClick}>
                <Like />
              </div>
            </div>
          </div>
        </article>
      </Link>
    )
  })

  return (
    <>
      {!postItems.length == 0 ? 
        postedItem :
        <div>
          <p> Couldn't find anything! </p>
        </div>
      }
    </>
  )
}

export default PostItem
