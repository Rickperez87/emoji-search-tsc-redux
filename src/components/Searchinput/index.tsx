import * as React from "react";
import "./SearchInput.css";

import { FilterEmoji } from "../../Actions/actions";
import { connect } from "react-redux";

interface Props {
  // textChange(event: React.ChangeEvent<HTMLInputElement>): void;
  filterEmoji(text: any, maxResults?: number): any;
}

const SearchInput: React.FC<Props> = ({ filterEmoji }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // textChange(event);
    filterEmoji(event.target.value);
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
  console.log(state);
  return { state };
};

export default connect(mapStateToProps, { FilterEmoji })(SearchInput);
