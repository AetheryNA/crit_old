import { useState } from 'react'
import Image from "next/image"
import LogoffSVG from "../../public/img/icons/logoff.svg"
import Notifications from "./Notifactions"

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
    <header className="header">
      <div className="header__logo-wrap">
        <Image 
          className="header__logo"
          src="/img/crit-no-txt.svg"
          alt="Crit"
          width={100}
          height={90}
        />
      </div>

      <h3> Band together! </h3>

      <div className="header__logoff">
        <LogoffSVG />
      </div>

      <div className="header__information">
        <div className="header__player-list">

        </div>

        <Notifications notifications={listNotifications}/>
      </div>
    </header>
  )
}

export default Header
