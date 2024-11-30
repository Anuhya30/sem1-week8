import React from 'react';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl leading-none">Leading None (line-height: 1)</h1>
      <p className="leading-none">
        This is a paragraph with very tight line spacing.
      </p>

      <h1 className="text-xl leading-tight">Leading Tight (line-height: 1.25)</h1>
      <p className="leading-tight">
        This paragraph has tighter line spacing.
      </p>

      <h1 className="text-xl leading-normal">Leading Normal (line-height: 1.5)</h1>
      <p className="leading-normal">
        This paragraph uses the default line-height, making it easier to read.
      </p>

      <h1 className="text-xl leading-loose">Leading Loose (line-height: 1.75)</h1>
      <p className="leading-loose">
        This paragraph has a looser line spacing for more airy text.
      </p>
    </div>
  );
}

export default App;
