import emojiList from "../helpers/emojiList.json";
export const emojiListReducer = () => {
  return emojiList;
};

export const filterEmojiReducer = (state: any = emojiList, action: any) => {
  if (action.type === "FILTER_EMOJI") {
    const { text, maxResults } = action.payload;
    return state
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
