import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { allProductReducer } from "./reducers/productsReducer";

const rootReducers = combineReducers({
  allProductReducer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));
