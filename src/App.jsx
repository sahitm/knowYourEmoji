import "./App.css";
import { React, useState } from "react";

export default function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance",
    "📕": "book",
    "🖥️": "monitor",
    "👍": "thumbsup",
    "😘": "kiss",
    "🤐": "shutup",
    "👿": "angry"
  };

  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function handleEmojiChange(e) {
    var inputValue = e.target.value;
    setEmoji(inputValue);

    if (inputValue in emojiDictionary) {
      setMeaning(emojiDictionary[inputValue]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClick(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  var Emojis = Object.keys(emojiDictionary);

  var allEmojis = Emojis.map((emoji) => (
    <span onClick={() => emojiClick(emoji)}>{emoji}</span>
  ));

  return (
    <div className="App">
      <h1>KNOW YOUR EMOJI</h1>
      <input onChange={handleEmojiChange}></input>
      <h3>{meaning}</h3>
      <h3>{emoji}</h3>
      <h3>{allEmojis}</h3>
    </div>
  );
}
