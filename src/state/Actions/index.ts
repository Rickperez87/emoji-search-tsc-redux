import { FILTER_EMOJI } from "../ActionTypes";
import { Action, FilterEmojiAction } from "../types";
import { filterEmojiReducer } from "../Reducers";

export const filterEmojiAction = <Action>(
  text: React.ChangeEvent<HTMLInputElement>,
  maxResults = 20
) => {
  return { type: FILTER_EMOJI, payload: { text, maxResults } };
};
