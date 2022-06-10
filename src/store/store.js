import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import authreducer from "./Auth/auth.reducer";
import feedreducer from "./Feed/feed.reducer";

const rootreducer = combineReducers({
  auth: authreducer,
  feed: feedreducer
});
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
