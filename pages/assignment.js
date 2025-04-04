import { useState } from "react";
import studentData from './students.json';

export default function Student() {
  const [search, setSearch] = useState('');
  const [grid, setGrid] = useState(false);
  const filteredStudents = studentData.filter((student) => student.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-gray-600 min-h-screen p-8">
      <a href="https://erdenejargal.vercel.app/" className="w-24 border-2 border-red-300 rounded-lg p-4 bg-blue-500 text-white text-center hover:bg-red-500 transition">
        Go Back
      </a>
      <div className="flex items-center justify-between m-6">
        <h1 className="text-4xl font-bold text-gray-800">Students</h1>
        <button onClick={() => setGrid(!grid)} className="p-4 bg-blue-400 text-white rounded-lg hover:bg-red-500 transition">
          Go to {grid ? "List" : "Grid"}
        </button>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg shadow-lg p-3 text-gray-700"
        placeholder="Search by name"
      />
      {filteredStudents.length > 0 ? (
        <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" : "space-y-4 mt-6"}>
          {filteredStudents.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-100 border border-gray-200 rounded-lg shadow-xl p-4"
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
