import * as React from "react";
import "./SearchInput.css";

import { filterEmojiAction } from "../../Actions/actions";
import { connect } from "react-redux";

interface IFilterEmojiAction {
  type: "FILTER_EMOJI";
  payload: {
    text: string;
    maxResults?: number;
  };
}

type Props = any & IFilterEmojiAction;

const SearchInput: React.FC<Props> = ({ filterEmojiAction }) => {
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

const mapStateToProps = (state: any) => {
  return { state };
};

export default connect<any>(mapStateToProps, { filterEmojiAction })(
  SearchInput
);
