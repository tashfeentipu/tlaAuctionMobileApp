import { SET_LOGIN_TOKEN } from "../Types";

export const tokenAction = (token: string) => {
  return {
    type: SET_LOGIN_TOKEN,
    payload: token,
  };
};