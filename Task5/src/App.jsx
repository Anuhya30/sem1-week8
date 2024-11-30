import React, { useState } from "react";

const TextTransform = () => {
  const [text, setText] = useState("");
  const [transformedText, setTransformedText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const transformText = (type) => {
    if (type === "uppercase") {
      setTransformedText(text.toUpperCase());
    } else if (type === "lowercase") {
      setTransformedText(text.toLowerCase());
    } else if (type === "capitalize") {
      setTransformedText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
    }
  };

  return (
    <div className="text-transform">
      <h2>Text Transform</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here"
      ></textarea>
      <div>
        <button onClick={() => transformText("uppercase")}>UPPERCASE</button><br /><br />
        <button onClick={() => transformText("lowercase")}>lowercase</button><br /><br />
        <button onClick={() => transformText("capitalize")}>Capitalize</button><br /><br />
      </div>
      <div>
        <h3>Transformed Text:</h3>
        <p>{transformedText}</p>
      </div>
    </div>
  );
};

export default TextTransform;
