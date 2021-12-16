import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import NotificationSVG from "../../public/img/icons/notification.svg";

const Notifactions = ({ notifications }) => {
  const displayNotifications = notifications.map((notification, index) => {
    return (
      <Menu.Item className="notification__item" key={index}>
        <p> {notification.notificationValue} </p>
      </Menu.Item>
    );
  });

  return (
    <Menu as="div" className="notification">
      {({ open }) => (
        <>
          <Menu.Button className="notification__icon">
            <NotificationSVG />
          </Menu.Button>

          <Transition show={open} as={Fragment}>
            <Menu.Items static className="notification__list">
              {displayNotifications}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Notifactions;
