import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">

      {/* Border Width Examples */}
      <div>
        <h2 className="text-xl mb-4">Border Width Examples</h2>
        <div className="border p-4 mb-2">border (default 1px)</div>
        <div className="border-2 p-4 mb-2">border-2 (2px width)</div>
        <div className="border-4 p-4 mb-2">border-4 (4px width)</div>
        <div className="border-8 p-4 mb-2">border-8 (8px width)</div>
      </div>

      {/* Border Color Examples */}
      <div>
        <h2 className="text-xl mb-4">Border Color Examples</h2>
        <div className="border border-red-500 p-4 mb-2">border-red-500</div>
        <div className="border border-gray-300 p-4 mb-2">border-gray-300</div>
        <div className="border border-blue-500 p-4 mb-2">border-blue-500</div>
      </div>

      {/* Border Radius Examples */}
      <div>
        <h2 className="text-xl mb-4">Border Radius Examples</h2>
        <div className="border border-gray-400 rounded-none p-4 mb-2">rounded-none (no radius)</div>
        <div className="border border-gray-400 rounded-sm p-4 mb-2">rounded-sm (small radius)</div>
        <div className="border border-gray-400 rounded-lg p-4 mb-2">rounded-lg (large radius)</div>
        <div className="border border-gray-400 rounded-full p-4 mb-2">rounded-full (fully rounded)</div>
      </div>

      {/* Outline Examples */}
      <div>
        <h2 className="text-xl mb-4">Outline Examples</h2>
        <div className="outline-none p-4 mb-2 bg-gray-200">outline-none (no outline)</div>
        <div className="outline-white p-4 mb-2 bg-gray-700 text-white">outline-white (white outline)</div>
      </div>

    </div>
  );
}

export default App;
