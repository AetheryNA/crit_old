import { useState } from 'react'
import Image from 'next/image'
import navItems from '../helpers/navigationBarItems'

const Aside = () => {
  const [items, setItems] = useState(navItems)
  const [statusTabActive, setstatusTabActive] = useState("false")

  const handleClick = (index) => {
    setItems(items => 
      items.map((objects, itemNumber) => ({...objects, isActive: itemNumber === index}))
   );
  }

  const handleStatusTab = () => {
    setstatusTabActive(!statusTabActive)
  }

  const menuItems = items.map((item, index) => {
    return (
      <li className={"aside__menu-item" + " " + item.className} key={index}>
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
    <aside className="aside">
      <div className="aside__profile">
        <div className={`aside__profile-picture ${statusTabActive ? "" : "active"}`} onClick={() => { handleStatusTab() }}>
          <Image
            src="/img/pfp.png"
            width={80}
            height={80}
          />
          <div className="aside__status"></div>
          <ul className="aside__status-tab">
            <li className="aside__status-item aside__status-item-online"> Online </li>
            <li className="aside__status-item aside__status-item-idle"> Idle </li>
            <li className="aside__status-item aside__status-item-dnd"> Do not disturb </li>
            <li className="aside__status-item aside__status-item-hidden"> Hide </li>
          </ul>
        </div>
        <div className="aside__description">
          <h3> Username </h3>
          <p> Online </p>
        </div>
      </div>

      <nav className="aside__navigation">
        <ul className="aside__menu">
          {menuItems}
        </ul>
      </nav>

      <div className="aside__copyright">
        <p> Copyright&#169; 2021 </p>
      </div>
    </aside>
  )
}

export default Aside
