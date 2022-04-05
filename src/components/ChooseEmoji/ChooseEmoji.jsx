import { useState } from "react";

const ChooseEmoji = () => {
  const [emoji, setEmoji] = useState(":)");

  return (
    <div>
      <button onClick={() => setEmoji(":)")}>🙂</button>
      <button onClick={() => setEmoji(":(")}>🙁</button>
      <button onClick={() => setEmoji("XD")}>😆</button>
      <h1>{emoji}</h1>
    </div>
  );
};

export default ChooseEmoji;
