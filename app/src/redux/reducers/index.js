import { combineReducers } from "redux";
import files from "./files";

const allReducers = combineReducers({
  files,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export default rootReducer;
