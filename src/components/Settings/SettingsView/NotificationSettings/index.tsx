import React, { useState } from "react";
import Switch from "react-switch";
import * as actions from "@/redux/actions/notificationSettingActions";
import { connect } from "react-redux";

interface INotificationSettings {
  id: string | number;
  isChecked: boolean;
  notification: string;
}

interface ICPFromRedux {
  store: {
    notificationSettings: INotificationSettings[];
    turnOffAll: boolean;
  };
}

type Props = {
  notificationSettings: INotificationSettings[];
  disableAll: boolean;
  toggleSwitch: (arg: INotificationSettings[]) => void;
  turnOffAllNotifications: (arg: boolean) => void;
};

const NotificationSettings: React.FC<Props> = ({
  notificationSettings,
  toggleSwitch,
  disableAll,
  turnOffAllNotifications,
}) => {
  let [turnOffAll, setTurnOffAll] = useState<boolean>(disableAll);
  let [notifications, setNotifications] =
    useState<INotificationSettings[]>(notificationSettings);

  const turnOffNotifications = () => {
    setTurnOffAll((turnOffAll = !turnOffAll));
    turnOffAllNotifications(turnOffAll);
    const turnOffAllNot = [...notifications];
    if (turnOffAll) {
      turnOffAllNot.forEach((notification: INotificationSettings) => {
        notification.isChecked = false;
      });
    } else {
      turnOffAllNot.forEach((notification: INotificationSettings) => {
        notification.isChecked = true;
      });
    }
    setNotifications((notifications = turnOffAllNot));
    toggleSwitch(notifications);
  };

  const changeNotification = (index: number) => {
    const newNotifications: INotificationSettings[] = [...notifications];
    newNotifications[index].isChecked = !newNotifications[index].isChecked;

    notifications.forEach((notif: INotificationSettings) => {
      if (notif.isChecked === true) {
        setTurnOffAll(false);
        turnOffAllNotifications(false);
      }
    });

    setNotifications((notifications = newNotifications));
    toggleSwitch(notifications);
  };

  const renderNotifications = notifications.map(
    (item: INotificationSettings, index: number) => {
      return (
        <React.Fragment key={item.id}>
          <div className="w-full flex items-center mb-8">
            <Switch
              onChange={() => changeNotification(index)}
              checked={item.isChecked}
              offColor="#EFEFEF"
              onColor="#31DFAD"
              uncheckedIcon={false}
              checkedIcon={false}
              height={32}
              handleDiameter={32}
            />
            <p className="text-titles ml-3">{item.notification}</p>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap lg:w-2/3 w-full">
        <div className="w-full mb-6 lg:block hidden">
          <h1 className="text-3xl text-titles">Notifications</h1>
        </div>
        <div className="w-full rounded-xl flex flex-wrap px-6 py-4 bg-white shadow-main">
          <div className="w-full">{renderNotifications}</div>
          <div className="w-full flex items-center mt-2">
            <Switch
              onChange={turnOffNotifications}
              checked={turnOffAll}
              offColor="#EFEFEF"
              onColor="#31DFAD"
              uncheckedIcon={false}
              checkedIcon={false}
              height={38}
              width={60}
            />
            <p className="text-titles ml-3">Turn Off All Notifications</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  notificationSettings: state.store.notificationSettings,
  disableAll: state.store.turnOffAll,
});

const mapDispatchToProps = {
  toggleSwitch: actions.changeNotification,
  turnOffAllNotifications: actions.toggleTurnOffAll,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSettings);
