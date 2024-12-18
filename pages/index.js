import { useRouter } from "next/router";
import { useState } from "react"; 

const buttonData = [
  { name: "listing", file: "/task" },
  { name: "color", file: "/color" },
  { name: "cv", file: "/cv" },
  { name: "search task", file: "/task2" },
  { name: "profile", file: "/profile" },
]; 

export default function Home() {
  const router = useRouter();
  const [grid, setGrid] = useState(false);

  return (
    <div>
      <h1 className="flex justify-center align-start pt-24 font-bold text-2xl">
        HomePage
      </h1>
      <div className="flex items-center justify-between m-6">
        <button 
          onClick={() => setGrid(!grid)} 
          className="p-6 bg-blue-300 text-white rounded hover:bg-red-500 transition"
        >
          go to {grid ? "List" : "Grid"}
        </button>
      </div>
      <div className={grid ? "flex grid grid-cols-1 sm:grid-cols-2 gap-5" : "space-y-4"}>
        {buttonData.map((item) => (
          <div 
            key={item.name}
            className="p-4"
          >
            <button 
              onClick={() => router.push(item.file)}
              className="w-36 border-2 h-16 border-bg-red-300 rounded-lg p-4 bg-gray-500 hover:bg-gray-300"
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 