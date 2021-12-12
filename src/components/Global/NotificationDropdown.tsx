import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { connect } from "react-redux";

interface CPFromRedux {
  store: {
    firstName: string;
    lastName: string;
    notifications: [INotification];
  };
}

interface INotification {
  id: number;
  title: string;
  deliveredTime: string;
  text: string;
}

type Props = {
  firstName?: string;
  lastName?: string;
  notifications: [INotification];
};

const NotificationDropdown: React.FC<Props> = ({
  firstName,
  lastName,
  notifications,
}) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  let [bellActive, setBellActive] = useState<boolean>(false);
  let [bellMobActive, setBellMobActive] = useState<boolean>(false);

  const router = useRouter();

  const node = useRef<any>(null);

  const handleClick = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
    setBellActive(false);
    setBellMobActive(false);
  };

  useEffect(() => {
    if (router.pathname.includes("/notifications")) {
      setBellActive(true);
    } else {
      setBellActive(false);
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const showOverlay = () => {
    if (isOpen) {
      return (
        <div
          className="fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20"
          style={{ marginTop: "73px", zIndex: 99999999999999 }}
        ></div>
      );
    } else {
      return;
    }
  };

  const activeBellMob = () => {
    setIsOpen((isOpen = !isOpen));
    isOpen ? setBellMobActive(true) : setBellMobActive(false);
  };

  const renderNotifications = notifications.map((notification, index) => {
    if (index < 3) {
      return (
        <React.Fragment key={notification.id}>
          <div className="flex w-full px-6">
            <div className="w-full flex flex-wrap items-center">
              <div className="w-3/4 text-left">
                <h1 className="text-titles">{notification.title}</h1>
              </div>
              <div className="w-1/4 text-right">
                <button className="bg-transparent outline-none focus:outline-none text-primary text-sm">
                  View
                </button>
              </div>
              <div className="w-full">
                <p className="font-sans text-secondary text-xs my-4 text-left">
                  {notification.text}
                </p>
              </div>
              <div className="w-full flex items-center">
                <div className="w-1/2 flex items-center">
                  <img
                    src="/img/notifications/clock-icon.svg"
                    alt=""
                    className="mr-2"
                  />
                  <p className="text-secondary text-xs">
                    {notification.deliveredTime}
                  </p>
                </div>
                <div className="w-1/2 text-right">
                  <button className="bg-transparent outline-none focus:outline-none text-xs text-secondary">
                    Mark as Read
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-px w-full my-6"
            style={{ background: "#efefef" }}
          ></div>
        </React.Fragment>
      );
    }
  });

  return (
    <>
      {showOverlay()}
      <div className="relative" ref={node}>
        <div className="flex items-center">
          <button
            className={cn(
              "outline-none focus:outline-none lg:mt-2 -mt-1 lg:ml-0 ml-4 lg:mr-0 mr-5 z-50",
              {
                "active-notification pb-5": bellActive || bellMobActive,
              }
            )}
            onClick={() => activeBellMob()}
          >
            <img src="/img/icons/bell-icon.svg" alt="" />
          </button>
          <span className="text-secondary mx-4 truncate text-sm mt-2 mr-0 z-40 lg:inline hidden">
            {lastName !== undefined
              ? firstName + " " + lastName.charAt(0)
              : null}
            .
          </span>
        </div>
        <div
          className={cn(
            "lg:absolute fixed bg-white border-t border-secondary-elements lg:-left-96 left-0 flex flex-wrap rounded-b-2xl lg:w-notifications-dropdown w-full lg:overflow-y-hidden overflow-y-scroll lg:h-auto h-full top-14 -mt-0.5",
            {
              hidden: isOpen === false,
              block: isOpen === true,
            }
          )}
          style={{ zIndex: 99999999999999 }}
        >
          <div className="flex w-full items-center pt-6 px-6">
            <div className="w-1/2 text-left">
              <h1 className="text-titles text-1xl">Notifications</h1>
            </div>
            <div className="w-1/2 text-right">
              <button className="text-secondary text-xs bg-transparent outline-none focus:outline-none">
                Mark All as Read
              </button>
            </div>
          </div>
          <div
            className="h-px w-full my-6"
            style={{ background: "#efefef" }}
          ></div>
          {renderNotifications}
          {router.pathname !== "/notifications" ? (
            <div className="w-full mb-4 -mt-2 text-center lg:pb-0 md:pb-10 pb-16">
              <Link href="/notifications">
                <button className="bg-transparent outline-none focus:outline-none text-primary text-sm">
                  See all Notifications
                </button>
              </Link>
            </div>
          ) : (
            <div className="h-10 w-full"></div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  firstName: state.store.firstName,
  lastName: state.store.lastName,
  notifications: state.store.notifications,
});

export default connect(mapStateToProps)(NotificationDropdown);
