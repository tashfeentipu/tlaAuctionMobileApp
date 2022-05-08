import { LoginService, DeviceIdService } from "../../Services/LoginService";

export const LoginController = async (userName, password) => {
  const body = {
    loginRequest: {
      UserName: userName,
      UserPassword: password,
    },
  };
  return await LoginService(body);
};

export const DeviceIdController = async (authData, deviceId) => {
  const body = {
    request: {
      IsWeb: 0,
      ResturantId: authData.ResturantId,
      DeviceId: deviceId,
      UserId: authData.DriverId,
    },
  };
  console.log("body", body);
  return await DeviceIdService(body);
};
