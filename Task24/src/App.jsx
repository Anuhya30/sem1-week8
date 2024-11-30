import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">

      {/* Opacity Examples */}
      <div>
        <h2 className="text-xl mb-4">Opacity Examples</h2>
        <div className="bg-blue-200 opacity-0 p-4 mb-2 text-center text-white">
          opacity-0 (invisible)
        </div>
        <div className="bg-blue-300 opacity-25 p-4 mb-2 text-center text-white">
          opacity-25 (25% opacity)
        </div>
        <div className="bg-blue-400 opacity-50 p-4 mb-2 text-center text-white">
          opacity-50 (50% opacity)
        </div>
        <div className="bg-blue-500 opacity-75 p-4 mb-2 text-center text-white">
          opacity-75 (75% opacity)
        </div>
        <div className="bg-blue-600 opacity-100 p-4 mb-2 text-center text-white">
          opacity-100 (100% opacity)
        </div>
      </div>

      {/* Visibility Examples */}
      <div>
        <h2 className="text-xl mb-4">Visibility Examples</h2>
        <div className="bg-green-200 visible p-4 mb-2 text-center text-white">
          visible (visible element)
        </div>
        <div className="bg-green-300 invisible p-4 mb-2 text-center text-white">
          invisible (invisible element)
        </div>
      </div>

    </div>
  );
}

export default App;
