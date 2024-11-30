import React, { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">

      {/* Transition Examples */}
      <div>
        <h2 className="text-xl mb-4">Transition Examples</h2>
        <div
          className={`bg-blue-400 p-8 mb-4 text-center text-white 
            ${isHovered ? 'scale-110' : 'scale-100'} 
            transition-all duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          transition-all (scale on hover)
        </div>

        <div
          className={`bg-green-400 p-8 mb-4 text-center text-white 
            ${isHovered ? 'rotate-45' : 'rotate-0'}
            transition-transform duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          transition-transform (rotate on hover)
        </div>

        <div
          className={`bg-red-400 p-8 mb-4 text-center text-white 
            ${isHovered ? 'opacity-50' : 'opacity-100'}
            transition-opacity duration-150`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          transition-opacity (opacity on hover)
        </div>

        <div
          className={`bg-purple-400 p-8 mb-4 text-center text-white
            ${isHovered ? 'bg-yellow-500' : 'bg-purple-400'}
            transition-colors duration-150`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          transition-colors (color change on hover)
        </div>
      </div>

      {/* Duration Examples */}
      <div>
        <h2 className="text-xl mb-4">Duration Examples</h2>
        <div
          className="bg-blue-200 p-8 mb-4 text-center text-white transition-all duration-75"
        >
          duration-75 (75ms duration)
        </div>
        <div
          className="bg-blue-300 p-8 mb-4 text-center text-white transition-all duration-150"
        >
          duration-150 (150ms duration)
        </div>
        <div
          className="bg-blue-400 p-8 mb-4 text-center text-white transition-all duration-300"
        >
          duration-300 (300ms duration)
        </div>
      </div>

      {/* Transform Examples */}
      <div>
        <h2 className="text-xl mb-4">Transform Examples</h2>
        <div
          className="bg-gray-200 p-8 mb-4 text-center text-white transform transition-all scale-100"
        >
          scale-100 (normal size)
        </div>
        <div
          className="bg-gray-300 p-8 mb-4 text-center text-white transform transition-all scale-50"
        >
          scale-50 (50% size)
        </div>
        <div
          className="bg-gray-400 p-8 mb-4 text-center text-white transform transition-all scale-0"
        >
          scale-0 (0% size)
        </div>
        <div
          className="bg-gray-500 p-8 mb-4 text-center text-white transform transition-all rotate-0"
        >
          rotate-0 (no rotation)
        </div>
        <div
          className="bg-gray-600 p-8 mb-4 text-center text-white transform transition-all rotate-90"
        >
          rotate-90 (90° rotation)
        </div>
      </div>

    </div>
  );
}

export default App;
