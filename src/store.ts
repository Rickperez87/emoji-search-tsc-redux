import { filterEmojiReducer } from "./Reducers/reducers";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  filterEmoji: filterEmojiReducer,
});

export const store = createStore(rootReducer);
