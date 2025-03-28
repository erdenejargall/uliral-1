import { useEffect, useState } from "react";

export default function Effect() {
  const [color, setColor] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    setColor("red");
  }, []);

  return (
    <div className={`bg-${color}-800 h-screen`}>
      {data?.map((item) => item?.id)}
      <button
        className="p-6 bg-red-800 text-white mx-2"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="p-6 bg-blue-800 text-white mx-2"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="p-6 bg-yellow-800 text-white mx-2"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="p-6 bg-pink-800 text-white mx-2"
        onClick={() => setColor("")}
      >
        Clear
      </button>
    </div>
  );
}