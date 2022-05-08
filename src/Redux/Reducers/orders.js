import { SET_DRIVER_STATUS, SET_ORDERS_LIST } from "../Types";

const initialState = {
  ordersList: [],
  driverStatus: [],
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DRIVER_STATUS:
      return {
        ...state,
        driverStatus: action.payload,
      };
    case SET_ORDERS_LIST:
      return {
        ...state,
        ordersList: action.payload,
      };
    default:
      return state;
  }
}
