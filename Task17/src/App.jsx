import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      {/* Small horizontal padding */}
      <div className="px-1 bg-blue-500 text-white py-4 w-1/2 text-center">
        <h2 className="text-lg">Padding X-Axis: px-1</h2>
        <p>This element has very small horizontal padding.</p>
      </div>

      {/* Medium horizontal padding */}
      <div className="px-2 bg-green-500 text-white py-4 w-1/2 text-center">
        <h2 className="text-lg">Padding X-Axis: px-2</h2>
        <p>This element has medium horizontal padding.</p>
      </div>

      {/* Large horizontal padding */}
      <div className="px-4 bg-red-500 text-white py-4 w-1/2 text-center">
        <h2 className="text-lg">Padding X-Axis: px-4</h2>
        <p>This element has large horizontal padding.</p>
      </div>
    </div>
  );
}

export default App;
