import { useState } from "react";
import userData from './students.json';

export default function User() {
  const [search, setSearch] = useState('');
  const [grid, setGrid] = useState(true);
  const filteredUsers = userData.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <a href="http://localhost:3000/" className="w-36 border-2 border-red-300 rounded-lg p-4 bg-blue-500 text-white text-center hover:bg-blue-600 transition">
        Go Back
      </a>
      <div className="flex items-center justify-between m-6">
        <h1 className="text-4xl font-bold text-gray-800">Users</h1>
        <button onClick={() => setGrid(!grid)} className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Switch to {grid ? "List" : "Grid"}
        </button>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
        placeholder="Search by name..."
      />
      {filteredUsers.length > 0 ? (
        <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" : "space-y-4 mt-6"}>
          {filteredUsers.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition p-4"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">ID: {item.id}</h2>
              <p className="text-gray-600">{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-700 text-center mt-4">No students found</p>
      )}
    </div>
  );
}