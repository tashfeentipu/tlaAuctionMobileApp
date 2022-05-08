import { SET_DRIVER_STATUS, SET_ORDERS_LIST } from "../Types";

export const changeStatus = (driverStatus) => {
  return {
    type: SET_DRIVER_STATUS,
    payload: driverStatus,
  };
};

export const setOrdersList = (ordersList) => {
  return {
    type: SET_ORDERS_LIST,
    payload: ordersList,
  };
};
