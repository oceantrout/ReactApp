import "./App.css";
//import Checkbox from "./Checkbox.js";
import React, { useState, useEffect } from "react";

function App() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };
  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);
  npm;
  useEffect(() => {
    console.log(`saved phrases:"${phrase}"`);
  }, [phrase]);

  return (
    <>
      <label>Favoriate phrase</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}

export default App;
