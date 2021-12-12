import * as t from "@/redux/types";

interface INotifications {
  id: string | number;
  isChecked: boolean;
  notification: string;
}

export const changeNotification = (notifications: INotifications[]) => ({
  type: t.CHANGE_NOTIFICATION_SETTINGS,
  payload: notifications,
});

export const toggleTurnOffAll = (toggler: boolean) => ({
  type: t.TURN_OFF_ALL_NOTIFICATIONS,
  payload: toggler,
});
