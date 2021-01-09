import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import AuthReducer from "./authReducer";

const RootReducer = combineReducers({
  course: CourseReducer,
  auth: AuthReducer,
});

export default RootReducer;
