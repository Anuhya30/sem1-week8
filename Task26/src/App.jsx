import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">

      {/* Box Shadow Examples */}
      <div>
        <h2 className="text-xl mb-4">Box Shadow Examples</h2>
        <div className="bg-blue-200 p-8 mb-4 text-center text-white shadow-sm">
          shadow-sm (small box shadow)
        </div>
        <div className="bg-blue-300 p-8 mb-4 text-center text-white shadow">
          shadow (default box shadow)
        </div>
        <div className="bg-blue-400 p-8 mb-4 text-center text-white shadow-lg">
          shadow-lg (large box shadow)
        </div>
        <div className="bg-blue-500 p-8 mb-4 text-center text-white shadow-xl">
          shadow-xl (extra-large box shadow)
        </div>
        <div className="bg-blue-600 p-8 mb-4 text-center text-white shadow-2xl">
          shadow-2xl (extra-extra-large box shadow)
        </div>
      </div>

      {/* Drop Shadow Examples */}
      <div>
        <h2 className="text-xl mb-4">Drop Shadow Examples</h2>
        <div className="bg-green-200 p-8 mb-4 text-center text-white drop-shadow-sm">
          drop-shadow-sm (small drop shadow)
        </div>
        <div className="bg-green-300 p-8 mb-4 text-center text-white drop-shadow-md">
          drop-shadow-md (medium drop shadow)
        </div>
        <div className="bg-green-400 p-8 mb-4 text-center text-white drop-shadow-lg">
          drop-shadow-lg (large drop shadow)
        </div>
      </div>

    </div>
  );
}

export default App;
