import emojiList from "./emojiList.json";

export default function filterEmoji(searchText: string, maxResults = 20) {
  return emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
