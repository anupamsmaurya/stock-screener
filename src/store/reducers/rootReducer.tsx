import { combineReducers } from "redux";
import stockReducer from "./stockReducer";

const rootReducer = combineReducers({
    stocks: stockReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;