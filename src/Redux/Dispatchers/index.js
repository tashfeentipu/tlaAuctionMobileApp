import { changeStatus, setOrdersList } from "../Actions/orders";

export const mapDispatchToProps = (dispatch) => {
  return {
    changeDriverStatus: (status) => dispatch(changeStatus(status)),
    setOrders: (fetchedOrders) => dispatch(setOrdersList(fetchedOrders)),
  };
};

export const mapStateToProps = (state) => {
  return {
    driverStatus: state.orders.driverStatus,
    ordersList: state.orders.ordersList,
  };
};
