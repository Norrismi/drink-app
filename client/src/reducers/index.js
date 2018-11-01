import { combineReducers } from "redux";
import drinks from "./drink-reducer";
import user from "./user-reducer";

const rootReducer = combineReducers({
  drinks,
  user
});

export default rootReducer;
