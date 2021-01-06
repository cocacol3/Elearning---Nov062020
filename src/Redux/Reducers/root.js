import { combineReducers } from "redux";
<<<<<<< HEAD
import CourseReducer from "./course";
import UserReducer from "./user";

const RootReducer = combineReducers({
  course: CourseReducer,
  user: UserReducer,
=======
import CourseReducer from "./courseReducer";
import AuthReducer from "./authReducer";

const RootReducer = combineReducers({
  course: CourseReducer,
  auth: AuthReducer,
>>>>>>> update2021
});

export default RootReducer;
