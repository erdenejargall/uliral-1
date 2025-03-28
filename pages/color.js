import { useState } from "react";

export default function Task() {
  const [backgroundColor, setBackgroundColor] = useState("blank");

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div>
      <a href="https://erdenejargal.vercel.app/" className="w-36 border-2 border-bg-red-300 rounded-lg p-4 bg-blue-400"> 
 go back
 </a>
    <div
      className="h-screen w-screen p-8 m-0 flex justify-center items-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex justify-center h-screen">
        <button
          onClick={() => handleColorChange("red")}
          className="p-6 bg-red-300 text-white mx-2 h-full"
        >
          Red
        </button>
        <button
          onClick={() => handleColorChange("blue")}
          className="p-6 bg-blue-300 text-white mx-2 h-full"
        >
          Blue
        </button>
        <button
          onClick={() => handleColorChange("yellow")}
          className="p-6 bg-yellow-300 text-white mx-2 h-full"
        >
          Yellow
        </button>
      </div>
    </div>
    </div>
  );
}
