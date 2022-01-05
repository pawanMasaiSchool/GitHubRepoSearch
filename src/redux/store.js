import { combineReducers, createStore } from "redux";
import authReducer from "./authRedux/authReducer";
import gitReducer from "./gitHub/gitReducer";

const bothReducers = combineReducers({
  auth: authReducer,
  git: gitReducer
});

export const store = createStore(
  bothReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));
