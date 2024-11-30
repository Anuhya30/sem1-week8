import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      {/* Small margin on X-axis */}
      <div className="mx-1 bg-blue-500 text-white p-4">
        <h2 className="text-lg">Margin X-Axis: mx-1</h2>
        <p>This element has a very small horizontal margin.</p>
      </div>

      {/* Medium margin on X-axis */}
      <div className="mx-2 bg-green-500 text-white p-4">
        <h2 className="text-lg">Margin X-Axis: mx-2</h2>
        <p>This element has a medium horizontal margin.</p>
      </div>

      {/* Centering with mx-auto */}
      <div className="mx-auto bg-red-500 text-white p-4 w-1/2">
        <h2 className="text-lg">Margin X-Axis: mx-auto</h2>
        <p>This element is horizontally centered.</p>
      </div>
    </div>
  );
}

export default App;
