import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">

      {/* Small (sm) Example */}
      <div>
        <h2 className="text-xl mb-4">Small (sm) Example</h2>
        <div className="sm:bg-blue-500 sm:text-lg p-8 text-center text-white">
          sm:bg-blue-500 and sm:text-lg (Blue background and larger text on small screens)
        </div>
      </div>

      {/* Medium (md) Example */}
      <div>
        <h2 className="text-xl mb-4">Medium (md) Example</h2>
        <div className="md:flex md:items-center bg-green-200 p-8 text-center text-white">
          md:flex and md:items-center (flex layout and center items on medium screens)
        </div>
      </div>

      {/* Large (lg) Example */}
      <div>
        <h2 className="text-xl mb-4">Large (lg) Example</h2>
        <div className="lg:grid lg:grid-cols-4 gap-4 bg-purple-200 p-8 text-center text-white">
          lg:grid and lg:grid-cols-4 (Grid layout with 4 columns on large screens)
        </div>
      </div>

      {/* Extra Large (xl) Example */}
      <div>
        <h2 className="text-xl mb-4">Extra Large (xl) Example</h2>
        <div className="xl:w-full bg-yellow-200 p-8 text-center text-white">
          xl:w-full (Full width on extra large screens)
        </div>
      </div>

    </div>
  );
}

export default App;
