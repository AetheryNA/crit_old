import { Fragment } from "react"
import { Menu, Transition } from '@headlessui/react'
import NotificationSVG from "../../public/img/icons/notification.svg"

const Notifactions = ({ notifications }) => {
  const displayNotifications = notifications.map((notification, index) => {
    return (
      <Menu.Item className="header__notifications-item" key={index}>
        <p className="header__notifications-item"> {notification.notificationValue} </p>
      </Menu.Item>
    )
  })

  return (
    <Menu as="div" className="header__notifications">
      {({ open }) => (
        <>
          <Menu.Button className="header__icon">
            <NotificationSVG />
          </Menu.Button>

          <Transition show={open} as={Fragment}>
            <Menu.Items static className="header__notifications-list">
              {displayNotifications}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default Notifactions
