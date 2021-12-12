import React from "react";
import NotificationRow from "@/components/Notifications/NotificationRow";
import { connect } from "react-redux";

interface INotification {
  id: number;
  title: string;
  deliveredTime: string;
  text: string;
}

interface CPFromRedux {
  store: {
    notifications: [INotification];
  };
}

type Props = {
  notifications: [INotification];
};

const Notifications: React.FC<Props> = ({ notifications }) => {
  const renderNotification = notifications.map((notification) => {
    return <NotificationRow notification={notification} />;
  });

  return (
    <>
      <div className="py-28 min-h-screen app-bg px-4">
        <div className="flex items-center mb-6">
          <h1 className="lg:text-3xl">Notifications</h1>
          <button className="bg-transparent outline-none focus:outline-none ml-auto">
            <img
              src="/img/notifications/notifications-settings-icon.svg"
              alt=""
            />
          </button>
        </div>
        <div className="flex flex-wrap">{renderNotification}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  notifications: state.store.notifications,
});

export default connect(mapStateToProps)(Notifications);
