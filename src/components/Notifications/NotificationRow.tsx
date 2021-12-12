import React from "react";

interface NotificationStructure {
  id: number;
  title: string;
  deliveredTime: string;
  text: string;
}

type Props = {
  notification: NotificationStructure;
};

const NotificationRow: React.FC<Props> = ({ notification }) => {
  return (
    <>
      <div className="bg-white w-full lg:h-28 lg:py-0 py-4 shadow-main rounded-lg flex flex-wrap lg:flex-nowrap items-center px-7 mb-5">
        <div className="lg:w-1/4 w-full">
          <p className="text-titles mb-2">{notification.title}</p>
          <div className="flex items-center">
            <img src="/img/notifications/clock-icon.svg" alt="" />
            <p className="text-secondary text-xs ml-2">
              {notification.deliveredTime}
            </p>
          </div>
        </div>
        <div className="lg:w-2/3 w-full lg:my-0 my-4">
          <p className="text-titles font-sans text-sm">{notification.text}</p>
        </div>
        <div className="lg:w-32 flex justify-center">
          <button className="bg-transparent outline-none focus:outline-none text-primary border-primary border lg:mx-auto px-8 py-3 rounded-lg">
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationRow;
