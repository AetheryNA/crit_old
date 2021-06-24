import { useState } from 'react'
import Image from 'next/image'

import HomeSVG from './icons/Home'
import UserSVG from './icons/User'
import FeedSVG from './icons/Feed'
import TrendingSVG from './icons/Tag'
import FriendsSVG from './icons/Friends'
import ClockSVG from './icons/Clock'

const Navigation = () => {
  const [items, setItems] = useState([
    {
      name: 'Home',
      className: 'header__home',
      href: '/',
      svg: <HomeSVG />,
      isActive: false,
    },
    {
      name: 'User',
      className: 'header__user',
      href: '/',
      svg: <UserSVG />,
      isActive: false,
    },
    {
      name: 'Activity Feed',
      className: 'header__activity-feed',
      href: '/',
      svg: <FeedSVG />,
      isActive: false,
    },
    {
      name: 'Trending',
      className: 'header__trending',
      href: '/',
      svg: <TrendingSVG />,
      isActive: false,
    },
    {
      name: 'Friends',
      className: 'header__friends',
      href: '/',
      svg: <FriendsSVG />,
      isActive: false,
    },
    {
      name: 'Lobby',
      className: 'header__lobby',
      href: '/',
      svg: <ClockSVG />,
      isActive: false,
    },
  ])

  const [statusTabActive, setstatusTabActive] = useState("false")

  const handleClick = (index) => {
    setItems(items => 
      items.map((objects, i) => ({...objects, isActive: i === index}))
   );
  }

  const handleStatusTab = () => {
    setstatusTabActive(!statusTabActive)
  }

  const menuItems = items.map((item, index) => {
    return (
      <li className={"header__menu-item" + " " + item.className} key={index}>
        <a 
          href={item.href} 
          onClick={(e) => {
            e.preventDefault()
            handleClick(index) 
          }} 
          className={item.isActive ? 'active' : null}
        >
          {item.svg}
          <span className={item.isActive ? 'active' : null}> {item.name} </span>
        </a>
      </li>
    )
  })

  return (
    <header className="header">
      <div className="header__profile">
        <div className={`header__profile-picture ${statusTabActive ? "" : "active"}`} onClick={() => { handleStatusTab() }}>
          <Image
            src="/img/pfp.jpg"
            width={80}
            height={80}
          />
          <div className="header__status"></div>
          <ul className="header__status-tab">
            <li className="header__status-item header__status-item-online"> Online </li>
            <li className="header__status-item header__status-item-idle"> Idle </li>
            <li className="header__status-item header__status-item-dnd"> Do not disturb </li>
            <li className="header__status-item header__status-item-hidden"> Hide </li>
          </ul>
        </div>
        <div className="header__description">
          <h3> Username </h3>
          <p> Online </p>
        </div>
      </div>

      <ul className="header__menu">
        {menuItems}
      </ul>

      <div className="header__copyright">
        <p> Copyright 2021 </p>
      </div>
    </header>
  )
}

export default Navigation
