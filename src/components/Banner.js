import { useState } from "react"
import Image from "next/image"
import Notification from "./icons/Notification"
import Logoff from "./icons/Logoff"

const Banner = () => {
  const [isActive, setIsActive] = useState("false")

  const handleOnClick = () => {
    setIsActive(!isActive)
  }

  return (
    <header className="banner">
      <div className="banner__logo-wrap">
        <Image 
          className="banner__logo"
          src="/img/crit-no-txt.svg"
          alt="Crit"
          width={100}
          height={90}
        />
      </div>

      <h3> Band together! </h3>

      <div className="banner__logoff">
        <Logoff />
      </div>

      <div className="banner__information">
        <div className="banner__player-list">

        </div>
        <div className={`banner__notifications ${isActive ? '' : 'active'}`}>
          <div className={`banner__icon ${isActive ? '' : 'active'}`} onClick={() => { handleOnClick() }}>
            <Notification />
          </div>
          <ul className="banner__notifications-list">
            <li className="banner__notifications-item"> <a href="#">Felicia</a> sent you a friend request </li>
            <li className="banner__notifications-item"> You have a new <a href="#">trending</a> item </li>
            <li className="banner__notifications-item"> You may find this interesting </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Banner
