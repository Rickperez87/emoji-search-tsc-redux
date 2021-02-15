import React, { useEffect } from "react";
import Clipboard from "clipboard";

import EmojiResultRow from "../EmojiResultRow";
import "./EmojiResults.css";

interface IEmojiData {
  title: string;
  symbol: string;
  keywords: string;
}

const EmojiResults: React.FC<{ emojiData: Array<IEmojiData> }> = ({
  emojiData,
}) => {
  useEffect(() => {
    let clipboard = new Clipboard(".copy-to-clipboard");

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-emoji-results">
      {emojiData.map((emojiData) => (
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
