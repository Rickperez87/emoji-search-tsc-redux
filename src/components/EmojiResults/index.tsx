import React, { useEffect } from "react";
import Clipboard from "clipboard";

import EmojiResultRow from "../EmojiResultRow";
import { connect } from "react-redux";
import "./EmojiResults.css";

interface IEmojiData {
  title: string;
  symbol: string;
  keywords: string;
}

const EmojiResults: React.FC<{ emojiData: Array<IEmojiData>; state: any }> = ({
  emojiData,
  state,
}) => {
  useEffect(() => {
    let clipboard = new Clipboard(".copy-to-clipboard");

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-emoji-results">
      {console.log(state)}
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

const mapStateToProps = (state: any) => {
  console.log(state);
  return { state };
};

export default connect(mapStateToProps)(EmojiResults);
