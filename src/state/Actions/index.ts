import { FILTER_EMOJI } from "../ActionTypes";

export const filterEmojiAction = (
  text: string,
  maxResults = 20
): { type: string; payload: { text: string; maxResults?: number } } => {
  return { type: FILTER_EMOJI, payload: { text, maxResults } };
};
