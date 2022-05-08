import { GetAsync, PostAsync } from "../HttpRequests";
import { Endpoints } from "../../../Constants/Endpoints";

export const LoginService = async (body: any): Promise<any> => {
  const { login } = Endpoints;
  return await GetAsync(login);
};