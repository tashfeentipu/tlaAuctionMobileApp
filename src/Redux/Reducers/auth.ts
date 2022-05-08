import { SET_LOGIN_TOKEN } from "../Types";

const initialState = {
  loginToken: ""
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOGIN_TOKEN:
      return {
        ...state,
        loginToken: action.payload,
      };
    default:
      return state;
  }
}
