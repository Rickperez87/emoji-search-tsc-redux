import emojiList from "../../helpers/emojiList.json";
import { FILTER_EMOJI } from "../ActionTypes";
import { Action, EmojiState } from "../types";

const initialState = emojiList.slice(0, 20);

export const filterEmojiReducer = (
  state: EmojiState = initialState,
  action: Action
): EmojiState => {
  switch (action.type) {
    case FILTER_EMOJI: {
      const { text, maxResults } = action.payload;
      return emojiList
        .filter((emoji) => {
          if (emoji.title.toLowerCase().includes(text.toLowerCase())) {
            return true;
          }
          if (emoji.keywords.includes(text)) {
            return true;
          }
          return false;
        })
        .slice(0, maxResults);
    }
    default:
      return state;
  }
};
