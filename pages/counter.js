import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Counter() {
    const [time, setTime] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((count) => {
                if (count > 9) {
                    clearInterval(interval);
                    return "'s up";
                }
                return count + 1;
            });
        }, 500);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-8 m-6">
            <button href="https://erdenejargal.vercel.app/" className="w-36 border-2 border-bg-red-300 rounded-lg p-4 bg-blue-400"> 
        go back
      </button>

            <div className="fixed inset-0 flex items-center justify-center">
                <p className={`text-5xl font-bold transition-all duration-300 ${time === "'s up" ? "text-green-500 scale-110 animate-pulse" : ""}`}>
                    Time {time}
                </p>
            </div>
        </div>
    );
}
//second edition
import { useState, useEffect, useRef } from "react";

export default function Task() {
  const [time, setTime] = useState(0);
  const [delay, setDelay] = useState(1000);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function tick() {
      setTime((prevTime) => {
        const newTime = prevTime + 1;

        if (newTime > 0) {
          setDelay((prevDelay) => prevDelay - 5);
        }

        return newTime;
      });

      timeoutRef.current = setTimeout(tick, delay);
    }

    timeoutRef.current = setTimeout(tick, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [delay]);

  return (
    <div
      className="h-screen w-screen p-8 m-0 flex justify-center items-center">
        <div className="flex items-center justify-center">
                <p className={`text-5xl font-bold`}>
                    Time: {time}
                </p>
                <p className={`px-8 text-5xl font-bold`}>
                    Delay: {delay}
                </p>
            </div>
      </div>
  );
}
