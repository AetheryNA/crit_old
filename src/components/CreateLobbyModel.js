import { useState } from "react"
import axios from "axios"
import useUser from '../../lib/auth/useUser'

const CreateLobbyModel = () => {
  const { user } = useUser()
  const [lobbyName, setLobbyName] = useState()
  const [posted, setPosted] = useState()

  console.log(lobbyName);

  const createLobby = (e) => {
    e.preventDefault()

    axios.post(`${process.env.BASE_URL}/api/createLobby?user_id=${user.id}`, {lobby_name : lobbyName})
      .then(() => {
        setPosted('Posted!')
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <form onSubmit={createLobby} className="create-lobby-model absolute flex flex-col top-8 right-0 py-2 px-4 w-2/3 rounded-bl-xl">
      <input className="my-5 p-2 h-52" name="create-lobby-model-textarea" placeholder="Enter your lobby name here..." onChange={e => {setLobbyName(e.target.value)}}/>

      <div className="create-lobby-model__button-wrap flex flex-row ml-auto mb-5 w-full">
        { posted && (<p> { posted } </p>)}
        <button className="button w-1/3 ml-auto" type="submit"> Create </button>
      </div>
    </form>
  )
}

export default CreateLobbyModel
