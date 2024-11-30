import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Border width with default (1px) border */}
      <div className="border border-gray-500 p-6 m-4">
        <h2 className="text-xl">Default Border (1px)</h2>
        <p>This card has a 1px border.</p>
      </div>

      {/* Border width 2px */}
      <div className="border-2 border-gray-500 p-6 m-4">
        <h2 className="text-xl">Border Width 2px</h2>
        <p>This card has a 2px border.</p>
      </div>

      {/* Border width 4px */}
      <div className="border-4 border-gray-500 p-6 m-4">
        <h2 className="text-xl">Border Width 4px</h2>
        <p>This card has a 4px border.</p>
      </div>

      {/* Border width 8px */}
      <div className="border-8 border-gray-500 p-6 m-4">
        <h2 className="text-xl">Border Width 8px</h2>
        <p>This card has an 8px border.</p>
      </div>

      {/* Border width on an image */}
      <div className="m-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="border-4 border-gray-500 rounded-full w-32 h-32"
        />
        <p className="text-center mt-2">Image with 4px Border</p>
      </div>
    </div>
  );
}

export default App;
