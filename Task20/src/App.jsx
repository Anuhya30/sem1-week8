import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">
      {/* Grid Container Examples */}
      <div>
        <h2 className="text-xl mb-4">Grid Container: `grid`</h2>
        <div className="grid grid-cols-3 gap-4 bg-blue-100 p-4">
          <div className="bg-blue-500 text-white p-4">Item 1</div>
          <div className="bg-blue-500 text-white p-4">Item 2</div>
          <div className="bg-blue-500 text-white p-4">Item 3</div>
        </div>
      </div>

      {/* Grid Template Columns Examples */}
      <div>
        <h2 className="text-xl mb-4">Grid Template Columns</h2>
        {/* Single Column */}
        <div className="grid grid-cols-1 gap-2 bg-green-100 p-4 mb-4">
          <div className="bg-green-500 text-white p-4">Col 1</div>
        </div>
        {/* Two Columns */}
        <div className="grid grid-cols-2 gap-2 bg-red-100 p-4 mb-4">
          <div className="bg-red-500 text-white p-4">Col 1</div>
          <div className="bg-red-500 text-white p-4">Col 2</div>
        </div>
        {/* Four Columns */}
        <div className="grid grid-cols-4 gap-2 bg-purple-100 p-4">
          <div className="bg-purple-500 text-white p-4">Col 1</div>
          <div className="bg-purple-500 text-white p-4">Col 2</div>
          <div className="bg-purple-500 text-white p-4">Col 3</div>
          <div className="bg-purple-500 text-white p-4">Col 4</div>
        </div>
      </div>

      {/* Grid Template Rows Examples */}
      <div>
        <h2 className="text-xl mb-4">Grid Template Rows</h2>
        {/* Single Row */}
        <div className="grid grid-rows-1 gap-2 bg-orange-100 p-4 mb-4">
          <div className="bg-orange-500 text-white p-4">Row 1</div>
        </div>
        {/* Two Rows */}
        <div className="grid grid-rows-2 gap-2 bg-teal-100 p-4 mb-4">
          <div className="bg-teal-500 text-white p-4">Row 1</div>
          <div className="bg-teal-500 text-white p-4">Row 2</div>
        </div>
        {/* Three Rows */}
        <div className="grid grid-rows-3 gap-2 bg-yellow-100 p-4">
          <div className="bg-yellow-500 text-white p-4">Row 1</div>
          <div className="bg-yellow-500 text-white p-4">Row 2</div>
          <div className="bg-yellow-500 text-white p-4">Row 3</div>
        </div>
      </div>

      {/* Grid Gap Examples */}
      <div>
        <h2 className="text-xl mb-4">Grid Gap</h2>
        {/* Small Gap */}
        <div className="grid grid-cols-3 gap-1 bg-pink-100 p-4 mb-4">
          <div className="bg-pink-500 text-white p-4">Item 1</div>
          <div className="bg-pink-500 text-white p-4">Item 2</div>
          <div className="bg-pink-500 text-white p-4">Item 3</div>
        </div>
    
        <div className="grid grid-cols-3 gap-4 bg-indigo-100 p-4 mb-4">
          <div className="bg-indigo-500 text-white p-4">Item 1</div>
          <div className="bg-indigo-500 text-white p-4">Item 2</div>
          <div className="bg-indigo-500 text-white p-4">Item 3</div>
        </div>
      
        <div className="grid grid-cols-3 gap-8 bg-gray-100 p-4">
          <div className="bg-gray-500 text-white p-4">Item 1</div>
          <div className="bg-gray-500 text-white p-4">Item 2</div>
          <div className="bg-gray-500 text-white p-4">Item 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
