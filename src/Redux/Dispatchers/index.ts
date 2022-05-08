import { setToken } from "../Middleware/auth";

export const mapDispatchToProps = (dispatch: any) => {
  return {
    setLoginToken: () => dispatch(setToken()),
  };
};

export const mapStateToProps = (state: any) => {
  return {
    loginToken: state.auth.loginToken,
  };
};
