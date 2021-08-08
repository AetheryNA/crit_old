import { useState } from 'react'

const Navigation = ({ navigationItems }) => {
  const [items, setItems] = useState(navigationItems)

  const menuItems = items.map((item, index) => {
    return (
      <li className={"navigation__menu-item" + " " + item.className} key={index}>
        <a 
          href={item.href} 
          onClick={(e) => {
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
  
  const handleClick = (index) => {
    setItems(items => 
      items.map((objects, itemNumber) => ({...objects, isActive: itemNumber === index}))
   );
  }

  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        { menuItems }
      </ul>
    </nav>
  )
}

export default Navigation
