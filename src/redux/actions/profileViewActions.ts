import * as t from '@/redux/types';

export const changeProfileSettingsOrder = (order: number) => ({
  type: t.CHANGE_PROFILE_ORDER,
  payload: order
})