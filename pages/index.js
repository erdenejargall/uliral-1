import { useRouter } from "next/router";
import { useState } from "react";

const buttonData = [
  { name: "Listing", file: "/task" },
  { name: "Color", file: "/color" },
  { name: "CV", file: "/cv" },
  { name: "Search Task", file: "/task2" },
  { name: "Profile", file: "/profile" },
  { name: "Assignment", file: "/assignment" },
];

export default function Home() {
  const router = useRouter();
  const [grid, setGrid] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center font-extrabold text-3xl text-indigo-600 mt-20">
        Home Page
      </h1>
      
      <div className="flex justify-center mt-8 mb-6">
        <button 
          onClick={() => setGrid(!grid)} 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Switch to {grid ? "List" : "Grid"}
        </button>
      </div>

      <div 
        className={grid 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-4"
          : "space-y-6 mx-4"
        }
      >
        {buttonData.map((item) => (
          <div 
            key={item.name} 
            className="flex justify-center"
          >
            <button 
              onClick={() => router.push(item.file)}
              className="w-48 h-16 bg-gray-600 text-white rounded-lg border-2 border-transparent hover:bg-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
