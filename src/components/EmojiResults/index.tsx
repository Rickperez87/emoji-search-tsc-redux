import React, { useEffect } from "react";
import Clipboard from "clipboard";

import EmojiResultRow from "../EmojiResultRow";
import { useSelector } from "react-redux";
import "./EmojiResults.css";

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
    (state: any) => state.filterEmoji
  );
  return (
    <div className="component-emoji-results">
      {emojiData.map((emojiData: any) => (
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
