import { PostAsync } from "../HttpRequests";
import { Endpoints } from "../../../Constants/Endpoints";

export const GetOrdersService = async (body) => {
  const { getDeliveryOrders } = Endpoints;
  return await PostAsync(getDeliveryOrders, body);
};

export const DispatchOrdersService = async (body) => {
  const { dispatchOrders } = Endpoints;
  return await PostAsync(dispatchOrders, body);
};
