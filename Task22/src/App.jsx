import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">

      {/* Positioning Examples */}
      <div>
        <h2 className="text-xl mb-4">Positioning Examples</h2>

        {/* Static */}
        <div className="bg-blue-200 text-center text-white p-4 mb-2">
          static (default positioning)
        </div>

        {/* Relative */}
        <div className="bg-blue-300 relative text-center text-white p-4 mb-2">
          relative (positioned relative to its normal position)
        </div>

        {/* Absolute */}
        <div className="bg-blue-400 absolute top-0 left-0 text-center text-white p-4 mb-2">
          absolute (positioned relative to the nearest positioned ancestor)
        </div>

        {/* Fixed */}
        <div className="bg-blue-500 fixed top-0 left-0 text-center text-white p-4 mb-2">
          fixed (positioned relative to the viewport)
        </div>

        {/* Sticky */}
        <div className="bg-blue-600 sticky top-0 text-center text-white p-4 mb-2">
          sticky (scrolls with the page until it reaches the defined top position)
        </div>
      </div>

      {/* Top / Right / Bottom / Left Examples */}
      <div>
        <h2 className="text-xl mb-4">Top / Right / Bottom / Left</h2>

        <div className="relative bg-green-200 p-4 mb-2">
          <div className="absolute top-0 left-0 bg-green-500 text-white p-4">
            top-0 left-0 (positioned at the top-left corner)
          </div>
        </div>

        <div className="relative bg-green-300 p-4 mb-2">
          <div className="absolute top-0 right-0 bg-green-600 text-white p-4">
            top-0 right-0 (positioned at the top-right corner)
          </div>
        </div>

        <div className="relative bg-green-400 p-4 mb-2">
          <div className="absolute bottom-0 left-0 bg-green-700 text-white p-4">
            bottom-0 left-0 (positioned at the bottom-left corner)
          </div>
        </div>

        <div className="relative bg-green-500 p-4 mb-2">
          <div className="absolute bottom-0 right-0 bg-green-800 text-white p-4">
            bottom-0 right-0 (positioned at the bottom-right corner)
          </div>
        </div>
      </div>

      {/* Z-Index Examples */}
      <div>
        <h2 className="text-xl mb-4">Z-Index Examples</h2>

        <div className="relative">
          <div className="absolute top-0 left-0 z-0 bg-red-200 p-4 mb-2">
            z-0 (lowest z-index)
          </div>
          <div className="absolute top-0 left-0 z-10 bg-red-300 p-4 mb-2">
            z-10
          </div>
          <div className="absolute top-0 left-0 z-20 bg-red-400 p-4 mb-2">
            z-20
          </div>
          <div className="absolute top-0 left-0 z-30 bg-red-500 p-4">
            z-30 (highest z-index)
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
