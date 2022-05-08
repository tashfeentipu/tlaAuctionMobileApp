import { LoginService } from "../../Services/LoginService";

export const LoginController = async (userName: string, password: string): Promise<any> => {
  const body = {
    loginRequest: {
      UserName: userName,
      UserPassword: password,
    },
  };
  return await LoginService(body);
};