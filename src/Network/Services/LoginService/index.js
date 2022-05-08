import { PostAsync } from "../HttpRequests";
import { Endpoints } from "../../../Constants/Endpoints";

export const LoginService = async (body) => {
  const { login } = Endpoints;
  return await PostAsync(login, body);
};

export const DeviceIdService = async (body) => {
  const { sendDeviceId } = Endpoints;
  return await PostAsync(sendDeviceId, body);
};
