import { setToken } from "../Actions/auth";

export const mapDispatchToProps = (dispatch: any) => {
  return {
    setLoginToken: (token: any) => dispatch(setToken(token)),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    loginToken: state.auth.loginToken,
  };
};
