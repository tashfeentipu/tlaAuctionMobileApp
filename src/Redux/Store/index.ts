import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/auth";

const rootReducer = {
  reducer: {
    auth: authReducer,
  }
};
const store = configureStore(rootReducer);

export default store;
