import main from "@/redux/reducers/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  store: main,
});

export default rootReducer;
