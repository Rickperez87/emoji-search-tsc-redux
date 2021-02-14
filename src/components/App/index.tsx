import React, { useState } from "react";
import Header from "../Header/index";
import SearchInput from "../Searchinput/index";
import EmojiResults from "../EmojiResults/index";
import filterEmoji from "../../helpers/filterEmoji";

const App = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredEmoji(filterEmoji(event.target.value));
  };

  return (
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
};
export default App;
