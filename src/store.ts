import { emojiListReducer, filterEmojiReducer } from "./Reducers/reducers";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  emojiList: emojiListReducer,
  filterEmoji: filterEmojiReducer,
});

export const store = createStore(rootReducer);
