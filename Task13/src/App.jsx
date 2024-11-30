import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Card with no border radius */}
      <div className="border border-gray-500 rounded-none p-6 m-4">
        <h2 className="text-xl">No Border Radius</h2>
        <p>This card has square corners.</p>
      </div>

      {/* Card with small border radius */}
      <div className="border border-gray-500 rounded-sm p-6 m-4">
        <h2 className="text-xl">Small Border Radius</h2>
        <p>This card has small rounded corners.</p>
      </div>

      {/* Card with medium border radius */}
      <div className="border border-gray-500 rounded-md p-6 m-4">
        <h2 className="text-xl">Medium Border Radius</h2>
        <p>This card has medium rounded corners.</p>
      </div>

      {/* Card with large border radius */}
      <div className="border border-gray-500 rounded-lg p-6 m-4">
        <h2 className="text-xl">Large Border Radius</h2>
        <p>This card has large rounded corners.</p>
      </div>

      {/* Circular image with full border radius */}
      <div className="m-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-gray-500"
        />
        <p className="text-center mt-2">Circular Image</p>
      </div>
    </div>
  );
}

export default App;
