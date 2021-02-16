import emojiList from "../helpers/emojiList.json";

export const emojiListReducer = (state = emojiList, action: any) => {
  if (action.type === "EMOJI_LIST") {
    return [...state, action.payload];
  } else return state;
};
