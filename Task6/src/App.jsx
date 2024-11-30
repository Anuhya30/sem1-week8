import React, { useState } from "react";

const LetterSpacing = () => {
  const [text, setText] = useState("");
  const [spacing, setSpacing] = useState("normal");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const applySpacing = (style) => {
    setSpacing(style);
  };

  return (
    <div className="letter-spacing">
      <h2>Letter Spacing</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here"
      ></textarea>
      <div>
        <button onClick={() => applySpacing("tracking-tight")}>Tracking Tight</button><br /><br />
        <button onClick={() => applySpacing("tracking-wide")}>Tracking Wide</button><br /><br />
        <button onClick={() => applySpacing("normal")}>Normal Spacing</button><br /><br />
      </div>
      <div>
        <h3>Text with Letter Spacing:</h3>
        <p className={spacing}>{text}</p>
      </div>
    </div>
  );
};

export default LetterSpacing;
