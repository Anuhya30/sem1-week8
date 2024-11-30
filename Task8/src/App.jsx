import React from 'react';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl underline">Underline Text</h1>
      <p className="underline">
        This paragraph has an underline decoration.
      </p>

      <h1 className="text-xl line-through">Line Through Text</h1>
      <p className="line-through">
        This paragraph has a line through the text (strikethrough).
      </p>

      <h1 className="text-xl no-underline">No Underline Text</h1>
      <p className="no-underline">
        This paragraph has no underline decoration, even if it's commonly underlined.
      </p>
    </div>
  );
}

export default App;
