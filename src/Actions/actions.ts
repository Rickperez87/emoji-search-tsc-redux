export const FilterEmoji = (text: string, maxResults = 20) => {
  return { type: "FILTER_EMOJI", payload: { text, maxResults } };
};
