import { combineReducers, createStore } from "redux";
import ordersReducer from "../Reducers/orders";

const rootReducer = combineReducers({
  orders: ordersReducer,
});
const store = createStore(rootReducer);

export default store;
