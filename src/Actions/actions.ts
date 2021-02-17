interface filterEmojiAction {
  type: "FILTER_EMOJI";
  payload: {
    text: string;
    maxResults?: number;
  };
}

export const filterEmojiAction = <filterEmojiAction>(
  text: string,
  maxResults = 20
) => {
  return { type: "FILTER_EMOJI", payload: { text, maxResults } };
};
