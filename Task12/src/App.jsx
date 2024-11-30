import React from 'react';

function App() {
  return (
    <div className="container mx-auto p-4">
      {/* Red Border */}
      <div className="border-4 border-red-500 p-6 mb-4">
        <h1 className="text-xl text-red-500">Red Border (border-red-500)</h1>
        <p>This section has a red-colored border.</p>
      </div>

      {/* Blue Border */}
      <div className="border-4 border-blue-500 p-6 mb-4">
        <h1 className="text-xl text-blue-500">Blue Border (border-blue-500)</h1>
        <p>This section has a blue-colored border.</p>
      </div>

      {/* Gray Border */}
      <div className="border-4 border-gray-300 p-6 mb-4">
        <h1 className="text-xl text-gray-800">Gray Border (border-gray-300)</h1>
        <p>This section has a light gray-colored border.</p>
      </div>

      {/* Red Border with rounded corners */}
      <div className="border-4 border-red-500 rounded-lg p-6">
        <h1 className="text-xl text-red-500">Red Border with Rounded Corners</h1>
        <p>This section has a red-colored border with rounded corners.</p>
      </div>
    </div>
  );
}

export default App;
