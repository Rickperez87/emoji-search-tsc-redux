import React, { useEffect } from "react";
import Clipboard from "clipboard";
import { useSelector } from "react-redux";

import EmojiResultRow from "../EmojiResultRow";
import { EmojiState, EmojiData } from "../../state";

interface IEmojiData {
  title: string;
  symbol: string;
  keywords: string;
}

const EmojiResults: React.FC = () => {
  useEffect(() => {
    let clipboard = new Clipboard(".copy-to-clipboard");
    return () => {
      clipboard.destroy();
    };
  }, []);

  const emojiData: Array<IEmojiData> = useSelector(
    (state: { filterEmoji: EmojiState }) => state.filterEmoji
  );
  return (
    <div className="component-emoji-results">
      {emojiData.map((emojiData: EmojiData) => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  );
};

export default EmojiResults;
