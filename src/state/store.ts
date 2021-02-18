import { filterEmojiReducer } from "./Reducers";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  filterEmoji: filterEmojiReducer,
});

export const store = createStore(rootReducer);
