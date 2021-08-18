import axios from 'axios'
import { useState } from 'react'
import Edit from '../../public/img/icons/editwCircle.svg'
import Settings from '../../public/img/icons/settings.svg'
import useUser from '../../lib/auth/useUser'

const SettingsProfileEdit = ({ userDetails }) => {
  const details = userDetails[0]
  const { user } = useUser() 
  const [pfpImage, setPfpImage] = useState()
  const [updatedNotification, setUpdatedNotification] = useState()

  console.log(details);

  const updateProfile = async(e) => {
    e.preventDefault()

    const updatedSettingsData = new FormData()
    updatedSettingsData.append('file', pfpImage)

    console.log(updatedSettingsData.get('file'));

    // axios.put('/api/changeProfilePicture', { data : updatedSettingsData }, {params : { user_id : user.id}})
    //   .then(() => {
    //     setUpdatedNotification('Settings Updated')
    //   })
    console.log(updatedSettingsData);

    axios({
      method: 'POST',
      url: `http://localhost:3000/api/changeProfilePicture?user_id=${user.id}`,
      data: updatedSettingsData,
      headers: {"Content-type" : "application/json"}
    }).then(() => {
      setUpdatedNotification('Settings updated')
    })
  }

  return (
    <form className="settings-profile-edit px-5 mt-32" onSubmit={updateProfile}>
      <div className="settings-profile-edit__title">
        <Settings />
        <h3> Settings </h3>
      </div>
      <div className="settings-profile-edit__pfp flex flex-row">
        <label>
          <input 
            className="settings-profile-edit__image-upload" 
            name="profilePicture"
            type="file" accept="image/*" 
            onChange={e => {setPfpImage(e.target.files[0])}} />
        </label>
        { details.avatar_url ?
          <img src={'/' + details.avatar_url} alt="" /> :
          <img src="/img/pfp.png" alt="" /> 
        }
        <Edit />
      </div>
      <div className="settings-profile-edit__field">
        <h3> Current Password </h3>
        <p> ********* </p>
        <Edit />
      </div>
      <div className="settings-profile-edit__field">
        <h3> New Password </h3>
        <p> ********* </p>
        <Edit />
      </div>

      <button className="button button--primary" disabled={pfpImage ? false : true} type='submit'> Update </button>
      <p className="mt-2"> {updatedNotification} </p>
    </form>
  )
}

export default SettingsProfileEdit
