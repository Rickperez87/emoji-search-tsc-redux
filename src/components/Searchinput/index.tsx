import * as React from "react";
import "./SearchInput.css";

import { filterEmojiAction } from "../../state/";
import { EmojiState, FilterEmojiAction } from "../../state";
import { connect, ConnectedProps } from "react-redux";

//working on making this prop typed... So far I
interface DispatchProps extends PropsFromRedux {
  filterEmojiAction: <FilterEmojiAction>(
    Event: React.ChangeEvent<HTMLInputElement>
  ) => FilterEmojiAction;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

const SearchInput: React.FC<DispatchProps> = ({ filterEmojiAction }) => {
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

const mapStateToProps = (state: EmojiState) => {
  return { state };
};

const connector = connect(mapStateToProps, {
  filterEmojiAction,
});

export default connector(SearchInput);
