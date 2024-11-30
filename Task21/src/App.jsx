import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">
      {/* Width Examples */}
      <div>
        <h2 className="text-xl mb-4">Width: `w-1/4`, `w-1/2`, `w-3/4`, `w-full`, `w-screen`</h2>
        <div className="bg-blue-100 w-1/4 text-center text-white p-4 mb-2">w-1/4</div>
        <div className="bg-blue-200 w-1/2 text-center text-white p-4 mb-2">w-1/2</div>
        <div className="bg-blue-300 w-3/4 text-center text-white p-4 mb-2">w-3/4</div>
        <div className="bg-blue-400 w-full text-center text-white p-4 mb-2">w-full</div>
        <div className="bg-blue-500 w-screen text-center text-white p-4">w-screen</div>
      </div>

      {/* Max Width Examples */}
      <div>
        <h2 className="text-xl mb-4">Max Width: `max-w-xs`, `max-w-md`, `max-w-lg`, `max-w-full`</h2>
        <div className="bg-green-100 max-w-xs text-center text-white p-4 mb-2">max-w-xs</div>
        <div className="bg-green-200 max-w-md text-center text-white p-4 mb-2">max-w-md</div>
        <div className="bg-green-300 max-w-lg text-center text-white p-4 mb-2">max-w-lg</div>
        <div className="bg-green-400 max-w-full text-center text-white p-4">max-w-full</div>
      </div>

      {/* Height Examples */}
      <div>
        <h2 className="text-xl mb-4">Height: `h-4`, `h-8`, `h-16`, `h-32`, `h-auto`, `h-screen`</h2>
        <div className="bg-red-100 h-4 text-center text-white p-2 mb-2">h-4</div>
        <div className="bg-red-200 h-8 text-center text-white p-2 mb-2">h-8</div>
        <div className="bg-red-300 h-16 text-center text-white p-2 mb-2">h-16</div>
        <div className="bg-red-400 h-32 text-center text-white p-2 mb-2">h-32</div>
        <div className="bg-red-500 h-auto text-center text-white p-2 mb-2">h-auto</div>
        <div className="bg-red-600 h-screen text-center text-white p-2">h-screen</div>
      </div>

      {/* Min Height Examples */}
      <div>
        <h2 className="text-xl mb-4">Min Height: `min-h-full`, `min-h-screen`</h2>
        <div className="bg-purple-100 min-h-full text-center text-white p-4 mb-4">
          min-h-full (fills parent container)
        </div>
        <div className="bg-purple-200 min-h-screen text-center text-white p-4">
          min-h-screen (fills viewport height)
        </div>
      </div>
    </div>
  );
}

export default App;
