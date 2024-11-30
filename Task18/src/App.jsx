import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-8">
      {/* Flexbox with small gap */}
      <div className="flex gap-1 bg-blue-100 p-4 w-full justify-center">
        <div className="bg-blue-500 text-white p-2">Item 1</div>
        <div className="bg-blue-500 text-white p-2">Item 2</div>
        <div className="bg-blue-500 text-white p-2">Item 3</div>
      </div>

      {/* Flexbox with medium gap */}
      <div className="flex gap-2 bg-green-100 p-4 w-full justify-center">
        <div className="bg-green-500 text-white p-2">Item 1</div>
        <div className="bg-green-500 text-white p-2">Item 2</div>
        <div className="bg-green-500 text-white p-2">Item 3</div>
      </div>

      {/* Grid with large gap */}
      <div className="grid grid-cols-3 gap-4 bg-red-100 p-4 w-full">
        <div className="bg-red-500 text-white p-2 text-center">Item 1</div>
        <div className="bg-red-500 text-white p-2 text-center">Item 2</div>
        <div className="bg-red-500 text-white p-2 text-center">Item 3</div>
      </div>
    </div>
  );
}

export default App;
