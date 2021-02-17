import emojiList from "../helpers/emojiList.json";

const initialState = emojiList.slice(0, 20);

export const filterEmojiReducer = (state: any = initialState, action: any) => {
  if (action.type === "FILTER_EMOJI") {
    const { text, maxResults } = action.payload;
    return emojiList
      .filter((emoji: any) => {
        if (emoji.title.toLowerCase().includes(text.toLowerCase())) {
          return true;
        }
        if (emoji.keywords.includes(text)) {
          return true;
        }
        return false;
      })
      .slice(0, maxResults);
  } else return state;
};
