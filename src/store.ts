import { emojiListReducer } from "./actionsReducers/reducers";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers(emojiListReducer);

export const store = createStore(rootReducer);
