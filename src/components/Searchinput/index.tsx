import * as React from "react";
import "./SearchInput.css";

interface Props {
  textChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchInput: React.FC<Props> = ({ textChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    textChange(event);
  };

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  );
};
export default SearchInput;
