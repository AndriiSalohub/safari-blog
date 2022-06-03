import { combineReducers } from "redux";
import { pathReducer } from "./pathReducer";

export const rootReducer = combineReducers({
    pathDetect: pathReducer,
});
