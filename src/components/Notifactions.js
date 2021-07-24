import { Fragment } from "react"
import { Menu, Transition } from '@headlessui/react'
import NotificationSVG from "../../public/img/icons/notification.svg"

const Notifactions = ({ notifications }) => {
  const displayNotifications = notifications.map((notification, index) => {
    return (
      <Menu.Item className="notifications__item" key={index}>
        <p> {notification.notificationValue} </p>
      </Menu.Item>
    )
  })

  return (
    <Menu as="div" className="notifications">
      {({ open }) => (
        <>
          <Menu.Button className="notifications__icon">
            <NotificationSVG />
          </Menu.Button>

          <Transition show={open} as={Fragment}>
            <Menu.Items static className="notifications__list">
              {displayNotifications}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default Notifactions
