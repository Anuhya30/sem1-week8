import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      {/* Small margin on Y-axis */}
      <div className="my-1 bg-blue-500 text-white p-4 w-1/2 text-center">
        <h2 className="text-lg">Margin Y-Axis: my-1</h2>
        <p>This element has a very small vertical margin.</p>
      </div>

      {/* Medium margin on Y-axis */}
      <div className="my-2 bg-green-500 text-white p-4 w-1/2 text-center">
        <h2 className="text-lg">Margin Y-Axis: my-2</h2>
        <p>This element has a medium vertical margin.</p>
      </div>

      
      <div className="my-4 bg-red-500 text-white p-4 w-1/2 text-center">
        <h2 className="text-lg">Margin Y-Axis: my-4</h2>
        <p>This element has a large vertical margin.</p>
      </div>
    </div>
  );
}

export default App;
