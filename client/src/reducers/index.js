import { combineReducers, applyMiddleware } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import makePostReducer from "./makePostReducer";
import readPostReducer from "./readPostReducer.js";
import editPostReducer from "./editPostReducer.js";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  makePost: makePostReducer,
  readPost: readPostReducer,
  editPost: editPostReducer
});

