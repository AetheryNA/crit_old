import axios from "axios"
import { useState } from "react"

const PostDropdown = () => {
  const [content, setContent] = useState()
  const [image, setImage] = useState()
  const [contentError, setContentError] = useState()
  const [posted, setPosted] = useState()

  const newImageForm = new FormData()
  newImageForm.append('file', image)
  newImageForm.append('content', content)
  newImageForm.append('like_count', 0)

  const createPost = async(e) => {
    e.preventDefault()

    setContentError()
    setPosted()

    if (content) {
      axios({
        method: 'post',
        url: 'api/post',
        data: newImageForm,
        headers: {"Content-type" : "application/json"}
      }).then(() => {
        setPosted('Posted!')
      }).catch((err) => {
        console.log("Something went wrong", err);
      })

    } else {
      setContentError('This field cannot be empty')
    }
  }

  return (
    <form onSubmit={createPost} className="post-modal absolute flex flex-col top-8 right-0 py-2 px-4 w-2/3 rounded-bl-xl">
      <input className="mt-5 h-8" name="imageData" placeholder="Enter image url here..." type="file" accept="image/*" onChange={e => {setImage(e.target.files[0])}}/>

      { contentError ? <p className="post-modal__error mt-2"> {contentError} </p> : null}

      <textarea className="my-5 p-2 h-52" name="post-modal-textarea" placeholder="Enter your post here..." onChange={e => {setContent(e.target.value)}}></textarea>

      <div className="post-modal__button-wrap flex flex-row ml-auto mb-5 w-full">
        { posted ? <p> { posted } </p> : ''}
        <button className="button w-1/3 ml-auto" type="submit"> Submit </button>
      </div>
    </form>
  )
}

export default PostDropdown
