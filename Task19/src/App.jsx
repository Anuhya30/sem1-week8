import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gray-100 p-8 space-y-8">
      
      <div>
        <h2 className="text-xl mb-4">Flex Container: `flex`</h2>
        <div className="flex bg-blue-100 p-4 space-x-4">
          <div className="bg-blue-500 text-white p-4">Item 1</div>
          <div className="bg-blue-500 text-white p-4">Item 2</div>
          <div className="bg-blue-500 text-white p-4">Item 3</div>
        </div>
      </div>

  
      <div>
        <h2 className="text-xl mb-4">Flex Direction: `flex-row` and `flex-col`</h2>
   
        <div className="flex flex-row bg-green-100 p-4 space-x-4 mb-4">
          <div className="bg-green-500 text-white p-4">Row 1</div>
          <div className="bg-green-500 text-white p-4">Row 2</div>
        </div>
       
        <div className="flex flex-col bg-red-100 p-4 space-y-4">
          <div className="bg-red-500 text-white p-4">Column 1</div>
          <div className="bg-red-500 text-white p-4">Column 2</div>
        </div>
      </div>

     
      <div>
        <h2 className="text-xl mb-4">Justify Content: `justify-start`, `justify-center`, `justify-between`</h2>
        
        <div className="flex justify-start bg-purple-100 p-4 space-x-4 mb-4">
          <div className="bg-purple-500 text-white p-4">Start 1</div>
          <div className="bg-purple-500 text-white p-4">Start 2</div>
        </div>
       
        <div className="flex justify-center bg-orange-100 p-4 space-x-4 mb-4">
          <div className="bg-orange-500 text-white p-4">Center 1</div>
          <div className="bg-orange-500 text-white p-4">Center 2</div>
        </div>
     
        <div className="flex justify-between bg-teal-100 p-4">
          <div className="bg-teal-500 text-white p-4">Between 1</div>
          <div className="bg-teal-500 text-white p-4">Between 2</div>
        </div>
      </div>

    
      <div>
        <h2 className="text-xl mb-4">Align Items: `items-start`, `items-center`, `items-end`</h2>
        <div className="flex items-start bg-gray-100 p-4 h-32 space-x-4 mb-4">
          <div className="bg-gray-500 text-white p-4 h-12">Start</div>
          <div className="bg-gray-500 text-white p-4 h-24">Start</div>
        </div>
        <div className="flex items-center bg-pink-100 p-4 h-32 space-x-4 mb-4">
          <div className="bg-pink-500 text-white p-4 h-12">Center</div>
          <div className="bg-pink-500 text-white p-4 h-24">Center</div>
        </div>
        <div className="flex items-end bg-indigo-100 p-4 h-32 space-x-4">
          <div className="bg-indigo-500 text-white p-4 h-12">End</div>
          <div className="bg-indigo-500 text-white p-4 h-24">End</div>
        </div>
      </div>

  
      <div>
        <h2 className="text-xl mb-4">Flex Wrap: `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`</h2>
       
        <div className="flex flex-wrap bg-yellow-100 p-4 w-full">
          <div className="bg-yellow-500 text-white p-4 m-2 w-1/3">Wrap 1</div>
          <div className="bg-yellow-500 text-white p-4 m-2 w-1/3">Wrap 2</div>
          <div className="bg-yellow-500 text-white p-4 m-2 w-1/3">Wrap 3</div>
          <div className="bg-yellow-500 text-white p-4 m-2 w-1/3">Wrap 4</div>
        </div>
        
        <div className="flex flex-nowrap bg-lime-100 p-4 overflow-x-auto">
          <div className="bg-lime-500 text-white p-4 m-2 w-1/3">No Wrap 1</div>
          <div className="bg-lime-500 text-white p-4 m-2 w-1/3">No Wrap 2</div>
          <div className="bg-lime-500 text-white p-4 m-2 w-1/3">No Wrap 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
