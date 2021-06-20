import { combineReducers } from "redux";
import { homeReducer } from "../screens/home/reducers";
import { mainReducer } from "../store/main.reducers";

const rootReducer = combineReducers({
  main: mainReducer,
  home: homeReducer,
});
export default rootReducer;
