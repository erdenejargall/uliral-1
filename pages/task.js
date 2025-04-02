import {useState} from "react";

export default function Task() {
  const [grid, setGrid] = useState(false);

   const data = [
    {
    id: 1,
    title: "Test 1",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    {
    id: 2,
    title: "Test 2",
    description: "bbbbbbbbbbbbbbbbbbbbbbbbbb"
    },
    {
    id: 3,
    title: "Test 3",
    description: "cccccccccccccccccccccccc"
    },
    {
    id: 4,
    title: "Test 4",
    description: "dddddddddddddddddddddddd"
    },
    {
    id: 4,
    title: "Test 4",
    description: "dddddddddddddddddddddddd"
    },
    {
    id: 4,
    title: "Test 4",
    description: "dddddddddddddddddddddddd"
    }
   ];
   return(
    <div className="p-8 m-6">
      <a href="https://erdenejargal.vercel.app/" className="w-36 border-2 border-bg-red-300 rounded-lg p-4 bg-blue-400"> 
 go back
 </a>
       <div className="flex items-center justify-between m-6">
       <h1 className="text-4xl style-bold">dsadasdsasdsdaadsasdasd</h1>
       <button onClick={()=> setGrid(!grid)} className="p-6 bg-blue-300 text-white rounded hover:bg-red-500 transition">
        go to {grid ? "List":"Grid"}
       </button>
       </div>
       <div className={
        grid ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : "space-y-4"
       }>
        {data.map((items) => (
          <div 
          key={items.id}
          className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md trasition p-4"
          >
          <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
          <p className="text-gray-600">{items.description}</p>
          </div>
        ))}
       </div>
    </div>
   );

}