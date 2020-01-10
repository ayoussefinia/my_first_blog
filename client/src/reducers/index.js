import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import makePostReducer from "./makePostReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  makePost: makePostReducer
});