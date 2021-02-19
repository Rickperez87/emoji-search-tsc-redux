import * as React from "react";
import "./SearchInput.css";

import { filterEmojiAction, FilterEmojiActionCreator } from "../../state/";
import { connect } from "react-redux";

const SearchInput: React.FC<any> = ({
  filterEmojiAction,
}: {
  filterEmojiAction: FilterEmojiActionCreator;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterEmojiAction(event.target.value);
  };

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  );
};

export default connect(null, { filterEmojiAction })(SearchInput);
