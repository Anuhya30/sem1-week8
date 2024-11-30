export default function App() {
  return (
    <div className="container mx-auto p-4">
            <div className="bg-gray-200 p-6 mb-4">
        <h1 className="text-red-500 text-xl">Red Text (text-red-500)</h1>
        <p className="text-red-500">This paragraph has red-colored text.</p>
      </div>

    
      <div className="bg-gray-200 ">
        <h1 className="text-blue-500 text-xl">Blue Text (text-blue-500)</h1>
        <p className="text-blue-500">This paragraph has blue-colored text.</p>
      </div>

     
      <div className="bg-gray-800 ">
        <h1 className="text-white text-xl">White Text (text-white)</h1>
        <p className="text-white">This paragraph has white-colored text, on a dark background.</p>
      </div>

    
      <div className="bg-gray-200">
        <h1 className="text-gray-800 text-xl">Gray Text (text-gray-800)</h1>
        <p className="text-gray-800">This paragraph has gray-colored text.</p>
      </div>
    </div>
  );
}