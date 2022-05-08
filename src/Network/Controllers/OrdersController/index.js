import { GetOrdersService } from "../../Services/OrdersService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetOrdersController = async () => {
  let AuthData = await AsyncStorage.getItem("AuthData");
  AuthData = JSON.parse(AuthData);
  const body = {
    Id: AuthData.ResturantId,
    DriverId: AuthData.DriverId,
  };
  return await GetOrdersService(body);
};

export const DispatchOrdersController = async (orderId, orderNo, status) => {
  let AuthData = await AsyncStorage.getItem("AuthData");
  AuthData = JSON.parse(AuthData);
  const body = {
    orderRequest: {
      OrderId: orderId,
      DriverId: AuthData.DriverId,
      DriverStatusId: status,
      status: "",
      OrderNo: orderNo,
      ResturantId: AuthData.ResturantId,
      IsWeb: 0,
      Body: "",
    },
  };
  return await GetOrdersService(body);
};
