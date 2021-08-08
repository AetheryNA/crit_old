import { useState } from 'react'
import Plus from '../../public/img/icons/plus.svg'
import PostModal from './PostModal'

const AddPost = () => {
  const [viewInsertPost, setViewInsertPost] = useState(false)

  return (
    <>
    <button onClick={() => {setViewInsertPost(!viewInsertPost)}} className={`add-post ${ viewInsertPost ? 'active' : ''}`}>
      <span> {viewInsertPost ? 'Close' : 'Add new post'} </span>
      <Plus />
    </button>

    { viewInsertPost ?
      <PostModal />
      : null}
    </>
  )
}

export default AddPost
