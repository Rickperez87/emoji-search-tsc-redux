import { FILTER_EMOJI } from "../ActionTypes";

interface filterEmojiAction {
  type: "FILTER_EMOJI";
  payload: {
    text: string;
    maxResults?: number;
  };
}

export type Action = filterEmojiAction;

export const filterEmojiAction = <filterEmojiAction>(
  text: string,
  maxResults = 20
) => {
  return { type: FILTER_EMOJI, payload: { text, maxResults } };
};
