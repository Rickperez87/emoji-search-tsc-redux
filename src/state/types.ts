export interface FilterEmojiAction {
  type: "FILTER_EMOJI";
  payload: {
    text: string;
    maxResults?: number;
  };
}

export type Action = FilterEmojiAction;

export interface EmojiState extends Array<EmojiData> {}

interface EmojiData {
  title: string;
  symbol: string;
  keywords: string;
}
export interface FilterEmojiActionCreator {
  (text: string, maxNumber?: number): {
    type: "FILTER_EMOJI";
    payload: {
      text: string;
      maxResults?: number;
    };
  };
}
