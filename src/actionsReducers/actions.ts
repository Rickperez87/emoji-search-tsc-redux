interface IEmojiData {
  title: string;
  symbol: string;
  keywords: string;
}

export const addEmojiList = (list: Array<IEmojiData>) => {
  return { type: "EMOJI_LIST", payload: list };
};
