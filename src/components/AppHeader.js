import { useState } from 'react'
import Image from "next/image"
import Notification from "./Notifaction"
import LogOff from './HeaderLogoff'

const Header = () => {
  const [listNotifications, setListNotifications] = useState([
    {
      notificationValue: "Felicia sent you a friend request",
    },
    {
      notificationValue: "You have a new trending item",
    },
    {
      notificationValue: "You may find this interesting",
    },
  ])

  return (
    <header className="app-header">
      <div className="app-header__logo-wrap">
        <Image 
          className="app-header__logo"
          src="/img/crit-no-txt.svg"
          alt="Crit"
          width={100}
          height={90}
        />
      </div>

      <h3> Band together! </h3>

      <LogOff />

      <div className="app-header-information">
        <Notification notifications={listNotifications}/>
      </div>
    </header>
  )
}

export default Header
